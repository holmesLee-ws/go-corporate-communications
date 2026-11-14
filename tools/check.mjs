#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계, 국내 근거·글로벌 비교의 출처 대조(R10·R11a), 졸업 산출물 기준(R14),
// 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
// 사용: node tools/check.mjs [--release]   (--release: 법률·시행령 행이 모두 law.go.kr로 확인돼야 통과)
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const RELEASE = process.argv.includes("--release");
const errors = [];
const notes = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교", "근거"];
const KINDS = ["법률", "시행령", "고시", "거래소 규정", "기관 자료", "글로벌"];
const PATHS = ["law.go.kr", "krx", "기관", "원문"];

function parseCurriculum(text) {
  const modules = new Map();
  const domestic = new Map();
  const global = new Map();
  const problems = [];
  for (const block of text.split(/^### /m).slice(1)) {
    const head = block.split("\n")[0];
    const m = head.match(/^([SMIPKX]\d+) · (.+)$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) fields[f[1]] = f[2];
    }
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
    domestic.set(id, fields["국내 근거"] || "");
    global.set(id, fields["글로벌 비교"] || "");
  }
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  return { modules, domestic, global, problems };
}

// sources.md 표: | 법령·기준명 | 종류 | 확인한 조문 | URL | 조회일 | 확인 경로 |
function parseSources(text) {
  const rows = [];
  const problems = [];
  let section = "";
  for (const line of text.split("\n")) {
    if (line.startsWith("## ")) section = line.slice(3).trim();
    const c = line.split("|").map((s) => s.trim());
    if (c.length < 8 || !/^https?:\/\//.test(c[4])) continue;
    const row = { name: c[1], kind: c[2], arts: c[3], url: c[4], date: c[5], path: c[6], section };
    if (!KINDS.includes(row.kind)) problems.push(`sources.md 「${row.name}」: 종류 「${row.kind}」 오류`);
    if (!PATHS.includes(row.path)) problems.push(`sources.md 「${row.name}」: 확인 경로 「${row.path}」 오류`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(row.date)) problems.push(`sources.md 「${row.name}」: 조회일 형식 오류`);
    for (const m of row.arts.matchAll(/제\d+조(?:의\d+)?/g)) {
      if (row.arts[m.index + m[0].length] !== "(") problems.push(`sources.md 「${row.name}」 ${m[0]}: 조문 제목 없음`);
    }
    rows.push(row);
  }
  return { rows, problems };
}

function checkDomestic(domestic, rows) {
  const problems = [];
  const dom = rows.filter((r) => r.kind !== "글로벌");
  const names = [...new Set(dom.map((r) => r.name))].sort((a, b) => b.length - a.length);
  const artsOf = (n) => new Set(dom.filter((r) => r.name === n).flatMap((r) => r.arts.match(/제\d+조(?:의\d+)?/g) || []));
  const titleOf = (n, art) => {
    for (const r of dom.filter((x) => x.name === n)) {
      const re = new RegExp(art + "\\(([^)]*)\\)");
      const m = r.arts.match(re);
      if (m) return m[1];
    }
    return null;
  };
  for (const [id, line] of domestic) {
    if (/^해당 없음/.test(line)) { if (!/^해당 없음 — .{8,}/.test(line)) problems.push(`${id}: 국내 근거 「해당 없음」의 이유가 없거나 짧음`); continue; }
    const hits = [];
    for (const n of names) {
      let i = -1;
      while ((i = line.indexOf(n, i + 1)) !== -1) if (!hits.some((h) => i < h.end && i + n.length > h.start)) hits.push({ name: n, start: i, end: i + n.length });
    }
    hits.sort((a, b) => a.start - b.start);
    if (!hits.length) problems.push(`${id}: 국내 근거의 법령·기준명이 sources.md에 없음`);
    for (const m of line.matchAll(/제\d+조(?:의\d+)?/g)) {
      const owner = hits.filter((h) => h.end <= m.index).pop();
      if (!owner) { problems.push(`${id}: ${m[0]}의 법령명이 sources.md에 없음`); continue; }
      // 법령명과 조문 사이에는 앞 조문(제목 포함)·구분자만 올 수 있다. 다른 이름이 끼면 소속을 정할 수 없다.
      const between = line.slice(owner.end, m.index).replace(/제\d+조(?:의\d+)?(?:\([^)]*\))?/g, "").replace(/[\s,·]|및/g, "");
      if (between) { problems.push(`${id}: ${m[0]}의 소속 법령을 정할 수 없음(「${owner.name}」 뒤에 「${between.slice(0, 15)}」)`); continue; }
      if (!artsOf(owner.name).has(m[0])) { problems.push(`${id}: ${owner.name} ${m[0]}이 sources.md에서 확인되지 않음`); continue; }
      const t = line.slice(m.index + m[0].length).match(/^\(([^)]*)\)/);
      if (t) {
        const src = titleOf(owner.name, m[0]);
        if (src !== null && src !== t[1]) problems.push(`${id}: ${owner.name} ${m[0]} 제목 「${t[1]}」이 sources.md 「${src}」와 다름`);
      }
    }
    // 괄호 설명을 지우고 「/」·쉼표·줄표로 나눈 조각에서 법령·기준명 후보를 뽑아 sources.md에 있는지 본다
    const bare = line.replace(/\([^)]*\)/g, "");
    for (const seg of bare.split(/\/|,|—/)) {
      const name = seg.split(/ 제\d/)[0].replace(/[「」]/g, "").trim();
      if (!/(법률|[가-힣]{2,}법|시행령|공시규정|심사지침|안내서|가이드라인|고시|규정)$/.test(name)) continue;
      if (!names.includes(name)) problems.push(`${id}: 법령·기준명 「${name}」이 sources.md에 없음`);
    }
  }
  return problems;
}

// 글로벌 비교 줄의 식별자 allowlist(R11a). 줄마다 1개 이상 뽑혀야 하고, 뽑힌 것은 sources.md 글로벌 행의 이름·조항 칸에 있어야 한다.
const GLOBAL_KEYS = [
  /\d+ CFR Part \d+/g, /\d+ U\.S\.C\. \d+[a-z0-9-]*/g, /\b\d{4}\/\d+\/(?:EC|EU)\b/g, /\(EU\) (?:No )?\d+\/\d{4}/g, /\(EU\) \d{4}\/\d+/g,
  /Regulation FD|Regulation G|Form 8-K|\bMAR\b|\bDSA\b|PSLRA|\bLDA\b|OECD|NIRI|PRSA|IPRA|AMEC|Barcelona Principles|Global Alliance|\bICC\b|\bEPA\b|Defamation Act 2013|Interinstitutional Agreement|AVMSD|Covello/g,
];
function checkGlobal(global, rows) {
  const problems = [];
  const globalRows = rows.filter((r) => r.kind === "글로벌");
  const table = globalRows.map((r) => `${r.name} ${r.arts}`).join("\n");
  for (const [id, line] of global) {
    if (/^해당 없음/.test(line)) { if (!/^해당 없음 — .{8,}/.test(line)) problems.push(`${id}: 글로벌 비교 「해당 없음」의 이유가 없거나 짧음`); continue; }
    for (const axis of line.split(/\s\/\s?|\/\s/)) {
      const keys = [...new Set(GLOBAL_KEYS.flatMap((re) => [...axis.matchAll(re)].map((m) => m[0])))];
      if (!keys.length) { problems.push(`${id}: 글로벌 비교 축 「${axis.slice(0, 30)}…」에서 allowlist 식별자를 뽑지 못함`); continue; }
      const own = globalRows.filter((r) => keys.some((k) => `${r.name} ${r.arts}`.includes(k)));
      for (const k of keys) if (!table.includes(k)) problems.push(`${id}: 글로벌 식별자 「${k}」이 sources.md 글로벌 행에 없음`);
      for (const m of axis.matchAll(/제(\d+)조|Art\. (\d+)|\bs\.(\d+)|§([\d.]+)/g)) {
        const n = (m[1] || m[2] || m[3] || m[4]).replace(/\./g, "\\.");
        const re = m[4] ? new RegExp(`§${n}(?![\\d.])`) : new RegExp(`(Art\\. ${n}(?!\\d)|s\\.${n}(?!\\d))`);
        if (!own.some((r) => re.test(r.arts))) problems.push(`${id}: 글로벌 조항 ${m[0]}이 sources.md 해당 행에 없음`);
      }
    }
  }
  return problems;
}

function checkRelease(rows) {
  const pending = rows.filter((r) => (r.kind === "법률" || r.kind === "시행령") && r.path !== "law.go.kr");
  if (pending.length) {
    const msg = `법률·시행령 ${pending.length}행이 law.go.kr로 재대조되지 않음: ${pending.map((r) => r.name).join(", ")}`;
    if (RELEASE) errors.push(msg); else notes.push(msg);
  }
  for (const r of rows) {
    let host = "";
    try { host = new URL(r.url).hostname; } catch { host = ""; }
    if (r.path === "law.go.kr" && !/(^|\.)law\.go\.kr$/.test(host)) errors.push(`sources.md 「${r.name}」: 확인 경로 law.go.kr인데 URL 호스트가 ${host}`);
    if (r.path === "krx" && host !== "law.krx.co.kr") errors.push(`sources.md 「${r.name}」: 확인 경로 krx인데 URL 호스트가 ${host}`);
  }
  const krx = rows.filter((r) => r.kind === "거래소 규정" && r.path !== "krx");
  if (krx.length) notes.push(`거래소 규정 ${krx.length}행이 거래소 규정 원문(krx)이 아닌 경로로 확인됨`);
}

function checkGraduation(full) {
  const text = (full.split("## 졸업 산출물")[1] || "").split("\n## ")[0];
  const need = ["learner/projects/", "A 위기 대응 메시지 맵", "① 위기 시나리오", "② 이해관계자별 예상 질문", "③ 질문마다 핵심 메시지 3개", "④ 공시·언론·사내 발표 순서", "⑤ 하지 말아야 할 말",
    "B IR 자료 골격", "① 투자 논지", "② 실적·전망", "③ 예측정보 주의 문구", "④ 공정공시 점검", "⑤ 예상 질의응답", "URL", "조회일", "예시 값"];
  return need.filter((n) => !text.includes(n)).map((n) => `tutor/assessment.md 졸업 산출물 기준에 「${n}」 없음`);
}

function findVisualAssets(files) {
  return files.filter((f) => /\.(x?html?|css|svgz?|png|jpe?g|gif|webp|avif|ico|bmp|pdf)$/i.test(f) || (/\.(m?js|cjs|jsx|tsx?)$/i.test(f) && f !== "tools/check.mjs"));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  for (const m of text.matchAll(/(```|~~~)[\s\S]*?\1/g)) if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(m[0])) hits.push(name);
  return hits;
}

function main() {
  const { modules, domestic, global, problems } = parseCurriculum(read("curriculum/map.md"));
  errors.push(...problems);
  if (modules.size === 0) errors.push("모듈을 찾지 못함");
  let rowCount = 0;
  if (!existsSync(join(root, "docs/build/sources.md"))) errors.push("docs/build/sources.md 없음");
  else {
    const { rows, problems: sp } = parseSources(read("docs/build/sources.md"));
    rowCount = rows.length;
    errors.push(...sp, ...checkDomestic(domestic, rows), ...checkGlobal(global, rows));
    checkRelease(rows);
  }
  errors.push(...checkGraduation(read("tutor/assessment.md")));

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  for (const n of notes) console.log(`NOTE ${n}`);
  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 출처 ${rowCount}행, 파일 ${files.length}개 검사${RELEASE ? " (release)" : ""}`);
}

main();

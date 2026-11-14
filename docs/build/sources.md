# 근거 출처

지도(`curriculum/map.md`)와 튜터 지침에 쓴 법령·기준을 공식 출처에서 확인한 기록이다. 한 행이 한 법령·기준이다. `tools/check.mjs`가 지도 「국내 근거」의 법령명·`제N조(의M)`과 「글로벌 비교」의 식별자를 이 표와 대조한다(항·호는 사람이 본다).

- 법규는 바뀐다. 이 표는 조회일 기준이다. 학습 세션의 튜터는 이 표를 믿지 않고 세션 중 다시 확인한다([tutor/legal-sources.md](../../tutor/legal-sources.md)).
- 종류: `법률`·`시행령`·`고시`·`거래소 규정`·`기관 자료`·`글로벌`. 확인 경로: `law.go.kr`(국가법령정보센터 원문), `krx`(거래소 규정 원문), `기관`(소관 기관 자료), `원문`(글로벌 원 기준 기관).
- 국가법령정보센터는 2026-11-14 21:00까지 점검이었다. 그 전에 확인한 국내 법률 행은 확인 경로가 `기관`이고, 점검 뒤 law.go.kr에서 다시 대조해 고친다(`node tools/check.mjs --release`가 이를 강제한다).
- 고칠 때는 조회일을 새로 적는다.

## 국내

| 법령·기준명 | 종류 | 확인한 조문 | URL | 조회일 | 확인 경로 |
|---|---|---|---|---|---|

## 글로벌

EUR-Lex·eCFR 웹 화면·uscode.house.gov가 자동 조회를 막아, 같은 원문을 EU 출판국 저장소(publications.europa.eu), eCFR 공식 API, 미국 정부 출판국(govinfo.gov)에서 읽었다. EUR-Lex CELEX 번호도 함께 적는다.

| 법령·기준명 | 종류 | 확인한 조문 | URL | 조회일 | 확인 경로 |
|---|---|---|---|---|---|
| SEC Regulation FD 17 CFR Part 243 | 글로벌 | §243.100 General rule regarding selective disclosure(시장 전문가·주주에게 미공개 중요정보를 주면 고의면 동시에, 비고의면 신속히 공개), §243.101 Definitions | https://www.ecfr.gov/api/versioner/v1/full/2026-11-01/title-17.xml?part=243 | 2026-11-14 | 원문 |
| SEC Regulation G 17 CFR Part 244 | 글로벌 | §244.100 General rules regarding disclosure of non-GAAP financial measures(가장 가까운 GAAP 수치·조정표 병기) | https://www.ecfr.gov/api/versioner/v1/full/2026-11-01/title-17.xml?part=244 | 2026-11-14 | 원문 |
| PSLRA safe harbor 15 U.S.C. 78u-5 | 글로벌 | Application of safe harbor for forward-looking statements — (c) 예측정보 표시와 의미 있는 경고문이 있으면 사적 소송 책임 면제 | https://www.govinfo.gov/link/uscode/15/78u-5?type=usc&year=mostrecent&link-type=html | 2026-11-14 | 원문 |
| SEC Form 8-K | 글로벌 | Item 2.02 Results of Operations and Financial Condition, Item 7.01 Regulation FD Disclosure(둘 다 furnished로 간주) | https://www.sec.gov/files/form8-k.pdf | 2026-11-14 | 원문 |
| EU Market Abuse Regulation (MAR) (EU) No 596/2014 | 글로벌 | Art. 7 Inside information, Art. 10 Unlawful disclosure of inside information, Art. 17 Public disclosure of inside information(4항 공개 연기). Listing Act (EU) 2024/2809 Art. 2(6)이 Art. 17을 개정, 대부분 2026-06-05부터 적용. CELEX 32014R0596 | https://publications.europa.eu/resource/cellar/329793ac-f1f6-11e3-8cd4-01aa75ed71a1.0006.01/DOC_1 | 2026-11-14 | 원문 |
| EU Listing Act (EU) 2024/2809 | 글로벌 | Art. 4(3): MAR Art. 17(1)·4a·17(4)·17(7) 개정은 2026-06-05부터 적용. CELEX 32024R2809 | https://publications.europa.eu/resource/cellar/43add894-a229-11ef-85f0-01aa75ed71a1.0006.01/DOC_1 | 2026-11-14 | 원문 |
| EU 시청각미디어서비스지침(AVMSD) 2010/13/EU | 글로벌 | Art. 28 텔레비전 방송의 반론권(Chapter IX Right of reply in television broadcasting). 2018/1808로 개정됨 — 현행 통합본은 미확인. CELEX 32010L0013 | https://publications.europa.eu/resource/cellar/3b777bc6-6709-4884-9925-7e47f5607281.0006.01/DOC_1 | 2026-11-14 | 원문 |
| EU Digital Services Act (DSA) (EU) 2022/2065 | 글로벌 | Art. 16 Notice and action mechanisms(호스팅 사업자의 불법 콘텐츠 신고 장치). CELEX 32022R2065 | https://publications.europa.eu/resource/cellar/3ff67256-55c4-11ed-92ed-01aa75ed71a1.0006.01/DOC_1 | 2026-11-14 | 원문 |
| UK Defamation Act 2013 | 글로벌 | s.4 Publication on matter of public interest(공익 사안·합리적 믿음의 항변) | https://www.legislation.gov.uk/ukpga/2013/26/section/4 | 2026-11-14 | 원문 |
| 미국 로비공개법(LDA) 2 U.S.C. 1603 | 글로벌 | Lobbying Disclosure Act of 1995 (Pub. L. 104-65): §1603 Registration of lobbyists, §1604 Reports by registered lobbyists | https://www.govinfo.gov/link/uscode/2/1603?type=usc&year=mostrecent&link-type=html | 2026-11-14 | 원문 |
| EU 의무 투명성 등록부 Interinstitutional Agreement | 글로벌 | Interinstitutional Agreement of 20 May 2021 on a mandatory transparency register(OJ L 207, 11.6.2021). CELEX 32021Q0611(01) | https://publications.europa.eu/resource/cellar/dbdebd16-ca89-11eb-84ce-01aa75ed71a1.0006.01/DOC_1 | 2026-11-14 | 원문 |
| OECD 로비 투명성·청렴 권고 | 글로벌 | Recommendation of the Council on Transparency and Integrity in Lobbying and Influence (OECD/LEGAL/0379). 2010-02-18 채택, 2024-05-03 개정 | https://legalinstruments.oecd.org/public/doc/256/256.en.pdf | 2026-11-14 | 원문 |
| FTC 추천·보증 지침 16 CFR Part 255 | 글로벌 | §255.5 Disclosure of material connections | https://www.ecfr.gov/api/versioner/v1/full/2026-11-01/title-16.xml?part=255 | 2026-11-14 | 원문 |
| ICC 광고·마케팅 커뮤니케이션 강령(2024) | 글로벌 | Article 7 Identification and transparency(광고임을 식별할 수 있게, 상업적 목적을 숨기지 않음) | https://iccwbo.org/wp-content/uploads/sites/3/2024/09/ICC_2024_MarketingCode_2024.pdf | 2026-11-14 | 원문 |
| AMEC Barcelona Principles 3.0 | 글로벌 | 2020-07. 7원칙 — 목표 설정 전제, 산출·성과·잠재 영향, 이해관계자·사회·조직별 성과, 정성+정량, AVE는 커뮤니케이션의 가치가 아님, 전 채널, 무결성·투명성 | https://amecorg.com/barcelona-principles-3-0-translations/ | 2026-11-14 | 원문 |
| AMEC Integrated Evaluation Framework | 글로벌 | Objectives → Inputs → Activities → Outputs → Out-takes → Outcomes → Impact(페이지에 버전·날짜 없음) | https://amecorg.com/amecframework/ | 2026-11-14 | 원문 |
| Global Alliance 윤리 원칙 | 글로벌 | Global Principles of Ethical Practice in Public Relations and Communication Management — 2003 제정, 2018 개정. 같은 페이지 안 원칙 수 표기가 엇갈려 수는 인용하지 않는다 | https://globalalliancepr.org/ethics-guidelines/ | 2026-11-14 | 원문 |
| PRSA 윤리강령 | 글로벌 | PRSA Code of Ethics — 6가치(Advocacy, Honesty, Expertise, Independence, Loyalty, Fairness)와 6행동 조항(Free Flow of Information, Competition, Disclosure of Information, Safeguarding Confidences, Conflicts of Interest, Enhancing the Profession) | https://www.prsa.org/about/prsa-code-of-ethics | 2026-11-14 | 원문 |
| IPRA 행동강령 | 글로벌 | IPRA Code of Conduct — 2010-11-05 채택, 18개 조항(Transparency·Disclosure 포함) | https://www.ipra.org/member-services/code-of-conduct/ | 2026-11-14 | 원문 |
| NIRI 윤리강령 | 글로벌 | NIRI Code of Ethics — 회원 윤리 공약, Ethics Council 운영. 조항 본문은 회원 전용이라 미확인 | https://www.niri.org/membership/code-of-ethics | 2026-11-14 | 원문 |
| EU 근로자 정보·협의 지침 2002/14/EC | 글로벌 | Art. 4 Practical arrangements for information and consultation(경영 동향·고용 전망·작업조직 변경의 정보제공·협의). CELEX 32002L0014 | https://publications.europa.eu/resource/cellar/f2bc5eea-9cc4-4f56-889d-3cc4c5ee5927.0004.01/DOC_1 | 2026-11-14 | 원문 |
| Covello 메시지 매핑(US EPA 게시 자료) | 글로벌 | 질문 1개 → 핵심 메시지 3개 → 메시지마다 근거 3개, 「9 seconds or 27 words」. 「27/9/3 규칙」이라는 이름은 문서에 없다 | https://www.epa.gov/sites/default/files/2015-09/documents/thurs_georgia_9_10_915_covello_4.pdf | 2026-11-14 | 원문 |

## 학술 근거(지도의 「근거」 칸)

| 문헌 | 확인 | URL | 조회일 |
|---|---|---|---|
| Coombs, W. T. (2007). Protecting Organization Reputations During a Crisis: The Development and Application of Situational Crisis Communication Theory. Corporate Reputation Review 10(3), 163–176 | DOI 10.1057/palgrave.crr.1550049 (Crossref) | https://doi.org/10.1057/palgrave.crr.1550049 | 2026-11-14 |
| Grunig, J. E. (Ed.) (1992). Excellence in Public Relations and Communication Management | DOI 10.4324/9780203812303 | https://www.taylorfrancis.com/books/edit/10.4324/9780203812303 | 2026-11-14 |
| Grunig, J. E. & Hunt, T. (1984). Managing Public Relations. Holt, Rinehart and Winston | ISBN 0030583373(도서관 목록으로만 확인) | — | 2026-11-14 |

# 근거 출처

지도(`curriculum/map.md`)와 튜터 지침에 쓴 법령·기준을 공식 출처에서 확인한 기록이다. 한 행이 한 법령·기준이다. `tools/check.mjs`가 지도 「국내 근거」의 법령명·`제N조(의M)`과 「글로벌 비교」의 식별자를 이 표와 대조한다(항·호는 사람이 본다).

- 법규는 바뀐다. 이 표는 조회일 기준이다. 학습 세션의 튜터는 이 표를 믿지 않고 세션 중 다시 확인한다([tutor/legal-sources.md](../../tutor/legal-sources.md)).
- 종류: `법률`·`시행령`·`고시`·`거래소 규정`·`기관 자료`·`글로벌`. 확인 경로: `law.go.kr`(국가법령정보센터 원문), `krx`(거래소 규정 원문), `기관`(소관 기관 자료), `원문`(글로벌 원 기준 기관).
- 국가법령정보센터는 2026-11-14 21:00까지 점검이었다. 그 전에 확인한 국내 법률 행은 확인 경로가 `기관`이고, 점검 뒤 law.go.kr에서 다시 대조해 고친다(`node tools/check.mjs --release`가 이를 강제한다).
- 고칠 때는 조회일을 새로 적는다.

## 국내

국가법령정보센터 점검(~2026-11-14 21:00) 중에는 한국법제연구원 영문법령으로 먼저 대조했고, 점검이 끝난 21:0x에 법률 행 전부를 law.go.kr 현행 본문(`/LSW/lsInfoR.do`)으로 다시 대조해 조문 제목을 원문대로 고쳤다. 원문의 가운뎃점 「ㆍ」은 「·」로 적는다. 거래소 법규서비스(law.krx.co.kr)는 503이라 거래소가 낸 해설서·안내로 확인했다.

| 법령·기준명 | 종류 | 확인한 조문 | URL | 조회일 | 확인 경로 |
|---|---|---|---|---|---|
| 표시·광고의 공정화에 관한 법률 | 법률 | 제3조(부당한 표시·광고 행위의 금지) — 거짓·과장, 기만, 부당 비교, 비방. 판: [시행 2025. 1. 21.] [법률 제20712호, 2025. 1. 21., 타법개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=268659&efYd=20250121&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 정보통신망 이용촉진 및 정보보호 등에 관한 법률 | 법률 | 제44조의2(정보의 삭제요청 등) — 삭제·반박내용 게재 요청과 임시조치, 제70조(벌칙) — 비방 목적 사실·허위 적시 명예훼손. 판: [시행 2026. 10. 2.] [법률 제21988호, 2026. 9. 29., 일부개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290001&efYd=20261002&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 형법 | 법률 | 제307조(명예훼손) — 사실 적시 2년 이하·500만원 이하, 허위 5년 이하·10년 이하 자격정지·1천만원 이하, 제310조(위법성의 조각) — 진실하고 오로지 공공의 이익이면 처벌하지 않음. 판: [시행 2026. 10. 2.] [법률 제22007호, 2026. 9. 29., 일부개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290185&efYd=20261002&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 근로자참여 및 협력증진에 관한 법률 | 법률 | 제22조(보고 사항 등) — 정기회의 보고: 경영계획 전반과 실적, 분기별 생산계획과 실적, 인력계획, 경제·재정 상황. 판: [시행 2022. 12. 11.] [법률 제18927호, 2022. 6. 10., 일부개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=243063&efYd=20221211&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 신문 등의 진흥에 관한 법률 | 법률 | 제6조(독자의 권리보호) — 제3항: 독자가 기사와 광고를 혼동하지 않도록 구분 편집. 판: [시행 2025. 10. 1.] [법률 제21066호, 2025. 10. 1., 타법개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=277349&efYd=20251001&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 언론중재 및 피해구제 등에 관한 법률 | 법률 | 제14조(정정보도 청구의 요건) — 보도를 안 날부터 3개월·보도 후 6개월, 제15조(정정보도청구권의 행사), 제16조(반론보도청구권), 제17조(추후보도청구권), 제18조(조정신청). 판: [시행 2023. 8. 8.] [법률 제19592호, 2023. 8. 8., 타법개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=253581&efYd=20230808&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 자본시장과 금융투자업에 관한 법률 | 법률 | 제159조(사업보고서 등의 제출), 제160조(반기·분기보고서의 제출), 제161조(주요사항보고서의 제출), 제162조(거짓의 기재 등에 의한 배상책임) — 제2항 예측정보 면책(사업보고서등에 기재된 예측정보), 제174조(미공개중요정보 이용행위 금지), 제178조(부정거래행위 등의 금지) — 풍문 유포, 제391조(공시규정). 판: [시행 2026. 11. 13.] [법률 제21647호, 2026. 5. 12., 일부개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285957&efYd=20261113&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 행정절차법 | 법률 | 제41조(행정상 입법예고), 제44조(의견제출 및 처리). 판: [시행 2023. 3. 24.] [법률 제18748호, 2022. 1. 11., 일부개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=239291&efYd=20230324&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 부정청탁 및 금품등 수수의 금지에 관한 법률 | 법률 | 제5조(부정청탁의 금지), 제8조(금품등의 수수 금지) — 1회 100만원·연 300만원 초과 금지, 제10조(외부강의등의 사례금 수수 제한). 판: [시행 2025. 1. 21.] [법률 제20712호, 2025. 1. 21., 타법개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=268655&efYd=20250121&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 공직자의 이해충돌 방지법 | 법률 | 제5조(사적이해관계자의 신고 및 회피·기피 신청), 제15조(퇴직자 사적 접촉 신고). 판: [시행 2026. 10. 2.] [법률 제21490호, 2026. 3. 24., 타법개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290665&efYd=20261002&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 정치자금법 | 법률 | 제31조(기부의 제한) — 외국인, 국내외 법인·단체의 정치자금 기부 금지와 법인·단체 관련 자금 기부 금지. 판: [시행 2026. 7. 1.] [법률 제21578호, 2026. 4. 22., 일부개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285595&efYd=20260701&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 근로기준법 | 법률 | 제24조(경영상 이유에 의한 해고의 제한) — 제3항: 해고를 하려는 날의 50일 전까지 노동조합(없으면 근로자대표)에 통보하고 성실히 협의. 판: [시행 2026. 10. 8.] [법률 제21533호, 2026. 4. 7., 일부개정] | https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=285279&efYd=20261008&chrClsCd=010202&ancYnChk=0 | 2026-11-14 | law.go.kr |
| 코스닥시장 공시규정 | 거래소 규정 | 제6조(해설서 표기: 주요경영사항), 제10조(해설서 표기: 조회공시), 제12조(해설서 표기: 공정공시 — 대상정보·정보제공자·제공대상자·시한, 제공 이전 공시, IR·간담회는 개시 전), 제26조(해설서 표기: 자율공시), 제27조(해설서 표기: 공시불이행)·제28조(해설서 표기: 공시번복)·제29조(해설서 표기: 공시변경). 출처는 거래소 「코스닥시장 공시·상장관리 해설」(2025.9) — 규정과 다르면 규정이 우선. 2026-11-14 PDF 본문(PDFKit 추출)에서 직접 대조: 공정공시 시한은 12조 4항, 정보제공자는 12조 2항, 정보제공대상자는 12조 3항, 조회공시는 10조 1항, 공정공시 의무 적용 예외는 15조 2호로 해설서 본문이 인용한다. 제15조(해설서 표기: 공정공시 적용 예외) | https://kind.krx.co.kr/external/dst/notice/11498/(%EA%B3%B5%EC%A7%80)25%EB%85%84%EC%BD%94%EC%8A%A4%EB%8B%A5%EC%8B%9C%EC%9E%A5%EA%B3%B5%EC%8B%9C%EC%83%81%EC%9E%A5%EA%B4%80%EB%A6%AC%ED%95%B4%EC%84%A4%EC%84%9C.pdf | 2026-11-14 | 기관 |
| 유가증권시장 공시규정 | 거래소 규정 | 제7조(영문 안내 표기: Obligatory disclosure issues — 주요경영사항), 제15조(영문 안내 표기: 공정공시 — 다음 조와 함께 공정공시 근거). 조회공시 조항 번호는 미확인. 출처는 거래소 영문 조회공시 안내(규정 원문 아님, 기준일 없음) | https://global.krx.co.kr/contents/GLB/06/0602/0602010102/GLB0602010102T2T2.jsp | 2026-11-14 | 기관 |
| 한국거래소 기업가치 제고 계획 가이드라인 | 기관 자료 | 2026.2판 — 기업가치 제고 계획은 자율공시 항목, 공정공시 대상일 여지, 목표 미달만으로는 불성실공시 아님 | https://kind.krx.co.kr/external/dst/valueupReference/11663/%282026%EB%85%842%EC%9B%94%29%EA%B8%B0%EC%97%85%EA%B0%80%EC%B9%98%20%EC%A0%9C%EA%B3%A0%20%EA%B3%84%ED%9A%8D%20%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8.pdf | 2026-11-14 | 기관 |
| 금융위원회 기업공시 개선방안(2025-11-17) | 기관 자료 | 영문공시 2단계 2026-05-01, 항목을 55개와 공정·조회공시로 확대, 주총 표결결과 공시 | https://www.fsc.go.kr/no010101/85650 | 2026-11-14 | 기관 |
| 금융위원회 영문공시 확대(2026-01-28) | 기관 자료 | 2단계 2026.5 자산 2조원 이상 코스피, 3단계 2027.3 코스피 전체로 앞당김 | https://www.fsc.go.kr/eng/pr010101/86165 | 2026-11-14 | 기관 |
| 금융위원회 밸류업 지원 보도자료(2024-02-26) | 기관 자료 | 기업가치 제고 계획은 이사회가 수립해 홈페이지 공표·거래소 자율공시 | https://www.fsc.go.kr/po010101/81780 | 2026-11-14 | 기관 |

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
| AMEC Barcelona Principles 4.0 | 글로벌 | 2025-06(V4.0 eBook). 7원칙 — 1 명확·측정 가능한 목표 설정, 2 모든 이해관계자 정의·이해, 3 관련 채널 전체 측정, 4 정성+정량, 5 AVE 같은 무효 지표 금지·성과와 영향으로 기여 측정, 6 조직·이해관계자 관련 산출·성과·영향 보고, 7 데이터·방법·기술의 윤리·거버넌스·투명성. 3.0(2020)을 잇는 4판 | https://amecorg.com/wp-content/uploads/2025/06/Barcelona-Principles-V4.0-–-FINAL30.6-compressed.pdf | 2026-11-14 | 원문 |
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

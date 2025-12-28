# Changelog

모든 주요 변경사항은 이 파일에 기록됩니다.

형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)를 따르며,
이 프로젝트는 [Semantic Versioning](https://semver.org/lang/ko/)을 준수합니다.

## [Unreleased]

### 계획된 기능
- 성능 최적화
- 추가 콘텐츠 확대

---

## [1.1.1] - 2025-12-28

### Changed

- 사용자 후기 조정

---

## [1.1.0] - 2025-12-28

### Changed

- 🎥 기능 소개 동영상 업데이트
  - 최신 앱 기능을 반영한 업데이트된 데모 영상으로 교체
  - 사용자 경험 개선을 위한 비디오 콘텐츠 리뉴얼

### Added

- 🌐 영어 콘텐츠 번역 추가
  - 글로벌 사용자를 위한 영문 콘텐츠 제공
  - 다국어 지원 기반 마련

---

## [1.0.3] - 2025-12-24

### Added

- 📊 GA4 커스텀 이벤트 추적 시스템 구축
  - `download_app` 이벤트 추가 (앱 다운로드 버튼 클릭 추적)
  - 플랫폼 구분 파라미터 (app_store, google_play)
  - 위치 구분 파라미터 (hero, cta)
  - TypeScript 타입 선언 (src/types/gtag.d.ts)
- 🎯 전환율 측정 기반 마련
  - Hero 섹션 2개 버튼 이벤트 추가
  - CTA 섹션 2개 버튼 이벤트 추가
  - 총 4개 다운로드 버튼 추적 시스템 구축

---

## [1.0.2] - 2025-12-24

### Added

- 🎯 종합 SEO 최적화 시스템 구축
  - SEO 메타 태그 (title, description, keywords, author)
  - Open Graph 태그 (Facebook, LinkedIn, KakaoTalk 공유 최적화)
  - Twitter Card 메타 태그
  - Canonical URL 설정
- 📱 PWA & 모바일 최적화
  - Progressive Web App 메타 태그
  - Apple Touch Icon 및 모바일 앱 설정
  - manifest.json 연결
- 🔍 한국 검색 엔진 최적화
  - 네이버 사이트 인증 코드 추가
  - Daum 검색 등록 (일반 등록 + 웹마스터 도구)
  - Daum 전용 메타 태그 (daumdn:title, daumdn:description, daumdn:image)
- 🤖 AI 검색 엔진 최적화
  - llms.txt 생성 (ChatGPT, Claude, Gemini 등 AI 검색 대응)
  - 앱 핵심 기능 및 사용 시나리오 상세 설명
- 📊 구조화 데이터 (Schema.org)
  - SoftwareApplication 스키마 (앱 정보, 기능, 평점, 가격)
  - FAQPage 스키마 (자주 묻는 질문 4개, 리치 스니펫 지원)
- 🗺️ 검색 엔진 크롤링 최적화
  - robots.txt 생성 (크롤러 허용 + 사이트맵 위치 + Daum PIN)
  - sitemap.xml 생성 (페이지 구조 정보 제공)

---

## [1.0.1] - 2025-12-24

### Added

- 📊 Google Analytics 4 (GA4) 방문자 추적 시스템 적용
- 🔍 Google Search Console 연동 (GA4 자동 인증 방식)
- 🔐 환경 변수 시스템 도입 (측정 ID 보안 강화)

---

## [1.0.0] - 2025-12-23

### Added

- 🎉 Cheftory 랜딩 페이지 초기 출시
- Docker 기반 자동 배포 시스템 구축

---

## 버전 가이드

### 버전 번호 형식: `MAJOR.MINOR.PATCH`

- **MAJOR**: 주요 기능 변경 또는 하위 호환성이 깨지는 변경
- **MINOR**: 하위 호환성을 유지하면서 새로운 기능 추가
- **PATCH**: 하위 호환성을 유지하는 버그 수정

### 변경 유형

- **Added**: 새로운 기능
- **Changed**: 기존 기능의 변경사항
- **Deprecated**: 곧 제거될 기능
- **Removed**: 제거된 기능
- **Fixed**: 버그 수정
- **Security**: 보안 취약점 수정

---

## 예시 (다음 릴리스 작성 시 참고)

```markdown
## [1.1.0] - 2025-01-15

### Added
- 새로운 레시피 검색 기능
- 다크 모드 지원

### Changed
- 홈페이지 레이아웃 개선
- 비디오 재생 성능 향상

### Fixed
- 모바일 반응형 버그 수정
- FAQ 아코디언 동작 오류 수정
```

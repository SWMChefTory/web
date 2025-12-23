# Google Analytics 4 및 Search Console 설정 가이드

## 📊 Google Analytics 4 설정

### 1단계: GA4 계정 생성

1. **Google Analytics 접속**
   ```
   https://analytics.google.com/
   ```

2. **계정 만들기**
   - 좌측 하단 "관리" (톱니바퀴) 클릭
   - "계정 만들기" 클릭
   - 계정 이름: `Cheftory` (또는 원하는 이름)
   - 계정 데이터 공유 설정: 기본값 유지
   - "다음" 클릭

3. **속성 만들기**
   - 속성 이름: `셰프토리 홈페이지`
   - 보고 시간대: `대한민국`
   - 통화: `대한민국 원(₩)`
   - "다음" 클릭

4. **비즈니스 세부정보**
   - 업종: 관련 업종 선택 (예: 식품 및 음료)
   - 비즈니스 규모: 소규모 선택
   - "다음" 클릭

5. **비즈니스 목표**
   - "기준 보고서 검토" 또는 "사용자 행동 조사" 선택
   - "만들기" 클릭

### 2단계: 웹 스트림 설정

1. **데이터 스트림 추가**
   - 플랫폼: "웹" 선택
   - 웹사이트 URL: `https://cheftories.com`
   - 스트림 이름: `Cheftory Homepage`
   - "스트림 만들기" 클릭

2. **측정 ID 확인**
   ```
   화면 우측 상단에 측정 ID가 표시됩니다
   형식: G-XXXXXXXXXX (예: G-ABC123XYZ)
   ```

3. **측정 ID 복사**
   - 측정 ID 옆 복사 아이콘 클릭
   - 또는 직접 선택하여 복사

### 3단계: index.html에 측정 ID 적용

현재 `index.html`의 2곳을 교체:

**교체 위치 1: Script src (15번 줄)**
```html
<!-- 변경 전 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- 변경 후 (예시: G-ABC123XYZ를 받은 경우) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
```

**교체 위치 2: gtag config (20번 줄)**
```html
<!-- 변경 전 -->
gtag('config', 'G-XXXXXXXXXX');

<!-- 변경 후 (예시: G-ABC123XYZ를 받은 경우) -->
gtag('config', 'G-ABC123XYZ');
```

### 4단계: 배포

```bash
# 변경사항 커밋
git add index.html
git commit -m "feat: Google Analytics 4 측정 ID 적용"
git push origin main

# v1.0.1 태그 생성 및 배포
git tag v1.0.1 -m "Release v1.0.1: GA4 및 Search Console 설정"
git push origin v1.0.1
```

GitHub Actions가 자동으로 배포를 진행합니다.

### 5단계: GA4 데이터 수집 확인

1. **실시간 보고서 확인**
   ```
   Google Analytics → 보고서 → 실시간
   ```

2. **배포 후 사이트 방문**
   ```
   https://cheftories.com 접속
   ```

3. **실시간 사용자 확인**
   - 1-2분 내에 실시간 보고서에 방문자가 표시되어야 함
   - 표시되면 GA4 설치 성공

---

## 🔍 Google Search Console 설정

### 방법: Google Analytics를 통한 자동 인증

GA4가 정상 작동하면 Search Console 소유권 인증이 자동으로 가능합니다.

### 1단계: Search Console 접속

```
https://search.google.com/search-console
```

### 2단계: 속성 추가

1. "속성 추가" 클릭
2. **URL 접두어** 선택 (도메인 방식보다 간단)
   ```
   https://cheftories.com
   ```
3. "계속" 클릭

### 3단계: 소유권 확인

1. **확인 방법**: "Google 애널리틱스" 선택

2. **자동 확인 조건**:
   - ✅ 동일한 Google 계정으로 GA4 및 Search Console 로그인
   - ✅ GA4가 이미 설치되어 데이터 수집 중
   - ✅ GA4 속성에 "편집자" 이상 권한 보유

3. **"확인" 버튼 클릭**

4. **성공 메시지**:
   ```
   소유권이 확인되었습니다
   ```

### 4단계: www 서브도메인 추가 (선택사항)

`www.cheftories.com`도 별도로 추가 권장:

1. "속성 추가" 재클릭
2. URL: `https://www.cheftories.com`
3. 동일하게 Google Analytics 방식으로 확인

---

## ⚠️ 문제 해결

### GA4 실시간 데이터가 안 보일 때

1. **브라우저 캐시 확인**
   ```bash
   # 개발자 도구 (F12) → Network 탭
   # gtag/js 파일이 로드되는지 확인
   ```

2. **측정 ID 오타 확인**
   ```bash
   # index.html의 2곳 모두 동일한 측정 ID인지 확인
   grep "G-" index.html
   ```

3. **광고 차단기 비활성화**
   - 애드블록 등이 GA 스크립트를 차단할 수 있음

### Search Console 자동 인증 실패 시

**대안: HTML 태그 방식**

1. Search Console에서 "HTML 태그" 방식 선택
2. 제공된 메타 태그 복사
   ```html
   <meta name="google-site-verification" content="xxxxx" />
   ```
3. `index.html` 7번 줄 아래에 추가
4. 재배포 후 "확인" 클릭

---

## 📊 설정 완료 후 확인 사항

### ✅ GA4 체크리스트

- [ ] 실시간 보고서에 방문자 표시
- [ ] 페이지 조회수 증가 확인
- [ ] 이벤트 수집 확인 (page_view 이벤트)

### ✅ Search Console 체크리스트

- [ ] 소유권 확인 성공
- [ ] 사이트맵 제출 (선택사항)
- [ ] URL 검사 도구로 색인 요청

---

## 📚 참고 자료

- [Google Analytics 고객센터](https://support.google.com/analytics)
- [Google Search Console 고객센터](https://support.google.com/webmasters)
- [GA4 측정 ID 찾기](https://support.google.com/analytics/answer/9539598)

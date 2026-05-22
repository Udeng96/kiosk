# 남해군 도시재생 관광 키오스크

> **한 줄 소개**  
> 남해군 주요 관광지에 설치된 키오스크에서 **관광 정보를 확인하고, CCTV 영상으로 현재 상황까지 볼 수 있는** 터치스크린 안내 플랫폼입니다.

---

## 🎯 무엇을 위한 시스템인가요?

남해군 도시재생 사업의 일환으로, **관광객이 현장에서 직접 터치해서 정보를 얻을 수 있는** 키오스크 시스템입니다.  
어떤 음식점·시장·관광지가 있는지, 바래길 코스는 어떻게 되는지, 버스는 어디로 가는지를 한 화면에서 확인하고, 관광지의 **현재 상황을 CCTV 영상으로 즉시 확인**할 수 있습니다.

---

## 🖥️ 화면 구성

`react-router-dom`으로 **3개의 화면**을 분기합니다.

- **기본 키오스크 화면** (`/`) — 일반 키오스크용 콘텐츠
- **남해군 특화 페이지** (`/create`) — 남해군 전용 콘텐츠 (기본 키오스크와 **공통 컴포넌트를 재사용**, 콘텐츠만 다름)
- **관리자 페이지** (`/manage`) — 메인 화면에 표출되는 미디어(이미지·영상) 업로드 및 관리

키오스크 화면은 **3단계 구조**로 흐릅니다:
1. **시작 페이지**: 홍보 영상·사진 자동 재생 (대기 화면)
2. **카드 선택**: 음식·시장·관광·바래길 등 카테고리 카드
3. **상세 페이지**: 선택한 카테고리의 상세 콘텐츠 + 모달(관광지·CCTV·버스·장소)

---

## 🛠️ 주요 기능

### 1. 메인 키오스크 화면 — 홍보 미디어 + 관광 안내

![메인 키오스크 화면](screenshot-main.png)

- **메인 페이지를 통한 남해군 홍보 미디어 표출**  
  관리자가 등록한 영상·사진을 시작 페이지에서 자동 재생
- **단계별 페이지 흐름** (시작 → 카테고리 카드 → 상세 정보)
- **유휴 시간 자동 감지** — 일정 시간 미사용 시 자동으로 대기 화면으로 복귀

---

### 2. 관광지 안내 · CCTV 실시간 영상

- **CCTV와 모달을 활용한 관광지 소개**  
  관광지 상세를 모달로 띄우고, 그 안에서 현장 CCTV 영상을 즉시 확인 (소형·전체화면 모두 지원)
- **다양한 정보 모달**: 관광지 / 바래길 / 버스 / 장소
- **Iframe을 통한 남해군 관련 외부 페이지 접근**

---

### 3. 관리자 페이지 — 미디어 관리

- **메인 화면에 표출되는 미디어(이미지·영상) 업로드 및 교체**
- 페이지별로 보여줄 미디어 선택·관리
- 서버 재시작 감지 시 모든 키오스크 브라우저가 자동 새로고침되어 최신 미디어 즉시 반영

---

## 👤 담당 역할 (단독 개발)

- **정적 파일(이미지·영상) 활용도가 높은 키오스크 특성**을 고려해 로딩 시간이 길게 느껴지지 않도록 최적화
- **지역별 공통 영역과 차별화 영역을 분리**해 컴포넌트 재사용성을 극대화한 코드 구성 (`common/` + `isCreate` prop)
- **다양한 연령대를 고려한 직관적 화면 구성**을 위해 디자인 팀과 지속적 협업
- 키오스크 환경 특성에 맞춘 **유휴 감지·서버 재시작 감지** 등 무인 운영을 위한 안정성 기능 구현
- 프론트엔드(React) ↔ 백엔드(Spring Boot) 양쪽 모두 단독 개발

---

## 🧱 사용한 기술

| 영역 | 기술 |
|---|---|
| 백엔드 언어/프레임워크 | Java 1.8, Spring Boot 2.4 |
| 백엔드 라이브러리 | Spring Data JPA / JDBC, Spring Batch, **Quartz**(스케줄러), Thymeleaf, Gson |
| 데이터베이스 | JPA + JDBC 기반 |
| 프론트 언어/프레임워크 | **React 19**, JavaScript (JSX) |
| 빌드 도구 | **Vite** |
| 상태관리 | **Zustand** |
| 데이터 페칭 | TanStack Query v5 |
| 라우팅 | React Router v7 |
| HTTP 클라이언트 | Axios |
| UI 라이브러리 | Swiper (캐러셀) |

---

## 📂 전체 폴더 구조

```
kiosk/
├── src/main/java/com/eseict/kiosk/    # 백엔드 (Spring Boot)
│   ├── controller/    ⭐ API 입구
│   │   ├── ApiController.java     — 기상 정보 API
│   │   ├── FileController.java    — 파일 업로드·조회·삭제 API
│   │   └── ViewController.java    — 페이지 라우팅 진입점
│   ├── service/       — 비즈니스 로직 (ApiService, FileService)
│   ├── repository/    — JPA Repository
│   ├── domain/        — 엔티티 (Forecast 등)
│   └── config/        — DB·앱 설정
│
├── src/main/resources/
│   └── default/       — 기본 미디어 파일
│
├── front/                              # 프론트엔드 (React 19 + Vite)
│   └── src/
│       ├── assets/    — 이미지·영상·폰트·CSS (정적 리소스 다량)
│       ├── component/
│       │   ├── router.jsx           ⭐ 3개 화면 라우팅 진입점
│       │   └── new/
│       │       ├── default.jsx      ⭐ 기본 키오스크 페이지
│       │       ├── namhae.jsx       ⭐ 남해군 특화 페이지 (default와 같은 구조, 콘텐츠만 다름)
│       │       ├── manage/          — 관리자 페이지 (미디어 업로드)
│       │       └── common/          ⭐ 공통 컴포넌트 (default·namhae가 함께 사용)
│       │           ├── header.jsx           — 상단 헤더
│       │           ├── Idle/                — 유휴 시간 감지 (자동 대기 화면 복귀)
│       │           ├── serverWatcher.jsx    — 서버 재시작 감지 → 자동 새로고침
│       │           ├── btn/                 — 시작·이동 버튼
│       │           └── page/                — 페이지 단계별 컴포넌트
│       │               ├── start/   — 1단계: 시작 페이지 (홍보 영상·사진)
│       │               ├── second/  — 2단계: 카테고리 카드 선택
│       │               └── third/   — 3단계: 상세 정보
│       │                   ├── tour/    — 관광지 상세
│       │                   ├── barae/   — 바래길 상세
│       │                   └── modal/   — 관광지·버스·CCTV·장소 모달
│       ├── data/      — 상수 정의 (페이지 타입 등)
│       └── store/     ⭐ Zustand 상태 저장소
│           ├── kioskZustand.jsx     — 기본 키오스크 상태
│           ├── createZustand.jsx    — 남해 특화 페이지 상태
│           └── commonZustand.jsx    — 공통 상태
│
├── pom.xml          — 백엔드 의존성 목록 (Maven)
├── package.json     — 프론트 의존성 목록 (npm, Vite 기반)
└── README.md        — 이 문서
```

> ⭐ 표시: 코드를 처음 볼 때 가장 먼저 열어보면 좋은 곳

---

## 🗺️ 기능 → 코드 위치 매핑

**파일/폴더명을 클릭하면 GitHub에서 바로 해당 위치로 이동합니다.**

### 백엔드 (서버)

| 기능 | 어떤 역할을 하는지 | 핵심 파일 |
|---|---|---|
| **페이지 진입점** | 사용자가 `/`, `/create`, `/manage` URL 접근 시 React 앱으로 라우팅 | [ViewController.java](src/main/java/com/eseict/kiosk/controller/ViewController.java) |
| 기상 정보 조회 | 키오스크 화면에 표시할 남해 지역 기상 정보 제공 | [ApiController.java](src/main/java/com/eseict/kiosk/controller/ApiController.java) |
| **미디어 파일 업로드** | 관리자가 새 이미지·영상을 서버에 업로드 (multipart/form-data) | [FileController.java](src/main/java/com/eseict/kiosk/controller/FileController.java) |
| **미디어 파일 제공** | 키오스크 메인 화면에 보여줄 이미지·영상을 내려줌 | [FileController.java](src/main/java/com/eseict/kiosk/controller/FileController.java) |
| 미디어 파일 삭제 | 관리자가 등록한 미디어 제거 | [FileController.java](src/main/java/com/eseict/kiosk/controller/FileController.java) |
| 파일 처리 로직 | 업로드된 파일 저장·관리, 파일 메타데이터 처리 | [FileService.java](src/main/java/com/eseict/kiosk/service/FileService.java) |
| 외부 API 호출 로직 | 기상 API 호출 및 응답 가공 | [ApiService.java](src/main/java/com/eseict/kiosk/service/ApiService.java) |
| DB 연결 설정 | JPA + JDBC 데이터 소스 설정 | [config/database/DataConfig.java](src/main/java/com/eseict/kiosk/config/database/DataConfig.java) |

### 프론트엔드 (화면)

| 화면/기능 | 어떤 역할을 하는지 | 핵심 폴더·파일 |
|---|---|---|
| **앱 진입점** | React 앱 시작점, 라우터 마운트 | [front/src/main.jsx](front/src/main.jsx) |
| **라우팅** | 기본/남해/관리 3개 화면으로 분기 | [component/router.jsx](front/src/component/router.jsx) |
| **기본 키오스크 페이지** | 일반 키오스크 메인 화면 | [new/default.jsx](front/src/component/new/default.jsx) |
| **남해군 특화 페이지** | 남해군 전용 콘텐츠 - default와 공통 컴포넌트를 재사용해서 코드 중복 최소화 | [new/namhae.jsx](front/src/component/new/namhae.jsx) |
| **관리자 페이지** | 메인 화면에 보일 미디어를 업로드·교체하는 화면 | [new/manage/](front/src/component/new/manage) |
| **공통 컴포넌트 모음** | default·namhae가 함께 사용하는 컴포넌트들 (`isCreate` prop으로 차별화) - 코드 재사용성 핵심 | [new/common/](front/src/component/new/common) |
| └ 상단 헤더 | 모든 키오스크 화면 상단의 공통 헤더 | [common/header.jsx](front/src/component/new/common/header.jsx) |
| └ **유휴 감지 (Idle)** | 일정 시간 미사용 시 자동으로 대기 화면(시작 페이지)으로 복귀 | [common/Idle/idleWatcher.jsx](front/src/component/new/common/Idle/idleWatcher.jsx) |
| └ **서버 재시작 감지** | 서버 재기동 시 모든 키오스크 브라우저를 자동 새로고침해 최신 콘텐츠 반영 | [common/serverWatcher.jsx](front/src/component/new/common/serverWatcher.jsx) |
| **1단계: 시작 페이지** | 홍보 영상·사진이 자동 재생되는 대기 화면 | [common/page/start/](front/src/component/new/common/page/start) |
| **2단계: 카테고리 카드** | 음식·시장·관광·바래길 등 카테고리를 카드 형태로 선택 | [common/page/second/card/](front/src/component/new/common/page/second/card) |
| **3단계: 상세 정보** | 선택한 카테고리의 상세 콘텐츠 표시 | [common/page/third/](front/src/component/new/common/page/third) |
| └ 관광지 상세 | 관광지 상세 정보 페이지 | [third/tour/](front/src/component/new/common/page/third/tour) |
| └ 바래길 상세 | 남해 바래길 코스 안내 | [third/barae/](front/src/component/new/common/page/third/barae) |
| └ **관광지 모달** | 관광지 상세 정보 팝업 | [third/modal/tour/](front/src/component/new/common/page/third/modal/tour) |
| └ **CCTV 모달** | 실시간 CCTV 영상 재생 (소형·전체화면 2가지) | [third/modal/cctv/](front/src/component/new/common/page/third/modal/cctv) |
| └ 버스 모달 | 마을버스·공용버스·도보 경로 안내 | [third/modal/bus/](front/src/component/new/common/page/third/modal/bus) |
| └ 장소 모달 | 장소 상세 정보 (식당·시장 등) | [third/modal/place/](front/src/component/new/common/page/third/modal/place) |
| **상태 저장소 (Zustand)** | 키오스크 화면 상태(현재 페이지, 선택 카테고리 등) 보관 | [front/src/store/](front/src/store) |
| 상수 정의 | 페이지 타입 등 공용 상수 | [front/src/data/const/const.js](front/src/data/const/const.js) |

---

## 🔍 처음 코드를 보는 분께 — 추천 탐색 순서

1. **[front/src/component/router.jsx](front/src/component/router.jsx)** — 3개 화면(기본/남해/관리) 분기 확인
2. **[new/default.jsx](front/src/component/new/default.jsx)** — 기본 키오스크 화면이 어떤 컴포넌트로 구성되는지
3. **[new/common/](front/src/component/new/common)** — 재사용되는 공통 컴포넌트 구조 (default와 namhae가 같이 쓰는 부분)
4. **[common/page/start/](front/src/component/new/common/page/start)** → **[second/](front/src/component/new/common/page/second)** → **[third/](front/src/component/new/common/page/third)** — 1→2→3단계 페이지 흐름
5. **[FileController.java](src/main/java/com/eseict/kiosk/controller/FileController.java)** — 관리자 페이지가 부르는 미디어 업로드 API
6. 관심 있는 기능이 보이면, 위의 **"기능 → 코드 위치 매핑"** 표에서 해당 폴더로 이동

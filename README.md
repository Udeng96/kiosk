# 남해읍 도시재생 관광 키오스크

경상남도 남해군 남해읍 도시재생 사업의 일환으로 개발된 터치스크린 관광 안내 키오스크 시스템입니다.

<br>

## 주요 기능

- **메인 화면** — 관리자가 업로드한 영상/이미지를 스트리밍 재생, 대기 화면 자동 전환
- **관광지 안내** — 남해읍 권역별 관광 명소 정보 및 상세 콘텐츠 제공
- **바래길 안내** — 남해 바래길 코스 지도 및 경로 정보
- **버스 안내** — 마을버스·공용버스·도보 경로 안내
- **CCTV 뷰어** — 실시간 CCTV 영상 조회
- **관리자 페이지** — 메인 영상/이미지 업로드 및 교체
- **서버 재시작 감지** — 서버 재기동 시 모든 브라우저 자동 새로고침

<br>

## 기술 스택

**Frontend**
- React 19 + Vite
- React Router v7
- Zustand (상태 관리)
- TanStack Query v5
- Swiper

**Backend**
- Spring Boot 2.4
- Spring Data JPA
- PostgreSQL
- Thymeleaf

<br>

## 시스템 구조

```
kiosk/
├── front/                  # React 프론트엔드
│   └── src/
│       ├── component/
│       │   └── new/
│       │       ├── common/ # 공통 페이지 (start, second, third)
│       │       └── manage/ # 관리자 페이지
│       └── store/          # Zustand 상태 관리
└── src/                    # Spring Boot 백엔드
    └── main/java/
        └── com/eseict/kiosk/
            ├── controller/ # REST API
            └── service/    # 비즈니스 로직
```

<br>

## 화면 흐름

```
대기 화면 (영상/이미지)
    ↓ 터치
메인 메뉴 (관광지 / 바래길 / 버스 / CCTV)
    ↓ 선택
상세 콘텐츠
```

<br>

## 실행 방법

**Backend**
```bash
# 환경 변수 설정
export KIOSK_HOME=/path/to/home

# 빌드 및 실행
mvn package -DskipTests
java -jar target/kiosk-0.0.1-SNAPSHOT.jar
```

**Frontend**
```bash
cd front
npm install
npm run build   # 빌드 후 Spring Boot static으로 서빙
```

<br>

## 환경 설정

`src/main/resources/application.properties` 에서 아래 항목을 환경에 맞게 수정합니다.

```properties
server.port=22511
spring.datasource.hikari.jdbc-url=jdbc:postgresql://YOUR_DB_HOST:5432/YOUR_DB_NAME
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
```

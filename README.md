# 다인이의 작은 작업실

Astro + TypeScript로 만든 정적 앱 포트폴리오이자 성장 기록입니다.

## 실행

Node.js 24와 npm을 사용합니다.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

개발 화면: `http://localhost:4321/dain-apps/`. `build`는 타입 검사를 수행하고 정적 파일을 `dist/`에 만듭니다.

## 앱 추가·교체

`src/data/projects.ts`의 배열에 새 항목을 추가하세요. 이름, 설명, 상태, 태그, 링크, 배운 점을 한곳에서 관리합니다.

```ts
{
  id: 'my-app',
  title: '앱 이름',
  description: '앱을 만든 이유와 할 수 있는 일을 적어요.',
  status: '완성',
  tags: ['키워드'],
  image: { src: 'projects/my-app.webp', alt: '앱의 주요 화면 설명' },
  links: [{ label: '앱 열기', url: 'https://example.com' }],
  growthNotes: [{ title: '배운 것', description: '만들며 알게 된 내용을 적어요.', date: '2026-10-02' }],
}
```

위 예시는 작성 형식 안내입니다. 실제 데이터에는 다인이의 첫 번째 게임 runningsmile과 플레이·소스 코드 링크가 들어 있습니다. 스크린샷은 `public/projects/`에 넣고 `image.src`에는 앞의 `/` 없이 경로를 적습니다. 이미지·링크·성장 기록은 선택 사항이며, 배운 점이 없으면 `growthNotes: []`를 사용합니다. 날짜는 선택 사항이며 `YYYY-MM-DD` 형식입니다.

## 구성

- `src/pages/index.astro`: 첫 화면과 소개 문구
- `src/components/ProjectCard.astro`: 앱 카드와 앱별 성장 기록
- `src/data/projects.ts`: 타입과 앱 데이터
- `src/styles/global.css`: 반응형 디자인
- `public/projects/`: 앱 스크린샷
- `.github/workflows/deploy.yml`: 검사·빌드·GitHub Pages 배포

## 배포

저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정합니다. `main`에 push하면 자동으로 검사·빌드·배포하며, PR에서는 검사와 빌드만 실행합니다. Actions 화면에서 수동 실행도 가능합니다.

사이트: https://jaeho211.github.io/dain-apps/

저장소 이름이나 도메인을 바꾸면 `astro.config.mjs`의 `site`와 `base`도 변경하세요. 내부 이미지와 홈 링크는 base 경로를 적용합니다. 글꼴은 Google Fonts를 사용하며, 연결이 없으면 시스템 글꼴로 표시합니다.

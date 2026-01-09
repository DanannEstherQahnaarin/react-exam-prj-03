# Vite

## 개요
Vite는 빠른 개발 서버와 최적화된 프로덕션 빌드를 제공하는 차세대 프론트엔드 빌드 도구입니다.

## 설치 방법

```bash
npm install --save-dev vite @vitejs/plugin-react
```

## 설정 방법

### 1. vite.config.ts
프로젝트 루트에 `vite.config.ts` 파일이 있습니다:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 2. index.html
프로젝트 루트에 `index.html` 파일이 있어야 합니다:

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 실행 방법

### 개발 서버 실행
```bash
npm run dev
```
개발 서버가 시작되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

### 프로덕션 빌드
```bash
npm run build
```
빌드 결과물은 `dist` 폴더에 생성됩니다.

### 빌드 미리보기
```bash
npm run preview
```
프로덕션 빌드를 로컬에서 미리볼 수 있습니다.

## 주요 기능
- **빠른 HMR**: 즉각적인 핫 모듈 교체
- **ESM 기반**: 네이티브 ES 모듈 사용
- **최적화된 빌드**: Rollup 기반 프로덕션 빌드
- **플러그인 시스템**: 다양한 플러그인 지원
- **TypeScript 지원**: 별도 설정 없이 TypeScript 지원

## 참고 자료
- [공식 문서](https://vite.dev/)
- [Vite GitHub](https://github.com/vitejs/vite)

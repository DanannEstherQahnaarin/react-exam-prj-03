# React

## 개요
React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.

## 설치 방법

```bash
npm install react react-dom
```

## 설정 방법

### 1. Vite 설정
`vite.config.ts`에 React 플러그인이 이미 설정되어 있습니다:

```typescript
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 2. TypeScript 타입 정의
`@types/react`와 `@types/react-dom`이 설치되어 있어 TypeScript 지원이 가능합니다.

### 3. 진입점 설정
`src/main.tsx`에서 React 앱을 마운트합니다:

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## 실행 방법

### 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### 빌드 미리보기
```bash
npm run preview
```

## 주요 기능
- 컴포넌트 기반 아키텍처
- 가상 DOM (Virtual DOM)
- JSX 문법 지원
- Hooks API
- Fast Refresh (개발 중 핫 리로드)

## 참고 자료
- [공식 문서](https://react.dev/)
- [React GitHub](https://github.com/facebook/react)

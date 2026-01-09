# @vitejs/plugin-react

## 개요
@vitejs/plugin-react는 Vite에서 React를 사용하기 위한 공식 플러그인입니다.

## 설치 방법

```bash
npm install --save-dev @vitejs/plugin-react
```

## 설정 방법

### 1. vite.config.ts
`vite.config.ts`에서 플러그인을 사용합니다:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 2. 옵션 설정
```typescript
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // 기본값
      jsxImportSource: 'react', // 기본값
      babel: {
        plugins: [],
      },
    }),
  ],
})
```

## 실행 방법

플러그인은 Vite 빌드 프로세스에 통합되어 있으므로 별도의 실행 명령어는 없습니다. 개발 서버를 실행하면 자동으로 적용됩니다:

```bash
npm run dev
```

## 주요 기능
- **Fast Refresh**: React 컴포넌트 핫 리로드
- **JSX 변환**: JSX를 JavaScript로 변환
- **자동 JSX Runtime**: React 17+ 자동 JSX 변환
- **Babel 통합**: Babel 플러그인 사용 가능

## 참고 자료
- [공식 문서](https://github.com/vitejs/vite-plugin-react)
- [@vitejs/plugin-react GitHub](https://github.com/vitejs/vite-plugin-react)

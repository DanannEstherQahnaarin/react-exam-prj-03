# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 📚 패키지 문서

프로젝트에 설치된 패키지들의 설치, 설정, 사용 방법에 대한 상세 문서는 [docs](./docs) 폴더를 참고하세요.

### Dependencies

- [React](./docs/react.md) - UI 라이브러리
- [React Router DOM](./docs/react-router-dom.md) - 클라이언트 사이드 라우팅
- [React Hook Form](./docs/react-hook-form.md) - 폼 관리
- [Zod](./docs/zod.md) - 스키마 검증
- [Axios](./docs/axios.md) - HTTP 클라이언트
- [TanStack React Query](./docs/tanstack-react-query.md) - 서버 상태 관리
- [Zustand](./docs/zustand.md) - 상태 관리
- [Styled Components](./docs/styled-components.md) - CSS-in-JS
- [clsx](./docs/clsx.md) - className 유틸리티
- [tailwind-merge](./docs/tailwind-merge.md) - Tailwind 클래스 병합
- [@hookform/resolvers](./docs/hookform-resolvers.md) - React Hook Form 검증 어댑터

### DevDependencies

- [Vite](./docs/vite.md) - 빌드 도구
- [TypeScript](./docs/typescript.md) - 타입 안전성
- [ESLint](./docs/eslint.md) - 코드 품질 검사
- [Tailwind CSS](./docs/tailwindcss.md) - 유틸리티 CSS 프레임워크
- [PostCSS](./docs/postcss.md) - CSS 변환 도구
- [@vitejs/plugin-react](./docs/vite-plugin-react.md) - Vite React 플러그인
- [TypeScript 타입 정의](./docs/types-packages.md) - 타입 정의 패키지
- [ESLint 플러그인](./docs/eslint-plugins.md) - ESLint 확장 플러그인

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

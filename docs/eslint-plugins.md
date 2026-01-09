# ESLint 플러그인

## 개요
ESLint 플러그인들은 React 및 TypeScript 코드에 대한 추가적인 린트 규칙을 제공합니다.

## 설치된 플러그인

- `@eslint/js`: ESLint의 JavaScript 권장 규칙
- `typescript-eslint`: TypeScript용 ESLint 규칙
- `eslint-plugin-react-hooks`: React Hooks 규칙
- `eslint-plugin-react-refresh`: Fast Refresh 지원
- `eslint-plugin-react-x`: React 규칙
- `eslint-plugin-react-dom`: React DOM 규칙
- `globals`: 전역 변수 정의

## 설치 방법

```bash
npm install --save-dev @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-react-x eslint-plugin-react-dom globals
```

## 설정 방법

### eslint.config.js
플러그인들은 `eslint.config.js`에서 설정됩니다:

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
```

## 실행 방법

```bash
npm run lint
```

## 주요 기능
- **React Hooks 규칙**: Hooks 사용 규칙 검사
- **TypeScript 규칙**: TypeScript 특화 규칙
- **Fast Refresh**: Vite Fast Refresh 지원
- **React 규칙**: React 컴포넌트 규칙

## 참고 자료
- [ESLint 플러그인 목록](https://eslint.org/docs/latest/use/plugins)

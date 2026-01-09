# ESLint

## 개요
ESLint는 JavaScript와 TypeScript 코드의 품질을 검사하고 일관성을 유지하는 린터입니다.

## 설치 방법

```bash
npm install --save-dev eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
```

## 설정 방법

### 1. eslint.config.js
프로젝트 루트에 `eslint.config.js` 파일이 있습니다:

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
```

### 2. React 관련 플러그인
- `eslint-plugin-react-hooks`: React Hooks 규칙
- `eslint-plugin-react-refresh`: Fast Refresh 지원
- `eslint-plugin-react-x`: React 규칙
- `eslint-plugin-react-dom`: React DOM 규칙

## 실행 방법

### 린트 검사
```bash
npm run lint
```

### 자동 수정
```bash
npm run lint -- --fix
```

## 주요 기능
- **코드 품질 검사**: 잠재적 버그 발견
- **코드 스타일**: 일관된 코드 스타일 유지
- **자동 수정**: 일부 문제 자동 수정
- **TypeScript 지원**: TypeScript 코드 검사

## 참고 자료
- [공식 문서](https://eslint.org/)
- [ESLint GitHub](https://github.com/eslint/eslint)

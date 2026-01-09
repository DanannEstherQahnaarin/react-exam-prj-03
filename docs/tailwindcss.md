# Tailwind CSS

## 개요
Tailwind CSS는 유틸리티 우선 CSS 프레임워크입니다.

## 설치 방법

```bash
npm install --save-dev tailwindcss postcss autoprefixer
```

## 설정 방법

### 1. tailwind.config.js
프로젝트 루트에 `tailwind.config.js` 파일이 있습니다:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. postcss.config.js
프로젝트 루트에 `postcss.config.js` 파일이 있습니다:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. CSS 파일에 디렉티브 추가
`src/css/index.css` 또는 메인 CSS 파일에 다음을 추가:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. CSS 파일 import
`src/main.tsx`에서 CSS 파일을 import:

```typescript
import './css/index.css'
```

## 실행 방법

Tailwind CSS는 빌드 프로세스에 통합되어 있으므로 별도의 실행 명령어는 없습니다. 개발 서버를 실행하면 자동으로 적용됩니다:

```bash
npm run dev
```

## 주요 기능
- **유틸리티 클래스**: 빠른 스타일링
- **반응형 디자인**: 모바일 우선 반응형
- **커스터마이징**: 테마 커스터마이징
- **JIT 모드**: 필요한 스타일만 생성
- **다크 모드**: 다크 모드 지원

## 참고 자료
- [공식 문서](https://tailwindcss.com/)
- [Tailwind CSS GitHub](https://github.com/tailwindlabs/tailwindcss)

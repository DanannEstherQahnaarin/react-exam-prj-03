# PostCSS

## 개요
PostCSS는 CSS를 변환하는 도구입니다. Tailwind CSS와 Autoprefixer를 사용하기 위해 필요합니다.

## 설치 방법

```bash
npm install --save-dev postcss autoprefixer
```

## 설정 방법

### 1. postcss.config.js
프로젝트 루트에 `postcss.config.js` 파일이 있습니다:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 2. Autoprefixer
Autoprefixer는 CSS에 벤더 프리픽스를 자동으로 추가합니다. 별도 설정이 필요 없습니다.

## 실행 방법

PostCSS는 Vite 빌드 프로세스에 통합되어 있으므로 별도의 실행 명령어는 없습니다. 개발 서버를 실행하면 자동으로 적용됩니다:

```bash
npm run dev
```

## 주요 기능
- **CSS 변환**: 다양한 CSS 플러그인 지원
- **Autoprefixer**: 벤더 프리픽스 자동 추가
- **Tailwind CSS 통합**: Tailwind CSS와 함께 사용
- **플러그인 시스템**: 다양한 PostCSS 플러그인 사용 가능

## 참고 자료
- [공식 문서](https://postcss.org/)
- [PostCSS GitHub](https://github.com/postcss/postcss)

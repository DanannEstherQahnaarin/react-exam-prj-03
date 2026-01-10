# 패키지 문서

이 폴더에는 프로젝트에 설치된 모든 패키지의 설치, 설정, 사용 방법에 대한 상세 문서가 포함되어 있습니다.

## Dependencies (프로덕션 의존성)

### 핵심 라이브러리
- [React](./react.md) - 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리
- [React Router DOM](./react-router-dom.md) - React 애플리케이션을 위한 클라이언트 사이드 라우팅

### 폼 관리
- [React Hook Form](./react-hook-form.md) - 성능이 뛰어나고 사용하기 쉬운 React 폼 라이브러리
- [Zod](./zod.md) - TypeScript-first 스키마 검증 라이브러리
- [@hookform/resolvers](./hookform-resolvers.md) - React Hook Form과 검증 라이브러리 연결 어댑터

### 상태 관리
- [TanStack React Query](./tanstack-react-query.md) - 서버 상태 관리를 위한 강력한 라이브러리
- [Zustand](./zustand.md) - 가볍고 사용하기 쉬운 React 상태 관리 라이브러리

### HTTP 클라이언트
- [Axios](./axios.md) - Promise 기반의 HTTP 클라이언트 라이브러리

### 스타일링
- [Chakra UI](./chakra-ui.md) - React 애플리케이션을 위한 컴포넌트 라이브러리
- [Styled Components](./styled-components.md) - CSS-in-JS 라이브러리
- [clsx](./clsx.md) - 조건부로 className 문자열을 생성하는 유틸리티
- [tailwind-merge](./tailwind-merge.md) - Tailwind CSS 클래스명을 병합하고 충돌을 해결하는 유틸리티

## DevDependencies (개발 의존성)

### 빌드 도구
- [Vite](./vite.md) - 빠른 개발 서버와 최적화된 프로덕션 빌드를 제공하는 빌드 도구
- [@vitejs/plugin-react](./vite-plugin-react.md) - Vite에서 React를 사용하기 위한 공식 플러그인

### 타입 시스템
- [TypeScript](./typescript.md) - JavaScript에 타입을 추가한 프로그래밍 언어
- [TypeScript 타입 정의](./types-packages.md) - JavaScript 라이브러리의 타입 정의 패키지

### 코드 품질
- [ESLint](./eslint.md) - JavaScript와 TypeScript 코드의 품질을 검사하는 린터
- [ESLint 플러그인](./eslint-plugins.md) - React 및 TypeScript용 ESLint 확장 플러그인

### CSS 도구
- [Tailwind CSS](./tailwindcss.md) - 유틸리티 우선 CSS 프레임워크
- [PostCSS](./postcss.md) - CSS를 변환하는 도구

## 빠른 시작

각 패키지 문서에는 다음 정보가 포함되어 있습니다:
1. **개요**: 패키지의 목적과 기능
2. **설치 방법**: npm 설치 명령어
3. **설정 방법**: 프로젝트에 통합하는 방법
4. **실행 방법**: 사용 방법 및 예제
5. **주요 기능**: 핵심 기능 요약
6. **참고 자료**: 공식 문서 및 GitHub 링크

## 문서 구조

각 문서는 다음 구조를 따릅니다:
- 개요
- 설치 방법
- 설정 방법
- 실행 방법
- 주요 기능
- 참고 자료

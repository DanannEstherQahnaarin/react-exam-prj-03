# TypeScript 타입 정의 패키지

## 개요
TypeScript를 사용할 때 JavaScript 라이브러리의 타입 정의를 제공하는 패키지들입니다.

## 설치된 패키지

- `@types/node`: Node.js 타입 정의
- `@types/react`: React 타입 정의
- `@types/react-dom`: React DOM 타입 정의
- `@types/styled-components`: Styled Components 타입 정의

## 설치 방법

```bash
# 개별 설치
npm install --save-dev @types/react @types/react-dom

# 또는 필요한 타입 패키지 설치
npm install --save-dev @types/node @types/styled-components
```

## 설정 방법

타입 정의 패키지는 별도의 설정이 필요 없습니다. 설치하면 TypeScript가 자동으로 타입을 인식합니다.

## 실행 방법

타입 정의는 TypeScript 컴파일러가 자동으로 사용하므로 별도의 실행 명령어는 없습니다.

## 주요 기능
- **타입 안전성**: JavaScript 라이브러리에 대한 타입 정보 제공
- **자동 완성**: IDE에서 향상된 자동 완성 지원
- **타입 체크**: 컴파일 타임 타입 검사

## 참고 자료
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

# TypeScript

## 개요
TypeScript는 JavaScript에 타입을 추가한 프로그래밍 언어입니다.

## 설치 방법

```bash
npm install --save-dev typescript
```

## 설정 방법

### 1. tsconfig.json
프로젝트 루트에 `tsconfig.json` 파일이 있습니다:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### 2. tsconfig.app.json
앱 소스 코드용 설정:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### 3. tsconfig.node.json
Vite 설정 파일용 설정:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "module": "ESNext",
    "moduleResolution": "bundler"
  },
  "include": ["vite.config.ts"]
}
```

## 실행 방법

### 타입 체크
```bash
npx tsc --noEmit
```

### 빌드 (타입 체크 포함)
```bash
npm run build
```

## 주요 기능
- **타입 안전성**: 컴파일 타임 타입 체크
- **자동 완성**: IDE에서 향상된 자동 완성
- **리팩토링**: 안전한 코드 리팩토링
- **문서화**: 타입이 곧 문서

## 참고 자료
- [공식 문서](https://www.typescriptlang.org/)
- [TypeScript GitHub](https://github.com/microsoft/TypeScript)

# React Router DOM

## 개요
React Router DOM은 React 애플리케이션을 위한 클라이언트 사이드 라우팅 라이브러리입니다.

## 설치 방법

```bash
npm install react-router-dom
```

## 설정 방법

### 1. 기본 설정
`src/main.tsx` 또는 `src/App.tsx`에서 라우터를 설정합니다:

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### 2. TypeScript 타입
TypeScript를 사용하는 경우 타입이 자동으로 제공됩니다.

## 실행 방법

### 개발 서버에서 테스트
```bash
npm run dev
```

브라우저에서 `/`, `/about` 등의 경로로 접근하여 라우팅을 테스트할 수 있습니다.

## 주요 기능
- **BrowserRouter**: HTML5 History API를 사용하는 라우터
- **Routes & Route**: 경로와 컴포넌트 매핑
- **Link**: 클라이언트 사이드 네비게이션
- **Navigate**: 프로그래밍 방식 네비게이션
- **useNavigate**: 네비게이션 훅
- **useParams**: URL 파라미터 접근

## 사용 예시

```typescript
import { Link, useNavigate, useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>Product {id}</h1>
      <Link to="/">홈으로</Link>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  )
}
```

## 참고 자료
- [공식 문서](https://reactrouter.com/)
- [React Router GitHub](https://github.com/remix-run/react-router)

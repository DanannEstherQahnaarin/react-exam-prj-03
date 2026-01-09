# Styled Components

## 개요
Styled Components는 CSS-in-JS 라이브러리로, JavaScript로 스타일을 작성할 수 있습니다.

## 설치 방법

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

## 설정 방법

### 1. 기본 사용법
```typescript
import styled from 'styled-components'

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`

function App() {
  return <Button>클릭하세요</Button>
}
```

### 2. Props를 사용한 동적 스타일
```typescript
const Button = styled.button<{ primary?: boolean }>`
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`
```

### 3. 테마 사용
```typescript
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* 앱 컴포넌트 */}
    </ThemeProvider>
  )
}
```

### 4. TypeScript 타입 정의
`@types/styled-components`가 설치되어 있어 TypeScript 지원이 가능합니다.

## 실행 방법

Styled Components는 스타일링 라이브러리이므로 별도의 실행 명령어는 없습니다. 컴포넌트에서 직접 사용합니다.

## 주요 기능
- **CSS-in-JS**: JavaScript로 스타일 작성
- **동적 스타일**: Props 기반 스타일링
- **테마 지원**: 전역 테마 관리
- **자동 벤더 프리픽스**: 자동으로 벤더 프리픽스 추가
- **스타일 격리**: 컴포넌트별 스타일 격리

## 참고 자료
- [공식 문서](https://styled-components.com/)
- [Styled Components GitHub](https://github.com/styled-components/styled-components)

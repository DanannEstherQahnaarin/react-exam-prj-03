# clsx

## 개요
clsx는 조건부로 className 문자열을 생성하는 유틸리티 라이브러리입니다.

## 설치 방법

```bash
npm install clsx
```

## 설정 방법

### 1. 기본 사용법
```typescript
import clsx from 'clsx'

const className = clsx('foo', 'bar') // 'foo bar'
const conditional = clsx('foo', isActive && 'active') // 'foo active' 또는 'foo'
```

### 2. 객체 형태 사용
```typescript
import clsx from 'clsx'

const className = clsx({
  'btn': true,
  'btn-primary': isPrimary,
  'btn-disabled': isDisabled,
})
```

### 3. tailwind-merge와 함께 사용
```typescript
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// 사용 예시
const className = cn('px-2 py-1', 'px-4') // 'py-1 px-4' (px-2는 px-4로 덮어씀)
```

## 실행 방법

clsx는 유틸리티 함수이므로 별도의 실행 명령어는 없습니다. 코드에서 직접 사용합니다.

## 주요 기능
- **조건부 클래스**: 조건에 따라 클래스명 추가/제거
- **배열/객체 지원**: 다양한 형태의 입력 지원
- **가볍고 빠름**: 작은 번들 사이즈
- **TypeScript 지원**: 타입 안전성

## 참고 자료
- [clsx GitHub](https://github.com/lukeed/clsx)

# tailwind-merge

## 개요
tailwind-merge는 Tailwind CSS 클래스명을 병합하고 충돌을 해결하는 유틸리티 라이브러리입니다.

## 설치 방법

```bash
npm install tailwind-merge
```

## 설정 방법

### 1. 기본 사용법
```typescript
import { twMerge } from 'tailwind-merge'

const className = twMerge('px-2 py-1', 'px-4') 
// 결과: 'py-1 px-4' (px-2는 px-4로 덮어씀)
```

### 2. clsx와 함께 사용 (권장)
```typescript
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// 사용 예시
const className = cn(
  'px-2 py-1',
  isActive && 'px-4',
  'bg-blue-500'
)
```

### 3. 커스텀 병합 함수 생성
```typescript
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // 커스텀 클래스 그룹 추가
    },
  },
})
```

## 실행 방법

tailwind-merge는 유틸리티 함수이므로 별도의 실행 명령어는 없습니다. 코드에서 직접 사용합니다.

## 주요 기능
- **충돌 해결**: 동일한 유틸리티 클래스 충돌 자동 해결
- **마지막 우선순위**: 나중에 전달된 클래스가 우선 적용
- **Tailwind 인식**: Tailwind CSS 클래스 구조 이해
- **TypeScript 지원**: 타입 안전성

## 참고 자료
- [tailwind-merge GitHub](https://github.com/dcastil/tailwind-merge)

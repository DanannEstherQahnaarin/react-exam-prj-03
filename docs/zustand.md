# Zustand

## 개요
Zustand는 가볍고 사용하기 쉬운 React 상태 관리 라이브러리입니다.

## 설치 방법

```bash
npm install zustand
```

## 설정 방법

### 1. 스토어 생성
```typescript
import { create } from 'zustand'

interface BearState {
  bears: number
  increase: () => void
  decrease: () => void
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: () => set((state) => ({ bears: state.bears - 1 })),
}))
```

### 2. 컴포넌트에서 사용
```typescript
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  const increase = useBearStore((state) => state.increase)
  
  return (
    <div>
      <h1>{bears} bears around here...</h1>
      <button onClick={increase}>Add bear</button>
    </div>
  )
}
```

### 3. 미들웨어 사용 (예: persist)
```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: 'storage-key', // localStorage 키
    }
  )
)
```

## 실행 방법

Zustand는 상태 관리 라이브러리이므로 별도의 실행 명령어는 없습니다. 스토어를 생성하고 컴포넌트에서 사용합니다.

## 주요 기능
- **간단한 API**: 최소한의 보일러플레이트
- **TypeScript 지원**: 완벽한 타입 안전성
- **선택적 리렌더링**: 필요한 부분만 구독
- **미들웨어**: persist, devtools 등
- **비동기 액션**: async/await 지원

## 참고 자료
- [공식 문서](https://zustand-demo.pmnd.rs/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)

# TanStack React Query

## 개요
TanStack React Query (이전 React Query)는 서버 상태 관리를 위한 강력한 라이브러리입니다.

## 설치 방법

```bash
npm install @tanstack/react-query
```

## 설정 방법

### 1. QueryClient 설정
`src/main.tsx` 또는 `src/App.tsx`에서 QueryClient를 설정합니다:

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5분
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 앱 컴포넌트 */}
    </QueryClientProvider>
  )
}
```

### 2. 기본 사용법
```typescript
import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'

// 데이터 조회
function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axios.get('/api/users')
      return response.data
    },
  })
}

// 데이터 변경
function useCreateUser() {
  return useMutation({
    mutationFn: async (newUser) => {
      const response = await axios.post('/api/users', newUser)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
```

## 실행 방법

React Query는 상태 관리 라이브러리이므로 별도의 실행 명령어는 없습니다. 앱에서 QueryClientProvider로 감싸고 사용합니다.

## 주요 기능
- **useQuery**: 데이터 조회
- **useMutation**: 데이터 변경 (생성, 수정, 삭제)
- **자동 캐싱**: 데이터 자동 캐싱 및 재사용
- **백그라운드 업데이트**: 자동 백그라운드 리페치
- **옵티미스틱 업데이트**: 낙관적 UI 업데이트
- **무한 스크롤**: `useInfiniteQuery` 지원

## 참고 자료
- [공식 문서](https://tanstack.com/query/latest)
- [TanStack Query GitHub](https://github.com/TanStack/query)

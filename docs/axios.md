# Axios

## 개요
Axios는 Promise 기반의 HTTP 클라이언트 라이브러리입니다.

## 설치 방법

```bash
npm install axios
```

## 설정 방법

### 1. 기본 사용법
```typescript
import axios from 'axios'

// GET 요청
const fetchData = async () => {
  const response = await axios.get('https://api.example.com/data')
  return response.data
}

// POST 요청
const postData = async (data) => {
  const response = await axios.post('https://api.example.com/data', data)
  return response.data
}
```

### 2. 인스턴스 생성 (권장)
```typescript
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 인터셉터 추가
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default apiClient
```

### 3. React Query와 함께 사용
```typescript
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function useUserData(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await axios.get(`/api/users/${userId}`)
      return response.data
    },
  })
}
```

## 실행 방법

Axios는 HTTP 요청 라이브러리이므로 별도의 실행 명령어는 없습니다. 코드에서 직접 사용합니다.

## 주요 기능
- **Promise 기반**: async/await 지원
- **요청/응답 인터셉터**: 요청/응답 전처리
- **자동 JSON 변환**: 자동으로 JSON 파싱
- **요청 취소**: AbortController 지원
- **에러 처리**: 자동 에러 처리 및 재시도

## 참고 자료
- [공식 문서](https://axios-http.com/)
- [Axios GitHub](https://github.com/axios/axios)

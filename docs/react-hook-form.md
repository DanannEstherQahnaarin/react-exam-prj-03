# React Hook Form

## 개요
React Hook Form은 성능이 뛰어나고 사용하기 쉬운 React 폼 라이브러리입니다.

## 설치 방법

```bash
npm install react-hook-form
```

## 설정 방법

### 1. 기본 사용법
컴포넌트에서 `useForm` 훅을 사용합니다:

```typescript
import { useForm } from 'react-hook-form'

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} />
      {errors.name && <span>이름은 필수입니다</span>}
      <button type="submit">제출</button>
    </form>
  )
}
```

### 2. Zod와 함께 사용 (권장)
`@hookform/resolvers`와 `zod`를 함께 사용하면 스키마 기반 검증이 가능합니다:

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, '이름은 필수입니다'),
  email: z.string().email('올바른 이메일을 입력하세요'),
})

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })
  
  // ...
}
```

## 실행 방법

폼 컴포넌트를 생성하고 사용하면 됩니다. 별도의 실행 명령어는 없습니다.

## 주요 기능
- **useForm**: 폼 상태 관리 훅
- **register**: 입력 필드 등록
- **handleSubmit**: 폼 제출 핸들러
- **watch**: 필드 값 감시
- **setValue**: 필드 값 설정
- **reset**: 폼 초기화
- **formState**: 폼 상태 (errors, isValid, isDirty 등)

## 참고 자료
- [공식 문서](https://react-hook-form.com/)
- [React Hook Form GitHub](https://github.com/react-hook-form/react-hook-form)

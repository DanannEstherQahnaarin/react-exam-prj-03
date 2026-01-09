# @hookform/resolvers

## 개요
@hookform/resolvers는 React Hook Form과 다양한 스키마 검증 라이브러리를 연결하는 어댑터입니다.

## 설치 방법

```bash
npm install @hookform/resolvers
```

## 설정 방법

### 1. Zod와 함께 사용
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
  
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">제출</button>
    </form>
  )
}
```

### 2. Yup과 함께 사용
```typescript
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('이름은 필수입니다'),
  email: yup.string().email('올바른 이메일을 입력하세요').required(),
})
```

### 3. Joi와 함께 사용
```typescript
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
})
```

## 실행 방법

@hookform/resolvers는 어댑터 라이브러리이므로 별도의 실행 명령어는 없습니다. React Hook Form과 함께 사용합니다.

## 주요 기능
- **다양한 검증 라이브러리 지원**: Zod, Yup, Joi, Superstruct 등
- **타입 안전성**: TypeScript 완벽 지원
- **에러 메시지 통합**: 검증 라이브러리의 에러를 React Hook Form 형식으로 변환

## 참고 자료
- [공식 문서](https://github.com/react-hook-form/resolvers)
- [@hookform/resolvers GitHub](https://github.com/react-hook-form/resolvers)

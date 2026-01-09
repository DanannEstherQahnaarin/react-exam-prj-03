# Zod

## 개요
Zod는 TypeScript-first 스키마 검증 라이브러리입니다.

## 설치 방법

```bash
npm install zod
```

## 설정 방법

### 1. 기본 스키마 정의
```typescript
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(1, '이름은 필수입니다'),
  email: z.string().email('올바른 이메일을 입력하세요'),
  age: z.number().min(18, '18세 이상이어야 합니다'),
})

type User = z.infer<typeof userSchema>
```

### 2. React Hook Form과 함께 사용
`@hookform/resolvers`와 함께 사용:

```typescript
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
})

function LoginForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
  })
  // ...
}
```

### 3. 런타임 검증
```typescript
try {
  const user = userSchema.parse(data)
  // 검증 성공
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error(error.errors)
  }
}
```

## 실행 방법

Zod는 런타임 검증 라이브러리이므로 별도의 실행 명령어는 없습니다. 코드에서 직접 사용합니다.

## 주요 기능
- **타입 안전성**: TypeScript와 완벽한 통합
- **스키마 정의**: 객체, 배열, 문자열, 숫자 등 다양한 타입 지원
- **검증 메서드**: `.parse()`, `.safeParse()`, `.parseAsync()`
- **타입 추론**: `z.infer`로 TypeScript 타입 자동 생성
- **커스텀 에러 메시지**: 각 필드별 에러 메시지 정의

## 참고 자료
- [공식 문서](https://zod.dev/)
- [Zod GitHub](https://github.com/colinhacks/zod)

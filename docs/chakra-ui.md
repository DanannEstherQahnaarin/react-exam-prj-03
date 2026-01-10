# Chakra UI

- [Chakra UI](#chakra-ui)
  - [개요](#개요)
  - [설치 방법](#설치-방법)
  - [설정 방법](#설정-방법)
    - [1. ChakraProvider 설정](#1-chakraprovider-설정)
    - [2. TypeScript 설정](#2-typescript-설정)
  - [주요 컴포넌트 사용법](#주요-컴포넌트-사용법)
    - [Button (버튼)](#button-버튼)
    - [Input (입력 필드)](#input-입력-필드)
    - [Box \& Flex (레이아웃)](#box--flex-레이아웃)
    - [Heading \& Text (텍스트)](#heading--text-텍스트)
    - [Card (카드)](#card-카드)
    - [Modal (모달)](#modal-모달)
    - [Alert (알림)](#alert-알림)
    - [Form (폼)](#form-폼)
    - [Select (선택)](#select-선택)
    - [Checkbox \& Radio (체크박스 및 라디오)](#checkbox--radio-체크박스-및-라디오)
    - [Tabs (탭)](#tabs-탭)
    - [Avatar (아바타)](#avatar-아바타)
    - [Spinner (로딩 스피너)](#spinner-로딩-스피너)
  - [색상 시스템](#색상-시스템)
  - [반응형 디자인](#반응형-디자인)
  - [테마 커스터마이징](#테마-커스터마이징)
  - [주요 기능](#주요-기능)
  - [React Hook Form과 통합](#react-hook-form과-통합)
  - [참고 자료](#참고-자료)
  - [버전 정보](#버전-정보)
  - [주의사항](#주의사항)

## 개요
Chakra UI는 React 애플리케이션을 위한 간단하고 모듈화된 컴포넌트 라이브러리입니다. 접근성을 염두에 두고 설계되었으며, 사용하기 쉬운 API와 풍부한 커스터마이징 옵션을 제공합니다.

## 설치 방법

```bash
npm install @chakra-ui/react
```

**필수 의존성:**
- `react` (^18.0.0 이상)
- `react-dom` (^18.0.0 이상)

## 설정 방법

### 1. ChakraProvider 설정

애플리케이션의 루트에 `ChakraProvider`를 추가합니다:

```typescript
// src/main.tsx 또는 src/App.tsx
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      {/* 애플리케이션 컴포넌트들 */}
    </ChakraProvider>
  )
}

export default App
```

### 2. TypeScript 설정

Chakra UI는 TypeScript를 완전히 지원합니다. 별도의 타입 설치가 필요하지 않습니다.

## 주요 컴포넌트 사용법

### 컴포넌트 목록

다음은 문서에 포함된 주요 컴포넌트 목록입니다:

### Button (버튼)

```typescript
import { Button } from '@chakra-ui/react'

function MyComponent() {
  return (
    <>
      <Button>기본 버튼</Button>
      <Button colorPalette="blue">파란색 버튼</Button>
      <Button variant="outline">아웃라인 버튼</Button>
      <Button size="lg">큰 버튼</Button>
      <Button size="sm">작은 버튼</Button>
      <Button disabled>비활성화 버튼</Button>
      <Button loading>로딩 버튼</Button>
    </>
  )
}
```

**주요 Props:**
- `colorPalette`: 색상 팔레트 (blue, red, green 등)
- `variant`: 스타일 변형 (solid, outline, ghost, link)
- `size`: 크기 (xs, sm, md, lg, xl)
- `disabled`: 비활성화 여부
- `loading`: 로딩 상태
- `onClick`: 클릭 이벤트 핸들러

### Input (입력 필드)

```typescript
import { Input } from '@chakra-ui/react'

function MyComponent() {
  return (
    <>
      <Input placeholder="이름을 입력하세요" />
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Input size="lg" placeholder="큰 입력 필드" />
      <Input disabled placeholder="비활성화" />
      <Input invalid placeholder="에러 상태" />
    </>
  )
}
```

**주요 Props:**
- `type`: 입력 타입 (text, email, password, number 등)
- `placeholder`: 플레이스홀더 텍스트
- `size`: 크기 (xs, sm, md, lg, xl)
- `disabled`: 비활성화 여부
- `invalid`: 유효하지 않은 상태
- `value`: 입력 값 (제어 컴포넌트)
- `onChange`: 변경 이벤트 핸들러

### Box & Flex (레이아웃)

```typescript
import { Box, Flex, VStack, HStack } from '@chakra-ui/react'

function MyComponent() {
  return (
    <Box padding="4" backgroundColor="gray.100" borderRadius="md">
      <Flex direction="row" gap="4" align="center">
        <Box>항목 1</Box>
        <Box>항목 2</Box>
      </Flex>
      
      <VStack spacing="4" align="stretch">
        <Box>수직 항목 1</Box>
        <Box>수직 항목 2</Box>
      </VStack>
      
      <HStack spacing="4">
        <Box>수평 항목 1</Box>
        <Box>수평 항목 2</Box>
      </HStack>
    </Box>
  )
}
```

**Box 주요 Props:**
- `padding`, `margin`: 간격 설정
- `backgroundColor`: 배경색
- `borderRadius`: 테두리 반경
- `width`, `height`: 크기 설정

**Flex/VStack/HStack 주요 Props:**
- `direction`: 방향 (row, column)
- `align`: 정렬 (center, start, end, stretch)
- `justify`: 정당화 (center, start, end, between, around)
- `gap`, `spacing`: 간격

### Heading & Text (텍스트)

```typescript
import { Heading, Text } from '@chakra-ui/react'

function MyComponent() {
  return (
    <>
      <Heading size="xl">큰 제목</Heading>
      <Heading size="lg">중간 제목</Heading>
      <Heading size="md">작은 제목</Heading>
      
      <Text fontSize="lg">큰 텍스트</Text>
      <Text fontSize="md">기본 텍스트</Text>
      <Text fontSize="sm">작은 텍스트</Text>
      <Text color="blue.500">파란색 텍스트</Text>
      <Text fontWeight="bold">굵은 텍스트</Text>
    </>
  )
}
```

**Heading 주요 Props:**
- `size`: 크기 (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- `as`: HTML 태그 (h1, h2, h3, h4, h5, h6)

**Text 주요 Props:**
- `fontSize`: 폰트 크기
- `fontWeight`: 폰트 굵기
- `color`: 텍스트 색상
- `as`: HTML 태그 (p, span, div 등)

### Card (카드)

```typescript
import { Card } from '@chakra-ui/react'

function MyComponent() {
  return (
    <Card.Root maxW="md">
      <Card.Header>
        <Card.Title>카드 제목</Card.Title>
        <Card.Description>카드 설명</Card.Description>
      </Card.Header>
      <Card.Body>
        <p>카드 내용입니다.</p>
      </Card.Body>
      <Card.Footer>
        <Button>액션</Button>
      </Card.Footer>
    </Card.Root>
  )
}
```

### Modal (모달)

```typescript
import { Modal } from '@chakra-ui/react'
import { useState } from 'react'

function MyComponent() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Modal.Backdrop />
        <Modal.Positioner>
          <Modal.Content>
            <Modal.Header>모달 제목</Modal.Header>
            <Modal.Body>
              모달 내용입니다.
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpen(false)}>닫기</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Positioner>
      </Modal.Root>
    </>
  )
}
```

### Alert (알림)

```typescript
import { Alert } from '@chakra-ui/react'

function MyComponent() {
  return (
    <>
      <Alert.Root status="info">
        <Alert.Icon />
        <Alert.Title>정보</Alert.Title>
        <Alert.Description>이것은 정보 메시지입니다.</Alert.Description>
      </Alert.Root>
      
      <Alert.Root status="success">
        <Alert.Icon />
        <Alert.Title>성공</Alert.Title>
        <Alert.Description>작업이 성공적으로 완료되었습니다.</Alert.Description>
      </Alert.Root>
      
      <Alert.Root status="warning">
        <Alert.Icon />
        <Alert.Title>경고</Alert.Title>
        <Alert.Description>주의가 필요합니다.</Alert.Description>
      </Alert.Root>
      
      <Alert.Root status="error">
        <Alert.Icon />
        <Alert.Title>오류</Alert.Title>
        <Alert.Description>오류가 발생했습니다.</Alert.Description>
      </Alert.Root>
    </>
  )
}
```

### Form (폼)

```typescript
import { Field, Input, Button } from '@chakra-ui/react'

function MyComponent() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Field.Root>
        <Field.Label>이름</Field.Label>
        <Input />
        <Field.HelperText>이름을 입력하세요</Field.HelperText>
        <Field.ErrorText>에러 메시지</Field.ErrorText>
      </Field.Root>
      
      <Field.Root>
        <Field.Label>이메일</Field.Label>
        <Input type="email" />
        <Field.HelperText>유효한 이메일을 입력하세요</Field.HelperText>
      </Field.Root>
      
      <Button type="submit">제출</Button>
    </form>
  )
}
```

### Select (선택)

```typescript
import { Select } from '@chakra-ui/react'

function MyComponent() {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.ValueText placeholder="옵션을 선택하세요" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="option1">옵션 1</Select.Item>
        <Select.Item value="option2">옵션 2</Select.Item>
        <Select.Item value="option3">옵션 3</Select.Item>
      </Select.Content>
    </Select.Root>
  )
}
```

### Checkbox & Radio (체크박스 및 라디오)

```typescript
import { Checkbox, RadioGroup } from '@chakra-ui/react'

function MyComponent() {
  return (
    <>
      <Checkbox.Root>
        <Checkbox.Input />
        <Checkbox.Control />
        <Checkbox.Label>체크박스 옵션</Checkbox.Label>
      </Checkbox.Root>
      
      <RadioGroup.Root defaultValue="option1">
        <RadioGroup.Item value="option1">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>옵션 1</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="option2">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>옵션 2</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </>
  )
}
```

### Tabs (탭)

```typescript
import { Tabs } from '@chakra-ui/react'

function MyComponent() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">탭 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">탭 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">탭 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">탭 1 내용</Tabs.Content>
      <Tabs.Content value="tab2">탭 2 내용</Tabs.Content>
      <Tabs.Content value="tab3">탭 3 내용</Tabs.Content>
    </Tabs.Root>
  )
}
```

### Avatar (아바타)

```typescript
import { Avatar } from '@chakra-ui/react'

function MyComponent() {
  return (
    <>
      <Avatar.Root>
        <Avatar.Image src="https://example.com/avatar.jpg" alt="사용자" />
        <Avatar.Fallback>U</Avatar.Fallback>
      </Avatar.Root>
      
      <Avatar.Root>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>
    </>
  )
}
```

### Spinner (로딩 스피너)

```typescript
import { Spinner } from '@chakra-ui/react'

function MyComponent() {
  return (
    <>
      <Spinner />
      <Spinner size="lg" colorPalette="blue" />
      <Spinner size="xl" />
    </>
  )
}
```

## 색상 시스템

Chakra UI는 미리 정의된 색상 팔레트를 제공합니다:

```typescript
// 사용 가능한 색상 팔레트
colorPalette="blue" | "red" | "green" | "yellow" | "purple" | 
             "orange" | "pink" | "gray" | "teal" | "cyan"

// 사용 예시
<Button colorPalette="blue">파란 버튼</Button>
<Text color="red.500">빨간 텍스트</Text>
<Box backgroundColor="green.100">녹색 배경</Box>
```

## 반응형 디자인

Chakra UI는 반응형 값을 배열로 지정할 수 있습니다:

```typescript
import { Box } from '@chakra-ui/react'

function MyComponent() {
  return (
    <Box
      width={{ base: "100%", md: "50%", lg: "25%" }}
      padding={{ base: "2", md: "4", lg: "6" }}
    >
      반응형 박스
    </Box>
  )
}
```

## 테마 커스터마이징

ChakraProvider에 테마를 전달하여 커스터마이징할 수 있습니다:

```typescript
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'

const customConfig = {
  ...defaultConfig,
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#f0f9ff' },
          100: { value: '#e0f2fe' },
          // ... 더 많은 색상
        }
      }
    }
  }
}

const system = createSystem(defaultConfig)

function App() {
  return (
    <ChakraProvider value={system}>
      {/* 애플리케이션 */}
    </ChakraProvider>
  )
}
```

## 주요 기능

1. **접근성**: WAI-ARIA 표준을 준수하여 키보드 내비게이션과 스크린 리더 지원
2. **TypeScript**: 완전한 TypeScript 지원
3. **커스터마이징**: 테마와 스타일을 쉽게 커스터마이징 가능
4. **반응형**: 모바일부터 데스크톱까지 반응형 디자인 지원
5. **성능**: 트리 쉐이킹으로 번들 크기 최적화

## React Hook Form과 통합

```typescript
import { useForm } from 'react-hook-form'
import { Field, Input, Button } from '@chakra-ui/react'

function MyForm() {
  const { register, handleSubmit } = useForm()
  
  const onSubmit = (data: any) => {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field.Root>
        <Field.Label>이름</Field.Label>
        <Input {...register('name')} />
      </Field.Root>
      
      <Field.Root>
        <Field.Label>이메일</Field.Label>
        <Input type="email" {...register('email')} />
      </Field.Root>
      
      <Button type="submit">제출</Button>
    </form>
  )
}
```

## 참고 자료

- [공식 문서](https://chakra-ui.com/)
- [GitHub 저장소](https://github.com/chakra-ui/chakra-ui)
- [컴포넌트 문서](https://chakra-ui.com/docs/components)
- [API 레퍼런스](https://chakra-ui.com/docs/reference)

## 버전 정보

현재 프로젝트에서 사용 중인 버전: `@chakra-ui/react@^3.30.0`

## 주의사항

- Chakra UI v3는 이전 버전(v2)과 많은 API 변경사항이 있습니다
- 새로운 컴포넌트는 `.Root`, `.Trigger`, `.Content` 등의 복합 컴포넌트 패턴을 사용합니다
- 스타일링은 CSS 변수를 기반으로 하며, 테마 시스템이 개선되었습니다

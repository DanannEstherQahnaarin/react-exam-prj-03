import type { ButtonSize, ButtonColor, ButtonType } from '@/types/button-type'

/**
 * Button 컴포넌트 Props 인터페이스
 */
export interface ButtonProps {
  /** 버튼에 표시될 텍스트 */
  label: string
  
  /** 버튼 크기 (대형/중형/소형) */
  size?: ButtonSize
  
  /** 버튼 색상 타입 */
  color?: ButtonColor
  
  /** 폰트 색상 (CSS 색상 값) */
  fontColor?: string
  
  /** 배경 색상 (CSS 색상 값) */
  backgroundColor?: string
  
  /** 보더 스타일 (CSS border 값) */
  border?: string
  
  /** 보더 라디우스 (CSS border-radius 값) */
  borderRadius?: string
  
  /** 그림자 스타일 (CSS box-shadow 값) */
  boxShadow?: string
  
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void
  
  /** 버튼 타입 (HTML button type) */
  type?: ButtonType
  
  /** 비활성화 여부 */
  disabled?: boolean
  
  /** 추가 CSS 클래스명 */
  className?: string
  
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

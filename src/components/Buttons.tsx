import type { ButtonProps } from '@/interface/button-props'
import type { ButtonSize, ButtonColor } from '@/types/button-type'

/**
 * Button 컴포넌트
 * 
 * 주요 기능 및 동작:
 * - 다양한 크기(size)와 색상(color) 프리셋을 지원
 * - 폰트 색상, 배경색, border, borderRadius, boxShadow 등 세부 스타일 커스텀 가능
 * - 비활성(disabled) 상태 지원, 이때 시각적 & 기능적 차단 처리
 * - 클릭 및 엔터/스페이스 키 키보드 이벤트로 onClick 핸들링
 * - type/aria-label/className/style 등 표준 버튼 프로퍼티 지원
 * 
 * Props:
 * - label: 버튼에 표시될 텍스트
 * - size: 'large' | 'medium' | 'small' 크기 구분 (기본값: medium)
 * - color: 'primary' | 'secondary' | ... 컬러 구분 (기본값: primary)
 * - fontColor, backgroundColor: 직접적인 색상 지정시 사용
 * - border, borderRadius, boxShadow: 버튼 스타일 세부 커스텀
 * - onClick: 버튼 클릭 시 실행 함수
 * - type: button 타입 지정 (button | submit | reset)
 * - disabled: 버튼 비활성화 여부 (기본값: false)
 * - className, style: 추가적인 커스텀 스타일링 및 클래스
 */
export const Button = ({
  label,
  size = 'medium',
  color = 'primary',
  fontColor,
  backgroundColor,
  border,
  borderRadius,
  boxShadow,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  style,
}: ButtonProps) => {
  // 크기별 기본 스타일 프리셋 정의
  const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    large: {
      padding: '12px 24px',
      fontSize: '18px',
      minHeight: '48px',
    },
    medium: {
      padding: '10px 20px',
      fontSize: '16px',
      minHeight: '40px',
    },
    small: {
      padding: '6px 12px',
      fontSize: '14px',
      minHeight: '32px',
    },
  }

  // 색상별 기본 스타일 프리셋 정의 (backgroundColor, font color)
  const colorStyles: Record<ButtonColor, { backgroundColor: string; color: string }> = {
    primary: {
      backgroundColor: '#007bff',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#ffffff',
    },
    success: {
      backgroundColor: '#28a745',
      color: '#ffffff',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: '#ffffff',
    },
    warning: {
      backgroundColor: '#ffc107',
      color: '#212529',
    },
    info: {
      backgroundColor: '#17a2b8',
      color: '#ffffff',
    },
    light: {
      backgroundColor: '#f8f9fa',
      color: '#212529',
    },
    dark: {
      backgroundColor: '#343a40',
      color: '#ffffff',
    },
  }

  /**
   * 최종 적용 스타일 산출
   * - 프리셋 스타일과 개별 프롭스 오버라이딩 혼합
   * - disabled 상태면 opacity와 cursor 변화
   */
  const defaultStyle = {
    ...sizeStyles[size],
    ...(backgroundColor || colorStyles[color].backgroundColor
      ? { backgroundColor: backgroundColor || colorStyles[color].backgroundColor }
      : {}),
    ...(fontColor || colorStyles[color].color
      ? { color: fontColor || colorStyles[color].color }
      : {}),
    border: border || 'none',
    borderRadius: borderRadius || '4px',
    boxShadow: boxShadow || '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    ...style,
  }

  /**
   * 클릭 이벤트 핸들러 (disabled 시 미실행, onClick 프랍이 있을 때만)
   */
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  /**
   * 키보드 입력 핸들러 (Enter 또는 Space일 경우 클릭 효과와 동일 처리)
   * 접근성(웹표준) 증진 목적
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  /**
   * 렌더링:
   * - type/className/style/disabled/aria-label 등 DOM 속성 적용
   * - label 텍스트 표시, 이벤트 핸들러 연결
   * - 키보드 접근성 지원
   */
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={className}
      style={defaultStyle}
      aria-label={label}
    >
      {label}
    </button>
  )
}

export default Button

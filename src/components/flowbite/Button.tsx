import * as React from 'react'
import {
  buttonPrimary,
  buttonAlternative,
  buttonDark,
  buttonLight,
  buttonGreen,
  buttonRed,
  buttonYellow,
  buttonPurple,
} from '@/styles/button'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?:
    | 'primary'
    | 'alternative'
    | 'dark'
    | 'light'
    | 'green'
    | 'red'
    | 'yellow'
    | 'purple'
  pill?: boolean
  onClick?: () => any
  disabled?: boolean
}

const getStyles = (variant: string, pill?: boolean, disabled = false) => {
  let color = ''

  variant === 'primary' && (color = buttonPrimary)
  variant === 'alternative' && (color = buttonAlternative)
  variant === 'dark' && (color = buttonDark)
  variant === 'light' && (color = buttonLight)
  variant === 'green' && (color = buttonGreen)
  variant === 'red' && (color = buttonRed)
  variant === 'yellow' && (color = buttonYellow)
  variant === 'purple' && (color = buttonPurple)

  return `${color} ${pill ? 'rounded-full' : 'rounded-lg'} ${
    disabled && 'cursor-not-allowed opacity-50'
  }`
}

const Button = ({
  children,
  className,
  variant = 'primary',
  pill = false,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${getStyles(variant, pill, disabled)}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

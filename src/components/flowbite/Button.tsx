import * as React from 'react'
import {
    buttonPrimary,
    buttonAlternative,
    buttonDark,
    buttonLight,
    buttonGreen,
    buttonRed,
    buttonYellow,
    buttonPurple
} from '@/styles/button'

interface ButtonProps {
    children: React.ReactNode
    className?: string
    variant?: 'primary' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple'
    pill?: boolean
    onClick?: () => any
}

const getStyles = (variant: string, pill?: boolean) => {
    let color = ''

    variant === 'primary' && (color = buttonPrimary)
    variant === 'alternative' && (color = buttonAlternative)
    variant === 'dark' && (color = buttonDark)
    variant === 'light' && (color = buttonLight)
    variant === 'green' && (color = buttonGreen)
    variant === 'red' && (color = buttonRed)
    variant === 'yellow' && (color = buttonYellow)
    variant === 'purple' && (color = buttonPurple)

    return `${color} ${pill ? 'rounded-full' : 'rounded-lg'} `
}

const Button = ({ children, className, variant = 'primary', pill = true, onClick }: ButtonProps) => {

    return (
        <button
            onClick={onClick}
            className={getStyles(variant, pill) + className}
        >
            {children}
        </button>
    )
}

export default Button
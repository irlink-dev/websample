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

    return color
}

const Button = ({ children, variant = 'primary', pill = false, onClick }: ButtonProps) => {

    return (
        <button
            onClick={onClick}
            className={getStyles(variant)}
        >
            {children}
        </button>
    )
}

export default Button
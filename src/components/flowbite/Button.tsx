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

const Button = ({ children, variant = 'primary', pill, onClick }: ButtonProps) => {

    return (
        <button
            onClick={onClick}
            className={
                variant === 'primary' ? buttonPrimary
                    : variant === 'alternative' ? buttonAlternative
                        : variant === 'dark' ? buttonDark
                            : variant === 'light' ? buttonLight
                                : variant === 'green' ? buttonGreen
                                    : variant === 'red' ? buttonRed
                                        : variant === 'yellow' ? buttonYellow
                                            : variant === 'purple' ? buttonPurple
                                                : ''
            }
        >
            {children}
        </button>
    )
}

export default Button
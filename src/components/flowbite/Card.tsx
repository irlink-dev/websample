import * as React from 'react'

interface CardProps {
    children: React.ReactNode
    className: string
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div
            className={`p-6 bg-white border border-gray-200 rounded-lg shadow ${className}`}
        >
            {children}
        </div>
    )
}

export default Card
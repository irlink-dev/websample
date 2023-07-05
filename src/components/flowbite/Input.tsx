import * as React from 'react'

interface InputProps {
    id?: string
    label?: string
    placeholder?: string
    className?: string
    value?: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
    width?: number | string
    disabled?: boolean
}

const LABEL_STYLE = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
const INPUT_STYLE = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'

const Input = ({ label = '', id = label, placeholder, className, value, onChange, width, disabled }: InputProps) => {
    const _width = typeof width === 'number' ? String(width) : width
    return (
        <div>
            {label !== '' && (
                <label htmlFor={id} className={LABEL_STYLE}>
                    {label}
                </label>
            )}
            <input
                type="text" id={id}
                className={`${className} ${INPUT_STYLE} ${width ? `w-${_width}` : 'w-full'}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    )
}

export default Input
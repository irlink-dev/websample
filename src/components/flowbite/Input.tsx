import * as React from 'react'

interface InputProps {
    id?: string
    label?: string
    placeholder?: string
    className?: string
    value?: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
}

const LABEL_STYLE = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
const INPUT_STYLE = 'block w-full h-10 px-5 text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500'

const Input = ({ label = '', id = label, placeholder, className, value, onChange }: InputProps) => {
    return (
        <div>
            {label !== '' && (
                <label htmlFor={id} className={LABEL_STYLE}>
                    {label}
                </label>
            )}
            <input
                type="text" id={id}
                className={INPUT_STYLE + ' ' + className}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </div>
    )
}

export default Input
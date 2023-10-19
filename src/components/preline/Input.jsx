const Input = ({ placeholder, value, onChange, disabled, readOnly }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      className={`${
        disabled && 'cursor-not-allowed'
      } py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400`}
    ></input>
  )
}

export default Input

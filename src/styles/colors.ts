export const primary =
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'

export const alternative =
    'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'

export const dark =
    'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'

export const light =
    'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'

export const green =
    'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'

export const red =
    'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'

export const yellow =
    'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900'

export const purple =
    'text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'


const alert = { info: 'blue', danger: 'red', success: 'green', warning: 'yellow', semiDark: 'dark' }

const backgroundLight = (color: string) =>
    `text-${color}-800 bg-${color}-50 dark:bg-gray-800 dark:text-${color}-${
        color === 'yellow' || color === 'gray' ? '300' : '400'
    }`

const alertBackground = Object.entries(alert).reduce((acc: { [key: string]: string }, [key, color]) => {
    acc[key] = backgroundLight(color)
    return acc
}, {})

export const { info, danger, success, warning, semiDark } = alertBackground

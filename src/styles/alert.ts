import { info, danger, success, warning, semiDark } from '@/styles/colors'

/**
 * alert.
 */
export const alert = 'p-4 text-sm rounded-lg'

export const alertInfo = `${alert} ${info}`

export const alertDanger = `${alert} ${danger}`

export const alertSuccess = `${alert} ${success}`

export const alertWarning = `${alert} ${warning}`

export const alertDark = `${alert} ${semiDark}`

export const alertBorder = (color: string) =>
  `border border-${color}-300 dark:border-${color}-${
    color === 'gray' ? '600' : '800'
  }`

export const alertInfoBorder = `${alertInfo} ${alertBorder('blue')}`

export const alertDangerBorder = `${alertDanger} ${alertBorder('red')}`

export const alertSuccessBorder = `${alertSuccess} ${alertBorder('green')}`

export const alertWarningBorder = `${alertWarning} ${alertBorder('yellow')}`

export const alertDarkBorder = `${alertDark} ${alertBorder('gray')}`

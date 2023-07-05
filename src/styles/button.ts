import { primary, alternative, dark, light, green, red, yellow, purple } from '@/styles/colors'

export const buttonOutline = 'focus:outline-none focus:ring-4'

/**
 * [ORIGINAL] py-2.5 는 flex 안에서 무시되고, content-fit height 가 적용됨.
 */
export const _button = `${buttonOutline} font-medium text-sm px-5 py-2.5`

/**
 * [CUSTOM] input field 의 default height 에 맞춰 button height 고정. + px 조금 줄임.
 */
export const button = `${buttonOutline} font-medium text-sm px-3 inline-block h-[42px]`

export const buttonPrimary = `${button} ${primary}`

export const buttonAlternative = `${button} ${alternative}`

export const buttonDark = `${button} ${dark}`

export const buttonLight = `${button} ${light}`

export const buttonGreen = `${button} ${green}`

export const buttonRed = `${button} ${red}`

export const buttonYellow = `${button} ${yellow}`

export const buttonPurple = `${button} ${purple}`
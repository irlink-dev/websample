/**
 * 디바이스 연결 상태. [IR-WIRELESS]
 */
export const CreateDeviceState = {
    DISCONNECTED: '0',
    CONNECTED: '1',
    PAIRED: '2',
    REJECT: '-1',
    DUPLICATE_LOGIN: '-2',
    DISCONNECTED_PAIRING: '-3',
    DUPLICATE_WEB_LOGIN: '-4'
}

/**
 * 음소거 상태.
 */
export const MuteState = {
    MIC_ON: '0',
    MIC_OFF: '1'
}

export type CreateDeviceStateType = typeof CreateDeviceState[keyof typeof CreateDeviceState]

export type MuteStateType = typeof MuteState[keyof typeof MuteState]

/**
 * IR-WIRELESS(String) to CreateDeviceState.
 */
export const toCreateDeviceState = (state: string) => {
    for (const [key, val] of Object.entries(CreateDeviceState)) {
        if (val === state) {
            return key
        }
    }
    return undefined
}

/**
 * (Number) to MuteState.
 */
export const toMuteState = (state: string) => {
    for (const [key, val] of Object.entries(MuteState)) {
        if (val === state) {
            return key
        }
    }
    return undefined
}
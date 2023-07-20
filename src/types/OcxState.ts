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

/**
 * 착신 거부 상태.
 */
export const DndState = {
    DND_OFF: '0',
    DND_ON: '1'
}

/**
 * String to state key.
 */
export const toStateKey = (
    stateObject: { [key: string]: string },
    state: string
) => {
    for (const [key, val] of Object.entries(stateObject)) {
        if (val === state) {
            return key
        }
    }
    return undefined
}

export const toCreateDeviceState = (state: string) => toStateKey(CreateDeviceState, state)
export type CreateDeviceStateType = typeof CreateDeviceState[keyof typeof CreateDeviceState]
export const toMuteState = (state: string) => toStateKey(MuteState, state)
export type MuteStateType = typeof MuteState[keyof typeof MuteState]
export const toDndState = (state: string) => toStateKey(DndState, state)
export type DndStateType = typeof DndState[keyof typeof DndState]


/**
 * 디바이스 연결 상태.
 */
export enum CreateDeviceState {
  DISCONNECTED = 0,
  CONNECTED = 1,
  PAIRED = 2,
  REJECT = -1,
  DUPLICATE_LOGIN = -2,
  DISCONNECTED_PAIRING = -3,
  DUPLICATE_WEB_LOGIN = -4,
  ZMS_UNREGISTERED_USE = -5,
  ZIBOX_DISCONNECTED = -6,
}

/**
 * 벨 상태.
 */
export enum BellState {
  SILENT = 0,
  RINGING = 1,
}

/**
 * 콜 상태.
 */
export enum CallState {
  IDLE = 0,
  INBOUND = 1,
  OUTBOUND = 2,
  CONNECTED = 3,
}

/**
 * 콜 활성화 상태.
 */
export enum CallActiveState {
  INACTIVE = 0,
  ACTIVE = 1,
}

/**
 * 음소거 상태.
 */
export enum MuteState {
  MIC_ON = 0,
  MIC_OFF = 1,
}

/**
 * 착신 거부 상태.
 */
export enum DndState {
  DND_OFF = 0,
  DND_ON = 1,
}


export type CreateDeviceStateType = (typeof CreateDeviceState)[keyof typeof CreateDeviceState]

export type CallStateType = (typeof CallState)[keyof typeof CallState]

export type CallActiveStateType = (typeof CallActiveState)[keyof typeof CallActiveState]

export type BellStateType = (typeof BellState)[keyof typeof BellState]

export type MuteStateType = (typeof MuteState)[keyof typeof MuteState]

export type DndStateType = (typeof DndState)[keyof typeof DndState]

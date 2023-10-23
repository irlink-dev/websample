import * as React from 'react'
import {
  BellState,
  BellStateType,
  CallActiveState,
  CallActiveStateType,
  CallState,
  CallStateType,
  CreateDeviceState,
  CreateDeviceStateType,
  DndState,
  DndStateType,
  MuteState,
  MuteStateType,
} from '@/enums/OcxState'

export const OcxStateContext = React.createContext({
  /**
   * 디바이스 연결 상태.
   */
  createDeviceState: CreateDeviceState.DISCONNECTED,
  setCreateDeviceState: ((state: CreateDeviceStateType) => {
    /* empty */
  }) as React.Dispatch<React.SetStateAction<CreateDeviceStateType>>,

  /**
   * 콜 상태.
   */
  callState: CallState.IDLE,
  setCallState: ((state: CallStateType) => {
    /* empty */
  }) as React.Dispatch<React.SetStateAction<CallStateType>>,

  /**
   * 콜 활성화 상태.
   */
  callActiveState: CallActiveState.INACTIVE,
  setCallActiveState: ((state: CallActiveStateType) => {
    /* empty */
  }) as React.Dispatch<React.SetStateAction<CallActiveStateType>>,

  /**
   * 벨 상태.
   */
  bellState: BellState.SILENT,
  setBellState: ((state: BellStateType) => {
    /* empty */
  }) as React.Dispatch<React.SetStateAction<BellStateType>>,

  /**
   * 음소거 상태.
   */
  muteState: MuteState.MIC_ON,
  setMuteState: ((state: MuteStateType) => {
    /* empty */
  }) as React.Dispatch<React.SetStateAction<MuteStateType>>,

  /**
   * 착신 거부 상태.
   */
  dndState: DndState.DND_OFF,
  setDndState: ((state: DndStateType) => {
    /* empty */
  }) as React.Dispatch<React.SetStateAction<DndStateType>>,
})

export const OcxStateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [createDeviceState, setCreateDeviceState] =
    React.useState<CreateDeviceStateType>(CreateDeviceState.DISCONNECTED)

  const [callState, setCallState] = React.useState<CallStateType>(
    CallState.IDLE,
  )

  const [callActiveState, setCallActiveState] =
    React.useState<CallActiveStateType>(CallActiveState.INACTIVE)

  const [bellState, setBellState] = React.useState<BellStateType>(
    BellState.SILENT,
  )

  const [muteState, setMuteState] = React.useState<MuteStateType>(
    MuteState.MIC_ON,
  )

  const [dndState, setDndState] = React.useState<DndStateType>(DndState.DND_OFF)

  return (
    <OcxStateContext.Provider
      value={{
        createDeviceState,
        setCreateDeviceState,
        callState,
        setCallState,
        callActiveState,
        setCallActiveState,
        bellState,
        setBellState,
        muteState,
        setMuteState,
        dndState,
        setDndState,
      }}
    >
      {children}
    </OcxStateContext.Provider>
  )
}

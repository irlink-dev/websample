import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
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

export const OcxStateContext = createContext({
  /**
   * 디바이스 연결 상태.
   */
  createDeviceState: CreateDeviceState.DISCONNECTED,
  setCreateDeviceState: ((state: CreateDeviceStateType) => {
    /* empty */
  }) as Dispatch<SetStateAction<CreateDeviceStateType>>,

  /**
   * 콜 상태.
   */
  callState: CallState.IDLE,
  setCallState: ((state: CallStateType) => {
    /* empty */
  }) as Dispatch<SetStateAction<CallStateType>>,

  /**
   * 콜 활성화 상태.
   */
  callActiveState: CallActiveState.INACTIVE,
  setCallActiveState: ((state: CallActiveStateType) => {
    /* empty */
  }) as Dispatch<SetStateAction<CallActiveStateType>>,

  /**
   * 벨 상태.
   */
  bellState: BellState.SILENT,
  setBellState: ((state: BellStateType) => {
    /* empty */
  }) as Dispatch<SetStateAction<BellStateType>>,

  /**
   * 음소거 상태.
   */
  muteState: MuteState.MIC_ON,
  setMuteState: ((state: MuteStateType) => {
    /* empty */
  }) as Dispatch<SetStateAction<MuteStateType>>,

  /**
   * 착신 거부 상태.
   */
  dndState: DndState.DND_OFF,
  setDndState: ((state: DndStateType) => {
    /* empty */
  }) as Dispatch<SetStateAction<DndStateType>>,
})

export const OcxStateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [createDeviceState, setCreateDeviceState] =
    useState<CreateDeviceStateType>(CreateDeviceState.DISCONNECTED)

  const [callState, setCallState] = useState<CallStateType>(CallState.IDLE)

  const [callActiveState, setCallActiveState] = useState<CallActiveStateType>(
    CallActiveState.INACTIVE,
  )

  const [bellState, setBellState] = useState<BellStateType>(BellState.SILENT)

  const [muteState, setMuteState] = useState<MuteStateType>(MuteState.MIC_ON)

  const [dndState, setDndState] = useState<DndStateType>(DndState.DND_OFF)

  useEffect(() => {
    console.log('createDeviceState:', createDeviceState)
  }, [createDeviceState])

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

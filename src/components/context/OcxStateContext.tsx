import * as React from 'react'
import {
    CreateDeviceState,
    CreateDeviceStateType,
    DndState,
    DndStateType,
    MuteState,
    MuteStateType
} from '@/types/OcxState'

export const OcxStateContext = React.createContext({

    /**
     * 디바이스 연결 상태.
     */
    createDeviceState: CreateDeviceState.DISCONNECTED,
    setCreateDeviceState: ((state: CreateDeviceStateType) => {
        /* empty */
    }) as React.Dispatch<React.SetStateAction<CreateDeviceStateType>>,

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
    }) as React.Dispatch<React.SetStateAction<DndStateType>>

})

export const OcxStateProvider = ({ children }: { children: React.ReactNode }) => {

    const [createDeviceState, setCreateDeviceState] =
        React.useState<CreateDeviceStateType>(CreateDeviceState.DISCONNECTED)

    const [muteState, setMuteState] = React.useState<MuteStateType>(MuteState.MIC_ON)

    const [dndState, setDndState] = React.useState<DndStateType>(DndState.DND_OFF)

    return (
        <OcxStateContext.Provider
            value={{
                createDeviceState,
                setCreateDeviceState,
                muteState,
                setMuteState,
                dndState,
                setDndState
            }}
        >
            {children}
        </OcxStateContext.Provider>
    )
}
import * as React from 'react'
import { CreateDeviceState, CreateDeviceStateType, MuteState, MuteStateType } from '@/types/OcxState'

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
    }) as React.Dispatch<React.SetStateAction<MuteStateType>>

})

export const OcxStateProvider = ({ children }: { children: React.ReactNode }) => {

    /**
     * 디바이스 연결 상태.
     */
    const [createDeviceState, setCreateDeviceState] = React.useState<CreateDeviceStateType>(CreateDeviceState.DISCONNECTED)

    /**
     * 음소거 상태.
     */
    const [muteState, setMuteState] = React.useState<MuteStateType>(MuteState.MIC_ON)


    return (
        <OcxStateContext.Provider
            value={{
                createDeviceState,
                setCreateDeviceState,
                muteState,
                setMuteState
            }}
        >
            {children}
        </OcxStateContext.Provider>
    )
}
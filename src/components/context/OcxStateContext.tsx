import * as React from 'react'
import { CreateDeviceState, CreateDeviceStateType } from '@/types/OcxState'

export const OcxStateContext = React.createContext({
    createDeviceState: CreateDeviceState.DISCONNECTED,
    setCreateDeviceState: ((state: CreateDeviceStateType) => {
        /* empty */
    }) as React.Dispatch<React.SetStateAction<CreateDeviceStateType>>
})

export const OcxStateProvider = ({ children }: { children: React.ReactNode }) => {
    // 디바이스 연결 상태.
    const [createDeviceState, setCreateDeviceState] = React.useState<CreateDeviceStateType>(CreateDeviceState.DISCONNECTED)

    return (
        <OcxStateContext.Provider value={{ createDeviceState, setCreateDeviceState }}>
            {children}
        </OcxStateContext.Provider>
    )
}
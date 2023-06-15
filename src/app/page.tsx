'use client'

import * as React from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import useOcxEvents from '@/hooks/useOcxEvents'
import Button from '@/components/flowbite/Button'

declare global {
    interface Window {
        IRCelering: new () => any
    }
}

const RootPage = () => {

    const [ocx, setOcx] = React.useState<any>(null)

    React.useEffect(() => {
        const _ocx = new window.IRCelering()    // 객체 생성.
        const { ocx } = useOcxEvents(_ocx)      // 이벤트 정의.
        setOcx(() => ocx)
    }, [])

    const {
        createDevice,
        closeDevice,
        setDialStr,
        setHookMode,
        getCallState,
        getVolume,
        checkAvailableCall,
        setMicMute,
        setVolume,
        getSavePath,
        setRecordFileName,
        sendMessageExt,
        getBatteryInfo,
        setExtra,
        setSelectDevice
    } = useOcxMethods(ocx)

    return (
        <>
            <Button
                variant="primary"
                onClick={() => createDevice('https://192.168.1.175:3001/', '01028746064')}
            >
                연결
            </Button>

            <Button
                variant="alternative"
                onClick={() => closeDevice()}
            >
                연결 해제
            </Button>
        </>
    )
}

export default RootPage

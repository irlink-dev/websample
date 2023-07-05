'use client'

import * as React from 'react'
import useOcxEvents from '@/hooks/useOcxEvents'
import ConnectionPanel from '@/components/panels/ConnectionPanel'
import CallPanel from '@/components/panels/CallPanel'
import RecordingPanel from '@/components/panels/RecordingPanel'
import MessagePanel from '@/components/panels/MessagePanel'
import UtilPanel from '@/components/panels/UtilPanel'
import { Grid, Typography } from '@mui/material'
import { OcxStateContext } from '@/components/context/OcxStateContext'

declare global {
    interface Window {
        IRWebSocketClient: new () => any
    }
}

const RootPage = () => {

    const [ocx, setOcx] = React.useState<any>(null)

    const ocxStateContext = React.useContext(OcxStateContext)

    React.useEffect(() => {
        const _ocx = new window.IRWebSocketClient()             // 객체 생성.
        const { ocx } = useOcxEvents(_ocx, ocxStateContext)     // 이벤트 정의.
        setOcx(() => ocx)
    }, [])

    return (
        <>
            {/* 연결 패널 */}
            <ConnectionPanel ocx={ocx} />

            {/* 콜 패널 */}
            {/*<CallPanel ocx={ocx} />*/}

            {/* 녹취 패널 */}
            {/*<RecordingPanel ocx={ocx} />*/}

            {/* 문자 패널 */}
            {/*<MessagePanel ocx={ocx} />*/}

            {/* 유틸 패널 */}
            {/*<UtilPanel ocx={ocx} />*/}

        </>
    )
}

export default RootPage

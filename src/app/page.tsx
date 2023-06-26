'use client'

import * as React from 'react'
import useOcxEvents from '@/hooks/useOcxEvents'
import ConnectionPanel from '@/components/panels/ConnectionPanel'
import CallPanel from '@/components/panels/CallPanel'
import RecordingPanel from '@/components/panels/RecordingPanel'
import MessagePanel from '@/components/panels/MessagePanel'
import UtilPanel from '@/components/panels/UtilPanel'
import { Grid, Typography } from '@mui/material'

declare global {
    interface Window {
        IRWebSocketClient: new () => any
    }
}

const RootPage = () => {

    const [ocx, setOcx] = React.useState<any>(null)

    React.useEffect(() => {
        const _ocx = new window.IRWebSocketClient()     // 객체 생성.
        const { ocx } = useOcxEvents(_ocx)              // 이벤트 정의.
        setOcx(() => ocx)
    }, [])

    return (
        <>
            <Typography>법인폰 웹 샘플</Typography>

            <Grid container spacing={3} sx={{ px: 5, pt: 1 }}>

                {/* 연결 패널 */}
                <Grid item xs={12} md={6} lg={4}>
                    <ConnectionPanel ocx={ocx} />
                </Grid>

                {/* 콜 패널 */}
                <Grid item xs={12} md={6} lg={4}>
                    <CallPanel ocx={ocx} />
                </Grid>

                {/* 녹취 패널 */}
                <Grid item xs={12} md={6} lg={4}>
                    <RecordingPanel ocx={ocx} />
                </Grid>

                {/* 문자 패널 */}
                <Grid item xs={12} md={6} lg={4}>
                    <MessagePanel ocx={ocx} />
                </Grid>

                {/* 유틸 패널 */}
                <Grid item xs={12} md={6} lg={4}>
                    <UtilPanel ocx={ocx} />
                </Grid>

            </Grid>
        </>
    )
}

export default RootPage

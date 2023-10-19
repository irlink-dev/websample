'use client'

import { useState, useContext, useEffect } from 'react'
import useOcxEvents from '@/hooks/useOcxEvents'
import ConnectionPanel from '@/components/ConnectionPanel'
import CallPanel from '@/components/CallPanel'
import RecordingPanel from '@/components/RecordingPanel'
import MessagePanel from '@/components/MessagePanel'
import UtilPanel from '@/components/UtilPanel'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import AlertInfoAccent from '@/components/AlertInfoAccent'
import SetSavePath from '@/components/SetSavePath.jsx'
import WindowBlock from '@/components/unit/WindowBlock'
import ConnectionUnit from '@/components/unit/ConnectionUnit'

declare global {
  interface Window {
    IRWebSocketClient: new () => any
  }
}

const RootPage = () => {
  const [ocx, setOcx] = useState<any>(null)
  const ocxStateContext = useContext(OcxStateContext)

  useEffect(() => {
    const _ocx = new window.IRWebSocketClient()
    const { ocx } = useOcxEvents(_ocx, ocxStateContext)
    setOcx(() => ocx)
  }, [])

  return (
    <>
      {/* 상단 알림 */}
      <AlertInfoAccent>
        법인폰을 사내 Wi-Fi에 연결하고, 웹에서 SSL 사설 인증서를 갱신해 주세요.
      </AlertInfoAccent>

      {/* 연결 패널 */}
      <section className="w-full px-5 border-b-2 border-[#eeeeee]">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between py-5 md:flex-row md:py-2">
          <h1 className="text-lg font-medium hidden md:block text-[#333333]">
            WEB SAMPLE
          </h1>

          <div className="w-full md:w-auto flex flex-col items-center gap-2 md:flex-row">
            <ConnectionUnit ocx={ocx} />
            <WindowBlock ocx={ocx} />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa] pt-5">
        {/* 업로드 패널 */}
        <div className="max-w-screen-lg mx-auto">
          <SetSavePath ocx={ocx} />
        </div>

        <div className="max-w-screen-lg mx-auto mt-5">
          <CallPanel ocx={ocx} />
          <RecordingPanel ocx={ocx} />
          <MessagePanel ocx={ocx} />
          <UtilPanel ocx={ocx} />
        </div>

        <span className="text-xs text-[#777777]">Socket.io Client v2</span>
      </main>
    </>
  )
}

export default RootPage

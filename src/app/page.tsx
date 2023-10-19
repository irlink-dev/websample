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
import CallUnit from '@/components/unit/CallUnit'

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
      <section className="w-full p-5 border-b-2 border-[#eeeeee]">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-lg font-medium hidden md:block text-[#333333]">
            WEB SAMPLE
          </h1>

          <div className="w-full flex flex-col items-center gap-2">
            <ConnectionUnit ocx={ocx} />
            <WindowBlock ocx={ocx} />
          </div>
        </div>
      </section>

      <main className="bg-[#fafafa]">
        <section className="p-5">
          <SetSavePath ocx={ocx} />
        </section>

        <div className="flex flex-col gap-2">
          <section className="border-y-2 border-[#eeeeee]">
            <CallUnit ocx={ocx} />
          </section>

          <CallPanel ocx={ocx} />
          <RecordingPanel ocx={ocx} />
          <MessagePanel ocx={ocx} />
          <UtilPanel ocx={ocx} />

          <span className="text-xs text-[#777777]">Socket.io Client v2</span>
        </div>
      </main>
    </>
  )
}

export default RootPage

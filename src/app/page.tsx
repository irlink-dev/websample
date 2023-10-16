'use client'

import React from 'react'
import useOcxEvents from '@/hooks/useOcxEvents'
import ConnectionPanel from '@/components/ConnectionPanel'
import CallPanel from '@/components/CallPanel'
import RecordingPanel from '@/components/RecordingPanel'
import MessagePanel from '@/components/MessagePanel'
import UtilPanel from '@/components/UtilPanel'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import AlertInfoAccent from '@/components/AlertInfoAccent'

declare global {
  interface Window {
    IRWebSocketClient: new () => any
  }
}

const RootPage = () => {
  const [ocx, setOcx] = React.useState<any>(null)

  const ocxStateContext = React.useContext(OcxStateContext)

  React.useEffect(() => {
    const _ocx = new window.IRWebSocketClient() // 객체 생성.
    const { ocx } = useOcxEvents(_ocx, ocxStateContext) // 이벤트 정의.
    setOcx(() => ocx)
  }, [])

  const CALL_RECORD_PANEL = 1
  const MESSAGE_PANEL = 3
  const UTIL_PANEL = 4

  const [tab, setTab] = React.useState<number>(CALL_RECORD_PANEL)

  const TAB =
    'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50'
  const TAB_SELECTED = 'inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg'

  return (
    <>
      {/* ALERT MESSAGE */}
      <AlertInfoAccent>
        법인폰을 사내 Wi-Fi에 연결하고, 웹에서 SSL 사설 인증서를 갱신해 주세요.
      </AlertInfoAccent>

      {/* TOP BAR - CONNECTION PANEL */}
      <ConnectionPanel ocx={ocx} />

      <div className="max-w-screen-lg mx-auto mt-5">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          {/* TAB SELECT LIST */}
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <li className="mr-2">
              <button
                className={tab === CALL_RECORD_PANEL ? TAB_SELECTED : TAB}
                onClick={() => setTab(() => CALL_RECORD_PANEL)}
              >
                Call & Record Panel
              </button>
            </li>

            <li className="mr-2">
              <button
                className={tab === MESSAGE_PANEL ? TAB_SELECTED : TAB}
                onClick={() => setTab(() => MESSAGE_PANEL)}
              >
                Message Panel
              </button>
            </li>

            <li>
              <button
                className={tab === UTIL_PANEL ? TAB_SELECTED : TAB}
                onClick={() => setTab(() => UTIL_PANEL)}
              >
                Util Panel
              </button>
            </li>
          </ul>
        </div>

        {/* TAB CONTENTS */}
        {tab === CALL_RECORD_PANEL && (
          <>
            <CallPanel ocx={ocx} />
            <RecordingPanel ocx={ocx} />
          </>
        )}
        {tab === MESSAGE_PANEL && <MessagePanel ocx={ocx} />}
        {tab === UTIL_PANEL && <UtilPanel ocx={ocx} />}
      </div>
    </>
  )
}

export default RootPage

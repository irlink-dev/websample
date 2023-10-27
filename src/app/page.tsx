'use client'

import { useState, useContext, useEffect } from 'react'
import useOcxEvents from '@/hooks/useOcxEvents'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import Alert from '@/components/Alert'
import UploadPathUnit from '@/components/unit/UploadPathUnit.jsx'
import WindowUnit from '@/components/unit/WindowUnit'
import ConnectionUnit from '@/components/unit/ConnectionUnit'
import CallUnit from '@/components/unit/CallUnit'
import DndUnit from '@/components/unit/DndUnit'
import MuteUnit from '@/components/unit/MuteUnit'
import CallStateUnit from '@/components/unit/CallStateUnit'
import VolumeUnit from '@/components/unit/VolumeUnit'
import UploadUnit from '@/components/unit/UploadUnit'
import RecordUnit from '@/components/unit/RecordUnit'
import MessageUnit from '@/components/unit/MessageUnit'
import BatteryUnit from '@/components/unit/BatteryUnit'
import DeviceUnit from '@/components/unit/DeviceUnit'
import ExtraUnit from '@/components/unit/ExtraUnit'

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
      {/** Top Alert */}
      <Alert>
        법인폰을 사내 Wi-Fi에 연결하고, 웹에서 SSL 사설 인증서를 갱신해 주세요.
      </Alert>

      {/** Connection & Window Panel */}
      <section className="w-full p-5 border-b-2 border-[#eeeeee]">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-lg font-medium hidden text-[#333333]">
            WEB SAMPLE
          </h1>

          <div className="w-full flex flex-col items-center gap-2">
            <ConnectionUnit ocx={ocx} />
            <WindowUnit ocx={ocx} />
          </div>
        </div>
      </section>

      {/** Main Contents */}
      <main className="bg-[#fafafa]">
        <UploadPathUnit ocx={ocx} />

        <div className="flex flex-col gap-2">
          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full flex flex-col gap-2 p-5 bg-white">
              <CallUnit ocx={ocx} />
            </div>
          </section>

          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full grid grid-cols-2 gap-2 p-5 bg-white">
              <DndUnit ocx={ocx} />
              <MuteUnit ocx={ocx} />
            </div>
          </section>

          <section className="">
            <div className="w-full flex flex-col gap-2 p-5">
              <CallStateUnit ocx={ocx} />
              <VolumeUnit ocx={ocx} />
            </div>
          </section>

          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full flex flex-col gap-2 p-5 bg-white">
              <UploadUnit ocx={ocx} />
            </div>
          </section>

          <section className="">
            <div className="w-full grid grid-cols-2 gap-2 p-5">
              <RecordUnit ocx={ocx} />
            </div>
          </section>

          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full flex flex-col gap-2 p-5 bg-white">
              <MessageUnit ocx={ocx} />
            </div>
          </section>

          <section className="">
            <div className="w-full flex flex-col gap-2 p-5">
              <BatteryUnit ocx={ocx} />
              <div className="grid grid-cols-2 gap-2">
                <DeviceUnit ocx={ocx} />
              </div>
            </div>
          </section>

          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full flex flex-col gap-2 p-5 bg-white">
              <ExtraUnit ocx={ocx} />
            </div>
          </section>

          <section className="">
            <div className="w-full flex flex-col gap-2 p-5">
              <span className="text-sm text-[#777777]">
                Socket.io Client v2
              </span>
            </div>
          </section>

          {/* blank */}
          <div className="h-16" />
        </div>
      </main>
    </>
  )
}

export default RootPage

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
  const packageJson = require('/package.json')

  return (
    <>
      {/** Top Alert */}
      <Alert>
        법인폰을 사내 Wi-Fi에 연결하고, 웹에서 SSL 사설 인증서를 갱신해 주세요.
      </Alert>

      {/** Connection & Window Panel */}
      <section className="w-full p-5 border-b-2 border-[#eeeeee]">
        <div className="w-full flex flex-col items-center gap-2">
          <ConnectionUnit />
          <WindowUnit />
        </div>
      </section>

      {/** Main Contents */}
      <main className="bg-[#fafafa]">
        <UploadPathUnit />

        <div className="flex flex-col gap-2">
          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full flex flex-col gap-2 p-5 bg-white">
              <CallUnit />
            </div>
          </section>

          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full grid grid-cols-2 gap-2 p-5 bg-white">
              <DndUnit />
              <MuteUnit />
            </div>
          </section>

          <section className="">
            <div className="w-full flex flex-col gap-2 p-5">
              <CallStateUnit />
              <VolumeUnit />
            </div>
          </section>

          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full flex flex-col gap-2 p-5 bg-white">
              <UploadUnit />
            </div>
          </section>

          <section className="">
            <div className="w-full grid grid-cols-2 gap-2 p-5">
              <RecordUnit />
            </div>
          </section>

          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full flex flex-col gap-2 p-5 bg-white">
              <MessageUnit />
            </div>
          </section>

          <section className="">
            <div className="w-full flex flex-col gap-2 p-5">
              <BatteryUnit />
              <div className="grid grid-cols-2 gap-2">
                <DeviceUnit />
              </div>
            </div>
          </section>

          <section className="border-y-2 border-[#eeeeee]">
            <div className="w-full flex flex-col gap-2 p-5 bg-white">
              <ExtraUnit />
            </div>
          </section>

          <section className="">
            <div className="w-full flex flex-col gap-2 p-5">
              <span className="text-sm text-[#777777]">
                Socket.io Client v2
              </span>
              <strong className="text-sm text-[#777777]">
                IRLINK WEB SAMPLE v{packageJson.version}
              </strong>
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

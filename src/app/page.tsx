'use client'

import packageJson from '../../package.json'
import Alert from '@/components/Alert'
import Switch from '@/components/Switch'
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
import { AnimationStyles } from '@/enums/styles/AnimationStyles'
import { useContext } from 'react'
import { SettingsContext } from '@/contexts/SettingsContext'

declare global {
  interface Window {
    IRWebSocketClient: new () => any
  }
}

const RootPage = () => {
  const { settings, setSettings } = useContext(SettingsContext)

  return (
    <>
      <Alert>
        법인폰을 사내 Wi-Fi에 연결하고, 웹에서 SSL 사설 인증서를 갱신해 주세요.
      </Alert>

      <section
        className={`max-w-screen-lg mx-auto pt-5`}
        // grid grid-cols-1 sm:p-5 sm:gap-3 md:grid-cols-2
      >
        <div className="flex items-center justify-center gap-2">
          <span>Use engine.io v3 (old version)</span>
          <Switch
            label="EIO v3"
            onChange={(USE_ENGINE_IO_V3: boolean) => {
              setSettings({ ...settings, USE_ENGINE_IO_V3 })
            }}
          />
        </div>
      </section>

      {/* lg:grid-cols-3 gap-x-4 */}
      <main
        className={`max-w-screen-lg mx-auto grid grid-cols-1 sm:p-5 sm:gap-3 md:grid-cols-2 `}
      >
        <section
          className={`border-b-2 border-[#eeeeee] sm:border-none ${AnimationStyles.DEFAULT}`}
        >
          <div
            className={`w-full h-full flex flex-col gap-2 p-5 bg-white sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <ConnectionUnit />
            <WindowUnit />
          </div>
        </section>

        <section className={` sm:border-none ${AnimationStyles.DEFAULT}`}>
          <div
            className={`w-full h-full flex flex-col gap-2 p-5 sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <UploadPathUnit />
          </div>
        </section>

        <section
          className={`border-y-2 border-[#eeeeee] mb-2 sm:m-0 sm:border-none`}
        >
          <div
            className={`w-full h-full flex flex-col gap-2 p-5 bg-white sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <CallUnit />
          </div>
        </section>

        <section
          className={`border-y-2 border-[#eeeeee] sm:border-none ${AnimationStyles.DEFAULT}`}
        >
          <div
            className={`w-full h-full grid grid-cols-2 gap-2 p-5 bg-white sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <DndUnit />
            <MuteUnit />
          </div>
        </section>

        <section className={` sm:border-none ${AnimationStyles.DEFAULT}`}>
          <div
            className={`w-full h-full flex flex-col gap-2 p-5 sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <CallStateUnit />
            <VolumeUnit />
          </div>
        </section>

        <section
          className={`border-y-2 border-[#eeeeee] sm:border-none ${AnimationStyles.DEFAULT}`}
        >
          <div
            className={`w-full h-full flex flex-col gap-2 p-5 bg-white sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <UploadUnit />
          </div>
        </section>

        <section className={` sm:border-none ${AnimationStyles.DEFAULT}`}>
          <div
            className={`w-full h-full grid grid-cols-2 gap-2 p-5 sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <RecordUnit />
          </div>
        </section>

        <section
          className={`border-y-2 border-[#eeeeee] sm:border-none ${AnimationStyles.DEFAULT}`}
        >
          <div
            className={`w-full h-full flex flex-col gap-2 p-5 bg-white sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <MessageUnit />
          </div>
        </section>

        <section className={` sm:border-none ${AnimationStyles.DEFAULT}`}>
          <div
            className={`w-full h-full flex flex-col gap-2 p-5 sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <BatteryUnit />
            <div className={`grid grid-cols-2 gap-2`}>
              <DeviceUnit />
            </div>
          </div>
        </section>

        <section
          className={`border-y-2 border-[#eeeeee] sm:border-none ${AnimationStyles.DEFAULT}`}
        >
          <div
            className={`w-full h-full flex flex-col gap-2 p-5 bg-white sm:border sm:rounded-xl sm:bg-white sm:drop-shadow`}
          >
            <ExtraUnit />
          </div>
        </section>
      </main>
      <section className={`max-w-screen-lg mx-auto p-5 sm:pt-0`}>
        <div className={`w-full h-full flex flex-col gap-2`}>
          <span className={`text-sm text-[#777777]`}>Socket.io Client v2</span>
          <strong className={`text-sm text-[#777777]`}>
            IRLINK WEB SAMPLE v{packageJson.version}
          </strong>
        </div>
      </section>
    </>
  )
}

export default RootPage

/**
 * connected ? '🟢 Connected' : '🔴 Disconnected'
 */

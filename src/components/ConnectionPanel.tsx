import * as React from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import useLocalStorage from '@/hooks/useLocalStorage'
import Button from '@/components/Button'
// import Input from '@/components/Input'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import { CreateDeviceState } from '@/types/OcxState'
import { OutlineButton, SolidButton } from '@/components/preline/Button'
import Input from '@/components/preline/Input'
import WindowBlock from '@/components/WindowBlock'

const LOCAL_STORAGE_VALUES_KEY = `ir_web_sample:connection_panel:values`

interface ConnectionPanelProps {
  ocx: any
}

interface ConnectionPanelData {
  serverUrl: string
  phoneNumber: string
}

const ConnectionPanel = ({ ocx }: ConnectionPanelProps) => {
  const { createDeviceState } = React.useContext(OcxStateContext)

  const { createDevice, closeDevice } = useOcxMethods(ocx)

  const { getLocalStorageData, setLocalStorageData } = useLocalStorage()

  const [data, setData] = React.useState<ConnectionPanelData>(() => {
    const storageData = getLocalStorageData(LOCAL_STORAGE_VALUES_KEY)
    return storageData
      ? storageData
      : {
          serverUrl: '',
          phoneNumber: '',
        }
  })

  const { serverUrl, phoneNumber } = data

  React.useEffect(() => {
    setLocalStorageData(LOCAL_STORAGE_VALUES_KEY, data)
  }, [data])

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setData({
      ...data,
      phoneNumber: event.target.value,
    })
  }

  const handleServerUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setData({
      ...data,
      serverUrl: event.target.value,
    })
  }

  return (
    <div className="w-full bg-[#fafafa]">
      <div className="max-w-screen-lg mx-auto h-[60px] flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex gap-2">
          <h1 className="text-lg font-medium text-[#333333]">
            IRLINK WEB SAMPLE
          </h1>

          <span className="text-xs text-[#777777]">Socket.io Client v2</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-2">
          {String(createDeviceState) === CreateDeviceState.PAIRED && (
            <WindowBlock ocx={ocx} />
          )}

          {/* 서버 URL */}
          <Input
            placeholder="Server URL"
            value={serverUrl}
            onChange={(event) => handleServerUrlChange(event)}
            disabled={String(createDeviceState) === CreateDeviceState.PAIRED}
          ></Input>

          {/* 법인폰 번호 */}
          <Input
            placeholder="01099990000"
            value={phoneNumber}
            onChange={(event) => handlePhoneNumberChange(event)}
            disabled={String(createDeviceState) === CreateDeviceState.PAIRED}
          ></Input>

          {/* Connect & Disconnect Buttons */}
          {String(createDeviceState) === CreateDeviceState.PAIRED ? (
            <SolidButton onClick={() => closeDevice()}>Disconnect</SolidButton>
          ) : (
            <OutlineButton onClick={() => createDevice(serverUrl, phoneNumber)}>
              Connect
            </OutlineButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConnectionPanel

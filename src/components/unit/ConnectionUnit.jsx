import { useContext, useEffect, useState } from 'react'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import useOcxMethods from '@/hooks/useOcxMethods'
import useLocalStorage from '@/hooks/useLocalStorage'
import { CreateDeviceState } from '@/types/OcxState'
import { Style } from '@/enums/Style'

const ConnectionUnit = ({ ocx }) => {
  const { createDeviceState } = useContext(OcxStateContext)
  const { createDevice, closeDevice } = useOcxMethods(ocx)
  const { getLocalStorageData, setLocalStorageData } = useLocalStorage()

  const LOCAL_STORAGE_CONNECTION_UNIT_DATA = 'WEBSAMPLE:CONNECTION_UNIT:DATA'
  const IS_PAIRED = String(createDeviceState) === CreateDeviceState.PAIRED
  const INPUT_STYLE = Style.INPUT + `${IS_PAIRED && 'cursor-not-allowed'}`

  const [data, setData] = useState(() => {
    const data = getLocalStorageData(LOCAL_STORAGE_CONNECTION_UNIT_DATA)
    return data ? data : { serverUrl: '', phoneNumber: '' }
  })

  useEffect(() => {
    setLocalStorageData(LOCAL_STORAGE_CONNECTION_UNIT_DATA, data)
  }, [data])

  const { serverUrl, phoneNumber } = data

  const onPhoneNumberChange = (event) =>
    setData({ ...data, phoneNumber: event.target.value })

  const onServerUrlChange = (event) =>
    setData({ ...data, serverUrl: event.target.value })

  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        placeholder="Server URL"
        value={serverUrl}
        onChange={(event) => onServerUrlChange(event)}
        className={INPUT_STYLE + ''}
        disabled={IS_PAIRED}
      ></input>
      <input
        placeholder="01099990000"
        value={phoneNumber}
        onChange={(event) => onPhoneNumberChange(event)}
        className={INPUT_STYLE + ''}
        disabled={IS_PAIRED}
      ></input>

      {IS_PAIRED ? (
        <button className={Style.SOLID_BUTTON} onClick={() => closeDevice()}>
          Disconnect
        </button>
      ) : (
        <button
          className={Style.OUTLINE_BUTTON}
          onClick={() => createDevice(serverUrl, phoneNumber)}
        >
          Connect
        </button>
      )}
    </div>
  )
}

export default ConnectionUnit

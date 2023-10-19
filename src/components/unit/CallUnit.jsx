import { OcxStateContext } from '@/contexts/OcxStateContext'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import useLocalStorage from '@/hooks/useLocalStorage'
import useOcxMethods from '@/hooks/useOcxMethods'
import { BellState, CallState } from '@/types/OcxState'
import { Call, CallEnd, PhoneCallback } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react'
import { InputStyles } from '@/enums/styles/InputStyles'

const CallUnit = ({ ocx }) => {
  const { callState, bellState } = useContext(OcxStateContext)
  const { setDialStr, setHookMode } = useOcxMethods(ocx)
  const { getLocalStorageData, setLocalStorageData } = useLocalStorage()

  const LOCAL_STORAGE_CALL_UNIT_DATA = 'WEBSAMPLE:CALL_UNIT:DATA'

  const [data, setData] = useState(() => {
    const data = getLocalStorageData(LOCAL_STORAGE_CALL_UNIT_DATA)
    return data ? data : { phoneNumber: '' }
  })

  useEffect(() => {
    setLocalStorageData(LOCAL_STORAGE_CALL_UNIT_DATA, data)
  }, [data])

  const { phoneNumber } = data

  const onPhoneNumberChange = (event) =>
    setData({ ...data, phoneNumber: event.target.value })

  return (
    <div className="w-full flex flex-col gap-2 p-5 bg-white">
      <input
        placeholder="고객 전화번호"
        className={InputStyles.PRELINE_BASIC}
        value={phoneNumber}
        onChange={(event) => onPhoneNumberChange(event)}
      ></input>

      {/* Hook Off */}
      <div
        className={`
          w-full ${
            String(callState) === CallState.CONNECTED ||
            String(callState) === CallState.OUTBOUND
              ? 'hidden'
              : ''
          }`}
      >
        {String(bellState) === BellState.RINGING ? (
          <button
            className={ButtonStyles.PRELINE_SOLID + 'w-full'}
            onClick={() => setHookMode(3)}
          >
            <PhoneCallback sx={{ width: '20px', height: '20px' }} /> 전화 받기
          </button>
        ) : (
          <button
            className={ButtonStyles.PRELINE_SOLID + 'w-full'}
            onClick={() => setDialStr(phoneNumber)}
          >
            <Call sx={{ width: '20px', height: '20px' }} /> 전화 걸기
          </button>
        )}
      </div>

      {/* Hook On */}
      <div className={String(callState) === CallState.IDLE ? 'hidden' : ''}>
        {String(bellState) === BellState.RINGING ? (
          <button
            className={ButtonStyles.PRELINE_SOFT + 'w-full'}
            onClick={() => setHookMode(1)}
          >
            <CallEnd sx={{ width: '20px', height: '20px' }} /> 전화 거절
          </button>
        ) : (
          <button
            className={ButtonStyles.PRELINE_SOFT + 'w-full'}
            onClick={() => setHookMode(1)}
          >
            <CallEnd sx={{ width: '20px', height: '20px' }} /> 전화 끊기
          </button>
        )}
      </div>
    </div>
  )
}

export default CallUnit

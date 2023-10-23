import { OcxStateContext } from '@/contexts/OcxStateContext'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import useOcxMethods from '@/hooks/useOcxMethods'
import { BellState, CallState } from '@/enums/OcxState'
import { Call, CallEnd, PhoneCallback } from '@mui/icons-material'
import { useContext } from 'react'
import { InputStyles } from '@/enums/styles/InputStyles'
import useInput from '@/hooks/useInput'

const CallUnit = ({ ocx }) => {
  const { callState, bellState } = useContext(OcxStateContext)
  const { setDialStr, setHookMode } = useOcxMethods(ocx)

  const { data, onChange } = useInput({
    phoneNumber: '',
  }, 'WEB_SAMPLE_CALL_UNIT_DATA')

  return (
    <>
      <input
        placeholder="고객 전화번호"
        className={InputStyles.PRELINE_BASIC}
        name="phoneNumber"
        value={data.phoneNumber}
        onChange={onChange}
      ></input>

      <div
        className={`
          w-full ${
          callState === CallState.CONNECTED ||
          callState === CallState.OUTBOUND
            ? 'hidden'
            : ''
        }`}
      >
        {bellState === BellState.RINGING ? (
          <button
            className={ButtonStyles.PRELINE_SOLID + 'w-full'}
            onClick={() => setHookMode(3)}
          >
            <PhoneCallback sx={{ width: '20px', height: '20px' }} /> 전화 받기
          </button>
        ) : (
          <button
            className={ButtonStyles.PRELINE_SOLID + 'w-full'}
            onClick={() => setDialStr(data.phoneNumber)}
          >
            <Call sx={{ width: '20px', height: '20px' }} /> 전화 걸기
          </button>
        )}
      </div>

      <div className={callState === CallState.IDLE ? 'hidden' : ''}>
        {bellState === BellState.RINGING ? (
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
    </>
  )
}

export default CallUnit

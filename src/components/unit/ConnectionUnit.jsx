import { useContext } from 'react'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import useOcxMethods from '@/hooks/useOcxMethods'
import { CreateDeviceState } from '@/enums/OcxState'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import { InputStyles } from '@/enums/styles/InputStyles'
import useInput from '@/hooks/useInput'
import { useOcx } from '@/hooks/useOcx'
import useSocketMethods from '@/hooks/useSocketMethods'
import { SettingsContext } from '@/contexts/SettingsContext'

const ConnectionUnit = () => {
  const { ocx } = useOcx()
  const { createDeviceState } = useContext(OcxStateContext)
  const { settings } = useContext(SettingsContext)
  const { createDevice, closeDevice } = useOcxMethods(ocx)
  const { emitCreateDevice, emitCloseDevice } = useSocketMethods()

  const { data, onChange } = useInput(
    {
      serverUrl: '',
      phoneNumber: '',
    },
    'WEB_SAMPLE_CONNECTION_UNIT_DATA',
  )

  const IS_PAIRED = createDeviceState === CreateDeviceState.PAIRED
  const INPUT_STYLE =
    InputStyles.PRELINE_BASIC + `${IS_PAIRED && 'cursor-not-allowed'}`

  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        placeholder="서버 URL"
        value={data.serverUrl}
        name="serverUrl"
        onChange={onChange}
        className={INPUT_STYLE + ''}
        disabled={IS_PAIRED}
      ></input>
      <input
        placeholder="법인폰 번호"
        value={data.phoneNumber}
        name="phoneNumber"
        onChange={onChange}
        className={INPUT_STYLE + ''}
        disabled={IS_PAIRED}
      ></input>

      {IS_PAIRED ? (
        <button
          type="button"
          className={ButtonStyles.PRELINE_SOLID}
          onClick={() =>
            settings.USE_ENGINE_IO_V3 ? emitCloseDevice() : closeDevice()
          }
        >
          CLOSE_DEVICE
        </button>
      ) : (
        <button
          type="button"
          className={ButtonStyles.PRELINE_OUTLINE}
          onClick={() =>
            settings.USE_ENGINE_IO_V3
              ? emitCreateDevice(data.serverUrl, data.phoneNumber)
              : createDevice(data.serverUrl, data.phoneNumber)
          }
        >
          CREATE_DEVICE
        </button>
      )}
    </div>
  )
}

export default ConnectionUnit

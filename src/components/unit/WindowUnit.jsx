import useOcxMethods from '@/hooks/useOcxMethods'
import { useContext } from 'react'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import { CreateDeviceState } from '@/enums/OcxState'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import { useOcx } from '@/hooks/useOcx'

const WindowUnit = () => {
  const { ocx } = useOcx()
  const { createDeviceState } = useContext(OcxStateContext)
  const { setUserInput } = useOcxMethods(ocx)

  const IS_PAIRED = createDeviceState === CreateDeviceState.PAIRED

  return (
    <div className="w-full">
      {IS_PAIRED && (
        <div className="grid grid-cols-2 gap-2">
          <button
            className={ButtonStyles.PRELINE_OUTLINE}
            onClick={() => setUserInput(0)}
          >
            상판 막기
          </button>
          <button
            className={ButtonStyles.PRELINE_OUTLINE}
            onClick={() => setUserInput(1)}
          >
            상판 해제
          </button>
        </div>
      )}
    </div>
  )
}

export default WindowUnit

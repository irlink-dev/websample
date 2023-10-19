import useOcxMethods from '@/hooks/useOcxMethods'
import { useContext } from 'react'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import { CreateDeviceState } from '@/types/OcxState'
import { Style } from '@/enums/Style'

const WindowBlock = ({ ocx }) => {
  const { setUserInput } = useOcxMethods(ocx)
  const { createDeviceState } = useContext(OcxStateContext)

  const IS_PAIRED = String(createDeviceState) === CreateDeviceState.PAIRED

  return (
    <div className="w-full">
      {IS_PAIRED && (
        <div className="flex flex-row gap-2">
          <button
            className={Style.OUTLINE_BUTTON + 'w-1/2'}
            onClick={() => setUserInput(0)}
          >
            상판 막기
          </button>
          <button
            className={Style.OUTLINE_BUTTON + 'w-1/2'}
            onClick={() => setUserInput(1)}
          >
            상판 해제
          </button>
        </div>
      )}
    </div>
  )
}

export default WindowBlock

import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import useOcxMethods from '@/hooks/useOcxMethods'

const DeviceUnit = ({ ocx }) => {
  const { setSelectDevice } = useOcxMethods(ocx)

  return (
    <>
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => setSelectDevice(0)}
      >
        휴대폰 사용
      </button>

      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => setSelectDevice(1)}
      >
        지멘스 사용
      </button>
    </>
  )
}

export default DeviceUnit

import useOcxMethods from '@/hooks/useOcxMethods'
import { Headphones, HeadphonesOutlined } from '@mui/icons-material'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'

const HeadsetUnit = ({ ocx }) => {
  const { getBatteryInfoHeadset, getStateHeadset } = useOcxMethods(ocx)

  return (
    <>
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => getBatteryInfoHeadset()}
      >
        <Headphones /> GET_BATTERY_INFO_HEADSET
      </button>

      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => getStateHeadset()}
      >
        <HeadphonesOutlined /> GET_STATE_HEADSET
      </button>
    </>
  )
}

export default HeadsetUnit

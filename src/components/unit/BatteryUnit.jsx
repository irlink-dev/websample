import useOcxMethods from '@/hooks/useOcxMethods'
import { Battery80, BatteryCharging80 } from '@mui/icons-material'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'

const BatteryUnit = ({ ocx }) => {
  const { getBatteryInfo, getBatteryState } = useOcxMethods(ocx)

  return (
    <>
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => getBatteryInfo()}
      >
        <Battery80 /> GET_BATTERY_INFO
      </button>

      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => getBatteryState()}
      >
        <BatteryCharging80 /> GET_BATTERY_STATE
      </button>
    </>
  )
}

export default BatteryUnit

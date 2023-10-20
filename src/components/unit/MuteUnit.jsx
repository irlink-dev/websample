import { MuteState } from '@/types/OcxState'
import useOcxMethods from '@/hooks/useOcxMethods'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import { useContext } from 'react'
import { Mic, MicOff } from '@mui/icons-material'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'

const MuteUnit = ({ ocx }) => {
  const { muteState } = useContext(OcxStateContext)
  const { setMicMute } = useOcxMethods(ocx)

  return (
    <>
      {String(muteState) === MuteState.MIC_ON ? (
        <button
          className={ButtonStyles.PRELINE_SOFT}
          onClick={() => setMicMute(Number(MuteState.MIC_OFF))}
        >
          <Mic /> MUTE OFF
        </button>
      ) : (
        <button
          className={ButtonStyles.PRELINE_SOLID}
          onClick={() => setMicMute(Number(MuteState.MIC_ON))}
        >
          <MicOff /> MUTE ON
        </button>
      )}
    </>
  )
}

export default MuteUnit

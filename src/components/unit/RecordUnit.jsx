import useOcxMethods from '@/hooks/useOcxMethods'
import { FiberManualRecord, Pause, PlayArrow, Stop } from '@mui/icons-material'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import { useOcx } from '@/hooks/useOcx'

const RecordUnit = () => {
  const { ocx } = useOcx()
  const { setRecPartial, pauseRecording, resumeRecording } = useOcxMethods(ocx)

  return (
    <>
      {/* 부분 녹취 시작 */}
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => setRecPartial(1, 'fileName')}
      >
        <FiberManualRecord /> START
      </button>

      {/* 부분 녹취 종료 */}
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => setRecPartial(0, 'filename')}
      >
        <Stop /> STOP
      </button>

      {/* 녹취 일시중지 */}
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => pauseRecording()}
      >
        <Pause /> PAUSE
      </button>

      {/* 녹취 재개 */}
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => resumeRecording()}
      >
        <PlayArrow /> RESUME
      </button>
    </>
  )
}

export default RecordUnit

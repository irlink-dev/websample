import { useState } from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import { FiberManualRecord, Pause, PlayArrow, Stop } from '@mui/icons-material'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'

const RecordUnit = ({ ocx }) => {
  const { setRecPartial, pauseRecording, resumeRecording } = useOcxMethods(ocx)
  const [currentFileName, setCurrentFileName] = useState('')

  const generateFileName = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    
    return `${year}${month}${day}_${hours}${minutes}${seconds}_copy`
  }

  const startRecPartial = () => {
    const fileName = generateFileName()
    setCurrentFileName(fileName)
    setRecPartial(1, fileName)
  }

  const endRecPartial = () => {
    if (currentFileName) {
      setRecPartial(0, currentFileName)
    }
  }

  return (
    <>
      {/* 부분 녹취 시작 */}
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={startRecPartial}
      >
        <FiberManualRecord /> START
      </button>

      {/* 부분 녹취 종료 */}
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={endRecPartial}
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

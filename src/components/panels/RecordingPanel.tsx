import useOcxMethods from '@/hooks/useOcxMethods'
import Button from '@/components/flowbite/Button'
import {
    CloudUpload,
    FiberManualRecord,
    NotStarted,
    Pause,
    PauseCircle,
    PhonePaused,
    Publish,
    QueueMusic,
    RadioButtonChecked,
    Stop,
    Storage
} from '@mui/icons-material'
import { Paper } from '@mui/material'

interface RecordingPanelProps {
    ocx: any
}

const RecordingPanel = ({ ocx }: RecordingPanelProps) => {

    const {
        getSavePath,
        getFileList,
        setUploadFile,
        setRecPartial,
        pauseRecording,
        resumeRecording
    } = useOcxMethods(ocx)

    return (
        <Paper sx={{ height: 260, p: 2 }}>
            <h1>녹취 기능</h1>

            {/* 녹취 서버 정보 */}
            <Button
                variant="alternative"
                onClick={() => getSavePath()}
            >
                <Storage />
            </Button>

            {/* 녹취 리스트 확인 */}
            <Button
                variant="alternative"
                onClick={() => getFileList()}
            >
                <QueueMusic />
            </Button>

            {/* 녹취 서버 전송 */}
            <Button
                variant="alternative"
                onClick={() => setUploadFile('0108318615020230622165952.amr', '0108318615020230622165952.amr', 'http://192.168.1.175:8080/httpup/RefHome.jsp', 'rec')}
            >
                {/*<CloudUpload />*/}
                <Publish />
            </Button>

            {/* 부분 녹취 시작 */}
            <Button
                variant="alternative"
                onClick={() => setRecPartial(1, 'fileName')}
            >
                <FiberManualRecord />
            </Button>

            {/* 부분 녹취 종료 */}
            <Button
                variant="alternative"
                onClick={() => setRecPartial(0, 'filename')}
            >
                <Stop />
            </Button>

            {/* 녹취 일시중지 */}
            <Button
                variant="alternative"
                onClick={() => pauseRecording()}
            >
                {/*<PhonePaused />*/}
                {/*<PauseCircle />*/}
                <Pause />
            </Button>

            {/* 녹취 재개 */}
            <Button
                variant="alternative"
                onClick={() => resumeRecording()}
            >
                {/*<RadioButtonChecked />*/}
                {/*<NotStarted />*/}
                <FiberManualRecord />
            </Button>
        </Paper>
    )
}

export default RecordingPanel
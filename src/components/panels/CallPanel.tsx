import useOcxMethods from '@/hooks/useOcxMethods'
import Button from '@/components/flowbite/Button'
import {
    Call,
    CallEnd,
    Mic,
    MicOff,
    PhoneCallback,
    PhoneDisabled,
    PhoneEnabled,
    PhoneInTalk,
    VolumeDown,
    VolumeUp
} from '@mui/icons-material'
import { Paper } from '@mui/material'

interface CallPanelProps {
    ocx: any
}

const CallPanel = ({ ocx }: CallPanelProps) => {

    const {
        setDialStr,
        setHookMode,
        getCallState,
        getVolume,
        getMaxVolume,
        setMicMute,
        setVolume,
        setDnd
    } = useOcxMethods(ocx)

    return (
        <Paper sx={{ height: 260, p: 2 }}>
            <h1>전화 기능</h1>

            {/* 전화 걸기 */}
            <Button
                variant="green"
                onClick={() => setDialStr('01052844463')}
            >
                <Call />
            </Button>

            {/* 전화 끊기 */}
            <Button
                variant="red"
                onClick={() => setHookMode(1)}
            >
                <CallEnd />
            </Button>

            {/* 전화 받기 */}
            <Button
                variant="green"
                onClick={() => setHookMode(3)}
            >
                <PhoneCallback />
                {/*<PhoneInTalk />*/}
            </Button>

            <h1>통화 기능</h1>

            {/* 통화 상태 확인 */}
            <Button
                variant="alternative"
                onClick={() => getCallState()}
            >
                통화 상태 확인
            </Button>

            {/* 통화 볼륨 확인 */}
            <Button
                variant="alternative"
                onClick={() => getVolume()}
            >
                통화 볼륨 확인
            </Button>

            {/* 최대 통화 볼륨 확인 */}
            <Button
                variant="alternative"
                onClick={() => getMaxVolume()}
            >
                최대 통화 볼륨 확인
            </Button>

            {/* 음소거 */}
            <Button
                variant="alternative"
                onClick={() => setMicMute(1)}
            >
                <MicOff />
            </Button>

            {/* 음소거 해제 */}
            <Button
                variant="alternative"
                onClick={() => setMicMute(0)}
            >
                <Mic />
            </Button>

            {/* 통화 볼륨 설정 */}
            <Button
                variant="alternative"
                onClick={() => setVolume(1)}
            >
                <VolumeUp />
                {/*<VolumeDown />*/}
            </Button>

            {/* 통화 가능 여부 확인 */}
            <Button
                variant="alternative"
                // onClick={() => checkAvailableCall()}
                // onClick={() => getAvailableCall()}
            >
                통화 가능 여부 확인
            </Button>

            {/* 착신 금지 */}
            <Button
                variant="alternative"
                onClick={() => setDnd(1)}
            >
                <PhoneDisabled />
            </Button>

            {/* 착신 금지 해제 */}
            <Button
                variant="alternative"
                onClick={() => setDnd(0)}
            >
                <PhoneEnabled />
            </Button>
        </Paper>
    )
}

export default CallPanel
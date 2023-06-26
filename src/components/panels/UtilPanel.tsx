import useOcxMethods from '@/hooks/useOcxMethods'
import Button from '@/components/flowbite/Button'
import { Battery80, BatteryCharging80, More } from '@mui/icons-material'
import { Paper } from '@mui/material'

interface UtilPanelProps {
    ocx: any
}

const UtilPanel = ({ ocx }: UtilPanelProps) => {

    const {
        getBatteryInfo,
        getBatteryState,
        setExtra,
        setSelectDevice,
    } = useOcxMethods(ocx)

    return (
        <Paper sx={{ height: 260, p: 2 }}>
            <h1>기타 제어</h1>

            {/* 배터리 정보 */}
            <Button
                variant="alternative"
                onClick={() => getBatteryInfo()}
            >
                <Battery80 />
            </Button>

            {/* 배터리 충전 상태 */}
            <Button
                variant="alternative"
                onClick={() => getBatteryState()}
            >
                <BatteryCharging80 />
            </Button>

            {/* 기타 정보 설정 */}
            <Button
                variant="alternative"
                onClick={() => setExtra('test|테스트|123')}
            >
                <More />
            </Button>

            <h1>단말 선택</h1>

            <Button
                variant="alternative"
                onClick={() => setSelectDevice(0)}
            >
                휴대폰 사용
            </Button>

            <Button
                variant="alternative"
                onClick={() => setSelectDevice(1)}
            >
                지멘스 사용
            </Button>
        </Paper>
    )
}

export default UtilPanel
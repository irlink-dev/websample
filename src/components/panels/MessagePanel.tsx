import useOcxMethods from '@/hooks/useOcxMethods'
import Button from '@/components/flowbite/Button'
import { AllInbox, Send } from '@mui/icons-material'
import { Paper } from '@mui/material'

interface MessagePanelProps {
    ocx: any
}

const MessagePanel = ({ ocx }: MessagePanelProps) => {

    const {
        sendMessageExt,
        getMessageCount
    } = useOcxMethods(ocx)

    return (
        <Paper sx={{ p: 2 }}>
            <h3 className="font-semibold mb-4">메시지 패널</h3>

            {/* 문자 발신 */}
            <Button
                variant="alternative"
                onClick={() => sendMessageExt('01052844463,01028746064', 'message', '1^url,2^url')}
            >
                <Send />
            </Button>

            {/* 문자 발송 건수 조회 */}
            <Button
                variant="alternative"
                onClick={() => getMessageCount()}
            >
                <AllInbox />
            </Button>
        </Paper>
    )
}

export default MessagePanel
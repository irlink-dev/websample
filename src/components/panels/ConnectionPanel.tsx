import * as React from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import Button from '@/components/flowbite/Button'
import Input from '@/components/flowbite/Input'
import { MobileOff, PhoneAndroid, PhonelinkErase, PhonelinkLock } from '@mui/icons-material'
import { Paper, Typography } from '@mui/material'

interface ConnectionPanelProps {
    ocx: any
}

const ConnectionPanel = ({ ocx }: ConnectionPanelProps) => {

    const {
        createDevice,
        closeDevice,
        setUserInput
    } = useOcxMethods(ocx)

    const [serverUrl, setServerUrl] = React.useState('https://192.168.1.175:3001/')
    const [phoneNumber, setPhoneNumber] = React.useState('01028746064')

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(() => event.target.value)
    }

    const handleServerUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setServerUrl(() => event.target.value)
    }

    return (
        <Paper sx={{ height: 260, p: 2 }}>

            <Typography>법인폰 제어 (연결 기능)</Typography>

            <Input
                className="mt-4 mb-2"
                placeholder="서버 URL"
                value={serverUrl}
                onChange={(event) => handleServerUrlChange(event)} />

            <div className="flex w-full gap-2">

                {/* 법인폰 번호 입력 */}
                <Input
                    className="mb-2"
                    placeholder="법인폰 번호"
                    value={phoneNumber}
                    onChange={(event) => handlePhoneNumberChange(event)} />

                <div className="">

                    {/* 법인폰 연결 */}
                    <Button
                        variant="primary"
                        className="mr-1"
                        onClick={() => createDevice(serverUrl, phoneNumber)}
                    >
                        <PhoneAndroid />
                    </Button>

                    {/* 법인폰 연결 해제 */}
                    <Button
                        variant="alternative"
                        onClick={() => closeDevice()}
                    >
                        <MobileOff />
                    </Button>
                </div>
            </div>

            <div className="">

                {/* 사용자 입력 차단 */}
                <Button
                    variant="primary"
                    className="mr-1"
                    onClick={() => setUserInput(0)}
                >
                    <PhonelinkLock />
                </Button>

                {/* 사용자 입력 차단 해제 */}
                <Button
                    variant="alternative"
                    onClick={() => setUserInput(1)}
                >
                    <PhonelinkErase />
                </Button>
            </div>

        </Paper>
    )
}

export default ConnectionPanel
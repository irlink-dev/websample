import * as React from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import useLocalStorage from '@/hooks/useLocalStorage'
import Button from '@/components/flowbite/Button'
import Input from '@/components/flowbite/Input'
import Card from '@/components/flowbite/Card'
import { BellState, CallState, DndState, MuteState } from '@/types/OcxState'
import { OcxStateContext } from '@/components/context/OcxStateContext'
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

const LOCAL_STORAGE_VALUES_KEY = `ir_web_sample:call_panel:values`

interface CallPanelProps {
    ocx: any
}

interface CallPanelData {
    phoneNumber: string
}

const CallPanel = ({ ocx }: CallPanelProps) => {

    const {
        callState,
        bellState,
        muteState,
        dndState
    } = React.useContext(OcxStateContext)

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

    const {
        getLocalStorageData,
        setLocalStorageData
    } = useLocalStorage()

    const [data, setData] = React.useState<CallPanelData>(() => {
        const storageData = getLocalStorageData(LOCAL_STORAGE_VALUES_KEY)
        return storageData ? storageData : {
            phoneNumber: ''
        }
    })

    const { phoneNumber } = data

    React.useEffect(() => {
        setLocalStorageData(LOCAL_STORAGE_VALUES_KEY, data)
    }, [data])

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            phoneNumber: event.target.value
        })
    }

    return (
        <>
            <Card className="flex gap-2 w-full mb-5">

                {/* DND Enable & Disable */}
                {String(dndState) === DndState.DND_ON ? (
                    <Button
                        variant="dark"
                        className="w-12"
                        onClick={() => setDnd(0)}
                    >
                        <PhoneDisabled sx={{ width: '20px', height: '20px' }} />{' '}
                    </Button>
                ) : (
                    <Button
                        variant="light"
                        className="w-12"
                        onClick={() => setDnd(1)}
                    >
                        <PhoneEnabled sx={{ width: '20px', height: '20px', color: '#777777' }} />{' '}
                    </Button>
                )}

                {/* Mute & Unmute */}
                {String(muteState) === MuteState.MIC_ON ? (
                    <Button
                        variant="light"
                        className="w-12"
                        onClick={() => setMicMute(Number(MuteState.MIC_OFF))}
                    >
                        <Mic sx={{ color: '#777777' }} />
                    </Button>
                ) : (
                    <Button
                        variant="dark"
                        className="w-12"
                        onClick={() => setMicMute(Number(MuteState.MIC_ON))}
                    >
                        <MicOff />
                    </Button>
                )}

                {/* Customer Phone Number Input Field */}
                <Input
                    placeholder="고객 전화번호"
                    value={phoneNumber}
                    onChange={(event) => handlePhoneNumberChange(event)}
                />

                {/* Hook Off */}
                <div
                    className={
                        String(callState) === CallState.CONNECTED ||
                        String(callState) === CallState.OUTBOUND ? 'hidden' : ''
                    }
                >
                    {String(bellState) === BellState.RINGING ? (
                        <Button
                            variant="green"
                            onClick={() => setHookMode(3)}
                        >
                            <PhoneCallback sx={{ width: '20px', height: '20px' }} />{' '}
                            전화 받기
                        </Button>
                    ) : (
                        <Button
                            variant="green"
                            onClick={() => setDialStr(phoneNumber)}
                        >
                            <Call sx={{ width: '20px', height: '20px' }} />{' '}
                            전화 걸기
                        </Button>
                    )}
                </div>

                {/* Hook On */}
                <div className={String(callState) === CallState.IDLE ? 'hidden' : ''}>
                    {String(bellState) === BellState.RINGING ? (
                        <Button
                            variant="red"
                            onClick={() => setHookMode(1)}
                        >
                            <CallEnd sx={{ width: '20px', height: '20px' }} />{' '}
                            전화 거절
                        </Button>
                    ) : (
                        <Button
                            variant="red"
                            onClick={() => setHookMode(1)}
                        >
                            <CallEnd sx={{ width: '20px', height: '20px' }} />{' '}
                            전화 끊기
                        </Button>
                    )}
                </div>

                {/* Get Call Active Status */}
                <Button
                    variant="alternative"
                    onClick={() => getCallState()}
                >
                    활성 상태 확인
                </Button>

                {/* Get Volume */}
                <Button
                    variant="alternative"
                    onClick={() => getVolume()}
                >
                    볼륨 확인
                </Button>

                {/* Get Max Volume */}
                <Button
                    variant="alternative"
                    onClick={() => getMaxVolume()}
                >
                    최대 볼륨 확인
                </Button>

            </Card>


            {/* Set Volume */}
            <Button
                variant="alternative"
                onClick={() => setVolume(1)}
            >
                <VolumeUp />
                {/*<VolumeDown />*/}
            </Button>

            {/* Check Call Availability */}
            <Button
                variant="alternative"
                // onClick={() => checkAvailableCall()}
                // onClick={() => getAvailableCall()}
            >
                통화 가능 여부 확인
            </Button>

        </>
    )
}

export default CallPanel
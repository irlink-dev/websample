import * as React from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import useLocalStorage from '@/hooks/useLocalStorage'
import Button from '@/components/flowbite/Button'
import Input from '@/components/flowbite/Input'

const LOCAL_STORAGE_VALUES_KEY = `irwebsample:values`

interface ConnectionPanelProps {
    ocx: any
}

interface ConnectionPanelData {
    serverUrl: string
    phoneNumber: string
}

const ConnectionPanel = ({ ocx }: ConnectionPanelProps) => {

    const {
        createDevice,
        closeDevice,
        setUserInput
    } = useOcxMethods(ocx)

    const {
        getLocalStorageData,
        setLocalStorageData
    } = useLocalStorage()

    const [data, setData] = React.useState<ConnectionPanelData>(() => {
        const storageData = getLocalStorageData(LOCAL_STORAGE_VALUES_KEY)
        return storageData ? storageData : {
            serverUrl: 'https://192.168.1.175:3001/',
            phoneNumber: '01028746064'
        }
    })

    const { serverUrl, phoneNumber } = data

    React.useEffect(() => {
        setLocalStorageData(LOCAL_STORAGE_VALUES_KEY, data)
    }, [data])

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            phoneNumber: event.target.value
        })
    }

    const handleServerUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            serverUrl: event.target.value
        })
    }

    return (
        <div className="w-full bg-[#fafafa]">
            <div className="max-w-screen-lg mx-auto h-[60px] flex items-center justify-between">
                <div className="flex gap-2">
                    <h1 className="text-lg font-medium text-[#333333]">IRLINK WEB SAMPLE</h1>
                    <span className="text-xs text-[#777777]">Socket.io Client v2</span>
                </div>
                <div className="flex gap-2">
                    <Input
                        className="bg-white"
                        width={52}
                        placeholder="서버 URL"
                        value={serverUrl}
                        onChange={(event) => handleServerUrlChange(event)}
                    />
                    <Input
                        className="bg-white"
                        placeholder="법인폰 번호"
                        value={phoneNumber}
                        onChange={(event) => handlePhoneNumberChange(event)}
                    />
                    <Button
                        variant="primary"
                        className="py-2"
                        onClick={() => createDevice(serverUrl, phoneNumber)}
                    >
                        연결
                    </Button>
                    <Button
                        variant="alternative"
                        className="py-2"
                        onClick={() => closeDevice()}
                    >
                        연결 해제
                    </Button>
                </div>
            </div>

            {/*<div className="flex mt-2 items-center">*/}

            {/*    <Typography sx={{ mr: 1 }}>사용자 입력 차단</Typography>*/}

            {/*    /!* 사용자 입력 차단 *!/*/}
            {/*    <Button*/}
            {/*        variant="primary"*/}
            {/*        className="mr-1"*/}
            {/*        onClick={() => setUserInput(0)}*/}
            {/*    >*/}
            {/*        <PhonelinkLock />*/}
            {/*    </Button>*/}

            {/*    /!* 사용자 입력 차단 해제 *!/*/}
            {/*    <Button*/}
            {/*        variant="alternative"*/}
            {/*        onClick={() => setUserInput(1)}*/}
            {/*    >*/}
            {/*        <PhonelinkErase />*/}
            {/*    </Button>*/}
            {/*</div>*/}

        </div>
    )
}

export default ConnectionPanel
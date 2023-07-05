import * as React from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import useLocalStorage from '@/hooks/useLocalStorage'
import Button from '@/components/flowbite/Button'
import Input from '@/components/flowbite/Input'
import { OcxStateContext } from '@/components/context/OcxStateContext'
import { CreateDeviceState } from '@/types/OcxState'
import { PhonelinkErase, PhonelinkLock } from '@mui/icons-material'

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
        createDeviceState
    } = React.useContext(OcxStateContext)

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
            serverUrl: '',
            phoneNumber: ''
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

                {/* LEFT SIDE */}
                <div className="flex gap-2">

                    <h1 className="text-lg font-medium text-[#333333]">
                        IRLINK WEB SAMPLE
                    </h1>

                    <span className="text-xs text-[#777777]">
                        Socket.io Client v2
                    </span>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex gap-2">

                    {String(createDeviceState) === CreateDeviceState.PAIRED && (
                        <>
                            {/* Screen Block Enable */}
                            <Button
                                variant="alternative"
                                className=""
                                onClick={() => setUserInput(0)}
                            >
                                <PhonelinkLock sx={{ color: '#777777' }} />
                            </Button>

                            {/* Screen Block Disable */}
                            <Button
                                variant="light"
                                onClick={() => setUserInput(1)}
                            >
                                <PhonelinkErase sx={{ color: '#777777' }} />
                            </Button>
                        </>
                    )}

                    {/* Server URL Input Field */}
                    <Input
                        className={`bg-white ${String(createDeviceState) === CreateDeviceState.PAIRED && 'opacity-70 text-gray-500 cursor-not-allowed'}`}
                        width={52}
                        placeholder="서버 URL"
                        value={serverUrl}
                        onChange={(event) => handleServerUrlChange(event)}
                        disabled={String(createDeviceState) === CreateDeviceState.PAIRED}
                    />

                    {/* Phone Number Input Field */}
                    <Input
                        className={`bg-white ${String(createDeviceState) === CreateDeviceState.PAIRED && 'opacity-70 text-gray-500 cursor-not-allowed'}`}
                        placeholder="법인폰 번호"
                        value={phoneNumber}
                        onChange={(event) => handlePhoneNumberChange(event)}
                        disabled={String(createDeviceState) === CreateDeviceState.PAIRED}
                    />

                    {/* Connect & Disconnect Buttons */}
                    {String(createDeviceState) === CreateDeviceState.PAIRED ? (
                        <Button
                            variant="red"
                            className="w-24"
                            onClick={() => closeDevice()}
                        >
                            Disconnect
                        </Button>
                    ) : (
                        <Button
                            variant="green"
                            className="w-24"
                            onClick={() => createDevice(serverUrl, phoneNumber)}
                        >
                            Connect
                        </Button>
                    )}

                </div>

            </div>

        </div>

    )
}

export default ConnectionPanel
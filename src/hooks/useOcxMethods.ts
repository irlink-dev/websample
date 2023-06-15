const useOcxMethods = (ocx: any) => {

    const createDevice = (serverUrl: string, phoneNumber: string) => {
        ocx.CreateDevice(serverUrl, phoneNumber)
    }

    const closeDevice = () => {
        ocx.CloseDevice()
    }

    const setDialStr = (phoneNumber: string) => {
        ocx.SetDialStr(phoneNumber)
    }

    const setHookMode = (mode: number) => {
        ocx.SetHookMode(mode)
    }

    const getCallState = () => {
        ocx.GetCallState()
    }

    const getVolume = () => {
        ocx.GetVolume()
    }

    const checkAvailableCall = () => {
        ocx.CheckAvailableCall()
    }

    const setMicMute = (state: number) => {
        ocx.SetMicMute(state)
    }

    const setVolume = (volume: number) => {
        ocx.SetVolume(volume)
    }

    const getSavePath = () => {
        ocx.GetSavePath()
    }

    const setRecordFileName = (fileName: string) => {
        ocx.SetRecordFileName(fileName)
    }

    const sendMessageExt = (numbers: any, content: any, parts: any) => {
        ocx.SendMessageExt()
    }

    const getBatteryInfo = () => {
        ocx.GetBatteryInfo()
    }

    const setExtra = (values: string) => {
        ocx.SetExtra(values)
    }

    const setSelectDevice = (device: number) => {
        ocx.SetSelectDevice(device)
    }

    return {
        createDevice,
        closeDevice,
        setDialStr,
        setHookMode,
        getCallState,
        getVolume,
        checkAvailableCall,
        setMicMute,
        setVolume,
        getSavePath,
        setRecordFileName,
        sendMessageExt,
        getBatteryInfo,
        setExtra,
        setSelectDevice
    }
}

export default useOcxMethods
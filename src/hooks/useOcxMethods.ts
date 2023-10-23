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

  const getMaxVolume = () => {
    ocx.GetMaxVolume()
  }

  const checkAvailableCall = () => {
    ocx.CheckAvailableCall()
  }

  const getAvailableCall = () => {
    ocx.GetAvailableCall()
  }

  const setMicMute = (state: number) => {
    ocx.SetMicMute(state)
  }

  const setVolume = (volume: number) => {
    ocx.SetVolume(volume)
  }

  const setDnd = (state: number) => {
    ocx.SetDnd(state)
  }

  const getSavePath = () => {
    ocx.GetSavePath()
  }

  const setSavePath = (
    saveState: number,
    uploadUrl: string,
    uploadPath: string,
    isIncludeDate: number,
  ) => {
    ocx.SetSavePath(saveState, uploadUrl, uploadPath, isIncludeDate)
  }

  const getFileList = () => {
    ocx.GetFileList()
  }

  const setUploadFile = (
    localFileName: string,
    serverFileName: string,
    serverUrl: string,
    fileSavePath: string,
  ) => {
    ocx.SetUploadFile(localFileName, serverFileName, serverUrl, fileSavePath)
  }

  const setRecPartial = (nStartEnd: number, szFileName: string) => {
    ocx.SetRecPartial(nStartEnd, szFileName)
  }

  const pauseRecording = () => {
    ocx.PauseRecording()
  }

  const resumeRecording = () => {
    ocx.ResumeRecording()
  }

  const setRecordFileName = (fileName: string) => {
    ocx.SetRecordFileName(fileName)
  }

  const sendMessageExt = (
    remoteNumbers: string,
    content: string,
    parts: string,
  ) => {
    ocx.SendMessageExt(remoteNumbers, content, parts)
  }

  const getMessageCount = () => {
    ocx.GetMessageCount()
  }

  const getBatteryInfo = () => {
    ocx.GetBatteryInfo()
  }

  const getBatteryState = () => {
    ocx.GetBatteryState()
  }

  const setExtra = (values: string) => {
    ocx.SetExtra(values)
  }

  const setSelectDevice = (device: number) => {
    ocx.SetSelectDevice(device)
  }

  const setUserInput = (state: number) => {
    ocx.SetUserInput(state)
  }

  return {
    createDevice,
    closeDevice,
    setDialStr,
    setHookMode,
    getCallState,
    getVolume,
    getMaxVolume,
    checkAvailableCall,
    getAvailableCall,
    setMicMute,
    setVolume,
    setDnd,
    getSavePath,
    setSavePath,
    getFileList,
    setUploadFile,
    setRecPartial,
    pauseRecording,
    resumeRecording,
    setRecordFileName,
    sendMessageExt,
    getMessageCount,
    getBatteryInfo,
    getBatteryState,
    setExtra,
    setSelectDevice,
    setUserInput,
  }
}

export default useOcxMethods

/**
 * @todo console.log 상 Method Emoji: Ⓜ️
 */
const useOcxMethods = (ocx: any) => {
  const SHOULD_WRITE_LOG = false

  const createDevice = (serverUrl: string, phoneNumber: string) => {
    if (SHOULD_WRITE_LOG) {
      console.log(
        `🟥 [CreateDevice] serverUrl: ${serverUrl}, phoneNumber: ${phoneNumber}`,
      )
    }
    ocx.CreateDevice(serverUrl, phoneNumber)
  }

  const closeDevice = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [CloseDevice]`)
    }
    ocx.CloseDevice()
  }

  const setDialStr = (phoneNumber: string) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetDialStr] phoneNumber: ${phoneNumber}`)
    }
    ocx.SetDialStr(phoneNumber)
  }

  const setHookMode = (mode: number) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetHookMode] mode: ${mode}`)
    }
    ocx.SetHookMode(mode)
  }

  const getCallState = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetCallState]`)
    }
    ocx.GetCallState()
  }

  const getVolume = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetVolume]`)
    }
    ocx.GetVolume()
  }

  const getMaxVolume = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetMaxVolume]`)
    }
    ocx.GetMaxVolume()
  }

  const checkAvailableCall = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [CheckAvailableCall]`)
    }
    ocx.CheckAvailableCall()
  }

  const getAvailableCall = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetAvailableCall]`)
    }
    ocx.GetAvailableCall()
  }

  const setMicMute = (state: number) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetMicMute] state: ${state}`)
    }
    ocx.SetMicMute(state)
  }

  const setVolume = (volume: number) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetVolume] volume: ${volume}`)
    }
    ocx.SetVolume(volume)
  }

  const setDnd = (state: number) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetDnd] state: ${state}`)
    }
    ocx.SetDnd(state)
  }

  const getSavePath = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetSavePath]`)
    }
    ocx.GetSavePath()
  }

  const setSavePath = (
    saveState: number,
    uploadUrl: string,
    uploadPath: string,
    isIncludeDate: number,
  ) => {
    if (SHOULD_WRITE_LOG) {
      console.log(
        `🟥 [SetSavePath] saveState: ${saveState}, uploadUrl: ${uploadUrl}, uploadPath: ${uploadPath}, isIncludeDate: ${isIncludeDate}`,
      )
    }
    ocx.SetSavePath(saveState, uploadUrl, uploadPath, isIncludeDate)
  }

  const getFileList = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetFileList]`)
    }
    ocx.GetFileList()
  }

  const setUploadFile = (
    localFileName: string,
    serverFileName: string,
    serverUrl: string,
    fileSavePath: string,
  ) => {
    if (SHOULD_WRITE_LOG) {
      console.log(
        `🟥 [SetUploadFile] localFileName: ${localFileName}, serverFileName:${serverFileName}, serverUrl:${serverUrl}, fileSavePath:${fileSavePath}`,
      )
    }
    ocx.SetUploadFile(localFileName, serverFileName, serverUrl, fileSavePath)
  }

  const setRecPartial = (nStartEnd: number, szFileName: string) => {
    if (SHOULD_WRITE_LOG) {
      console.log(
        `🟥 [SetRecPartial] nStartEnd: ${nStartEnd}, szFileName: ${szFileName}`,
      )
    }
    ocx.SetRecPartial(nStartEnd, szFileName)
  }

  const pauseRecording = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [PauseRecording]`)
    }
    ocx.PauseRecording()
  }

  const resumeRecording = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [ResumeRecording]`)
    }
    ocx.ResumeRecording()
  }

  const setRecordFileName = (fileName: string) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetRecordFileName] fileName: ${fileName}`)
    }
    ocx.SetRecordFileName(fileName)
  }

  const sendMessageExt = (
    remoteNumbers: string,
    content: string,
    parts: string,
  ) => {
    if (SHOULD_WRITE_LOG) {
      console.log(
        `🟥 [SendMessageExt] remoteNumbers: ${remoteNumbers}, content: ${content}, parts: ${parts}`,
      )
    }
    ocx.SendMessageExt(remoteNumbers, content, parts)
  }

  const getMessageCount = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetMessageCount]`)
    }
    ocx.GetMessageCount()
  }

  const getBatteryInfo = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetBatteryInfo]`)
    }
    ocx.GetBatteryInfo()
  }

  const getBatteryState = () => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [GetBatteryState]`)
    }
    ocx.GetBatteryState()
  }

  const setExtra = (values: string) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetExtra] values: ${values}`)
    }
    ocx.SetExtra(values)
  }

  const setSelectDevice = (device: number) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetSelectDevice] device: ${device}`)
    }
    ocx.SetSelectDevice(device)
  }

  const setUserInput = (state: number) => {
    if (SHOULD_WRITE_LOG) {
      console.log(`🟥 [SetUserInput] state: ${state}`)
    }
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

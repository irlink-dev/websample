import { toCreateDeviceState } from '@/types/OcxState'

const useOcxEvents = (ocx: any, ocxStateContext: any) => {

    const {
        setCreateDeviceState
    } = ocxStateContext

    /**
     * 중계서버 연결, 연결 해제.
     */
    ocx.DevConnect = (nConnFlag: number) => {
        console.log(`[DevConnect] nConnFlag: ${nConnFlag} (${toCreateDeviceState(String(nConnFlag))})`)

        setCreateDeviceState(() => nConnFlag)
    }

    /**
     * 전화 걸기, 끊기.
     */
    ocx.DevHook = (nHookFlag: number) => {
        console.log(`[DevHook] nHookFlag: ${nHookFlag}`)
    }

    /**
     * 아웃바운드 시.
     */
    ocx.DevOutGoing = (szPhoneNum: string) => {
        console.log(`[DevOutGoing] szPhoneNum: ${szPhoneNum}`)
    }

    /**
     * 콜 시작.
     */
    ocx.DevCallStart = (szCallInfo: string) => {
        console.log(`[DevCallStart] szCallInfo: ${szCallInfo}`)
    }

    /**
     * 콜 연결.
     */
    ocx.DevCallConnected = (szCallInfo: string) => {
        console.log(`[DevCallConnected] szCallInfo: ${szCallInfo}`)
    }

    /**
     * 콜 종료.
     */
    ocx.DevCallEnd = (szCallInfo: string) => {
        console.log(`[DevCallEnd] szCallInfo: ${szCallInfo}`)
    }

    /**
     * 녹취 시작, 종료.
     */
    ocx.DevRecStartEnd = (nFlag: number, szFileName: string, szCallInfo: string) => {
        console.log(`[DevRecStartEnd] nFlag: ${nFlag}, szFileName: ${szFileName}, szCallInfo: ${szCallInfo}`)

        if (nFlag === 1) {
            console.log(`[DevRecStartEnd] 녹취 시작.`)
        } else {
            console.log(`[DevRecStartEnd] 녹취 종료.`)
        }
    }

    /**
     * 통화 상태 변경.
     */
    ocx.DevCallState = (nResult: number) => {
        console.log(`[DevCallState] nResult: ${nResult}`)
    }

    /**
     * 인바운드 시 상대 정보.
     */
    ocx.DevCidData = (szPhoneNum: string) => {
        console.log(`[DevCidData] szPhoneNum: ${szPhoneNum}`)
    }

    /**
     * 저장 경로 설정.
     */
    ocx.DevSavePath = (nMode: number, szUrl: string, szPath: string, nSort: string) => {
        console.log(`[DevSavePath] nMode: ${nMode}, szUrl: ${szUrl}, szPath: ${szPath}, nSort: ${nSort}`)
    }

    /**
     * 파일명 변경.
     */
    ocx.DevRecordFileName = (nResult: number, szFileName: string, szType: any) => {
        console.log(`[DevRecordFileName] nResult: ${nResult}, szFileName: ${szFileName}, szType: ${szType}`)
    }

    /**
     * 녹취 파일 업로드.
     */
    ocx.DevUploaded = (nResult: number, localFileName: string, serverFileName: string) => {
        console.log(`[DevUploaded] nResult: ${nResult}, localFileName: ${localFileName}, serverFileName: ${serverFileName}`)
    }

    /**
     * SMS 수신.
     */
    ocx.DevSMS = (szState: number, otherNumber: any, content: any, type: any, time: any, image: any) => {
        console.log(`[DevSMS] szState: ${szState}, otherNumber: ${otherNumber}, content: ${content}, type: ${type}, time: ${time}, image: ${image}`)
    }

    /**
     * 볼륨 변경.
     */
    ocx.DevVolume = (volume: number) => {
        console.log(`[DevVolume] volume: ${volume}`)
    }

    /**
     * 최대 볼륨 확인.
     */
    ocx.DevMaxVolume = (volume: number) => {
        console.log(`[DevMaxVolume] volume: ${volume}`)
    }

    /**
     * 배터리 정보.
     */
    ocx.DevBatteryInfo = (level: string) => {
        console.log(`[DevBatteryInfo] level: ${level}`)
    }

    /**
     * 녹취 에러.
     */
    ocx.DevError = (nErrCode: number) => {
        console.log(`[DevError] nErrCode: ${nErrCode}`)
    }

    /**
     * 인바운드 시.
     */
    ocx.DevBell = (szState: number) => {
        console.log(`[DevBell] szState: ${szState}`)
    }

    /**
     * 통화 가능 여부 확인.
     */
    ocx.DevAvailableCall = (szState: number) => {
        console.log(`[DevAvailableCall] szState: ${szState}`)
    }

    /**
     * 마이크 음소거.
     */
    ocx.DevMute = (szState: number) => {
        console.log(`[DevMute] szState: ${szState}`)
    }

    /**
     * 디바이스 선택.
     */
    ocx.DevSelectDevice = (szState: number, message: any) => {
        console.log(`[DevSelectDevice] szState: ${szState}, message: ${message}`)
    }

    /**
     * 지박스 연결 상태.
     */
    ocx.DevZiBoxConnect = (szState: number) => {
        console.log(`[DevZiBoxConnect] szState: ${szState}`)
    }

    /**
     * 메시지 수발신.
     */
    ocx.DevMessageExt = (szState: number, number: any, otherNumber: any, content: any, type: any, time: any, image: any) => {
        console.log(`[DevMessageExt] szState: ${szState}, otherNumber: ${otherNumber}, content: ${content}, type: ${type}, time: ${time}, image: ${image}`)
    }

    /**
     * 녹취 파일 리스트.
     */
    ocx.DevFileList = (szFileList: string) => {
        console.log(`[DevFileList] szFileList: ${szFileList}`)
    }

    /**
     * 구간 녹취 시작, 종료.
     */
    ocx.DevRecPartial = (nStartEnd: any, szFileName: string, nResult: number) => {
        console.log(`[DevRecPartial] nStartEnd: ${nStartEnd}, szFileName: ${szFileName}, nResult: ${nResult}`)
    }

    /**
     * 녹취 일시중지.
     */
    ocx.DevPauseRecording = (szFileName: string, szCallInfo: string) => {
        console.log(`[DevPauseRecording] szFileName: ${szFileName}, szCallInfo: ${szCallInfo}`)
    }

    /**
     * 녹취 재개.
     */
    ocx.DevResumeRecording = (szFileName: string, szCallInfo: string) => {
        console.log(`[DevResumeRecording] szFileName: ${szFileName}, szCallInfo: ${szCallInfo}`)
    }

    /**
     * 배터리 충전 중 여부.
     */
    ocx.DevBatteryState = (state: number) => {
        console.log(`[DevBatteryState] state: ${state}`)
    }

    /**
     * 문자 발송 건수.
     */
    ocx.DevMessageCount = (
        dayCount: number,
        monthCount: number,
        dayAutoCount: number,
        monthAutoCount: number,
        dayMaxCount: number,
        monthMaxCount: number
    ) => {
        console.log(`[DevMessageCount] `)
    }

    /**
     * DND 상태.
     */
    ocx.DevDnd = (code: number) => {
        console.log(`[DevDnd] code: ${code}`)
    }

    return { ocx }
}

export default useOcxEvents
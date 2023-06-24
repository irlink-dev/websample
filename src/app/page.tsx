'use client'

import * as React from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import useOcxEvents from '@/hooks/useOcxEvents'
import Button from '@/components/flowbite/Button'

declare global {
    interface Window {
        IRWebSocketClient: new () => any
    }
}

const RootPage = () => {

    const [ocx, setOcx] = React.useState<any>(null)

    React.useEffect(() => {
        const _ocx = new window.IRWebSocketClient()     // 객체 생성.
        const { ocx } = useOcxEvents(_ocx)              // 이벤트 정의.
        setOcx(() => ocx)
    }, [])

    const {
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
        setUserInput
    } = useOcxMethods(ocx)

    return (
        <>
            <Button
                variant="primary"
                onClick={() => createDevice('https://192.168.1.175:3001/', '01028746064')}
            >
                법인폰 연결
            </Button>

            <Button
                variant="alternative"
                onClick={() => closeDevice()}
            >
                법인폰 연결 해제
            </Button>

            <Button
                variant="primary"
                onClick={() => setUserInput(0)}
            >
                사용자 입력 차단
            </Button>

            <Button
                variant="alternative"
                onClick={() => setUserInput(1)}
            >
                사용자 입력 차단 해제
            </Button>

            <Button
                variant="primary"
                onClick={() => setDialStr('01052844463')}
            >
                전화 걸기
            </Button>

            <Button
                variant="red"
                onClick={() => setHookMode(1)}
            >
                전화 끊기
            </Button>

            <Button
                variant="alternative"
                onClick={() => setHookMode(3)}
            >
                전화 받기
            </Button>

            <Button
                variant="alternative"
                onClick={() => getCallState()}
            >
                통화 상태 확인
            </Button>

            <Button
                variant="alternative"
                onClick={() => getVolume()}
            >
                통화 볼륨 확인
            </Button>

            <Button
                variant="yellow"
                onClick={() => getMaxVolume()}
            >
                최대 통화 볼륨 확인
            </Button>

            <Button
                variant="red"
                onClick={() => setMicMute(1)}
            >
                음소거
            </Button>

            <Button
                variant="green"
                onClick={() => setMicMute(0)}
            >
                음소거 해제
            </Button>

            <Button
                variant="purple"
                onClick={() => setVolume(1)}
            >
                통화 볼륨 설정
            </Button>

            <Button
                variant="yellow"
                // onClick={() => checkAvailableCall()}
                // onClick={() => getAvailableCall()}
            >
                통화 가능 여부 확인
            </Button>

            <Button
                variant="red"
                onClick={() => setDnd(1)}
            >
                착신 금지
            </Button>

            <Button
                variant="green"
                onClick={() => setDnd(0)}
            >
                착신 금지 해제
            </Button>

            <Button
                variant="yellow"
                onClick={() => getSavePath()}
            >
                녹취 서버 정보
            </Button>

            <Button
                variant="alternative"
                onClick={() => getFileList()}
            >
                녹취 리스트 확인
            </Button>

            <Button
                variant="alternative"
                onClick={() => setUploadFile('0108318615020230622165952.amr', '0108318615020230622165952.amr', 'http://192.168.1.175:8080/httpup/RefHome.jsp', 'rec')}
            >
                녹취 서버 전송
            </Button>

            <Button
                variant="alternative"
                onClick={() => setRecPartial(1, 'fileName')}
            >
                부분 녹취 시작
            </Button>

            <Button
                variant="alternative"
                onClick={() => setRecPartial(0, 'filename')}
            >
                부분 녹취 종료
            </Button>

            <Button
                variant="alternative"
                onClick={() => pauseRecording()}
            >
                녹취 일시중지
            </Button>

            <Button
                variant="alternative"
                onClick={() => resumeRecording()}
            >
                녹취 재개
            </Button>

            <Button
                variant="alternative"
                onClick={() => sendMessageExt('01052844463,01028746064', 'message', '1^url,2^url')}
            >
                문자 발신
            </Button>

            <Button
                variant="alternative"
                onClick={() => getMessageCount()}
            >
                문자 발송 건수 조회
            </Button>

            <Button
                variant="dark"
                onClick={() => getBatteryInfo()}
            >
                배터리 정보
            </Button>

            <Button
                variant="dark"
                onClick={() => getBatteryState()}
            >
                배터리 충전 상태
            </Button>

            <Button
                variant="alternative"
                onClick={() => setExtra('test|테스트|123')}
            >
                기타 정보
            </Button>

            <Button
                variant="dark"
                onClick={() => setSelectDevice(0)}
            >
                휴대폰 사용
            </Button>

            <Button
                variant="dark"
                onClick={() => setSelectDevice(1)}
            >
                지멘스 사용
            </Button>
        </>
    )
}

export default RootPage

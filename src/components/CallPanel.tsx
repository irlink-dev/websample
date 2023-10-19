import * as React from 'react'
import useOcxMethods from '@/hooks/useOcxMethods'
import useLocalStorage from '@/hooks/useLocalStorage'
import Button from '@/components/Button'
import { SolidButton, OutlineButton } from '@/components/preline/Button'
import Input from '@/components/Input'
import Card from '@/components/Card'
import { BellState, CallState, DndState, MuteState } from '@/types/OcxState'
import { OcxStateContext } from '@/contexts/OcxStateContext'
import CallUnit from '@/components/unit/CallUnit'
import { Style } from '@/enums/Style'
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
  VolumeUp,
} from '@mui/icons-material'

const LOCAL_STORAGE_VALUES_KEY = `ir_web_sample:call_panel:values`

interface CallPanelProps {
  ocx: any
}

interface CallPanelData {
  phoneNumber: string
}

const CallPanel = ({ ocx }: CallPanelProps) => {
  const { muteState, dndState } = React.useContext(OcxStateContext)

  const {
    getCallState,
    getVolume,
    getMaxVolume,
    setMicMute,
    setVolume,
    setDnd,
  } = useOcxMethods(ocx)

  return (
    <>
      <Card className="flex gap-2 w-full mb-5">
        {/* DND Enable & Disable */}
        {String(dndState) === DndState.DND_ON ? (
          <Button variant="dark" className="w-12" onClick={() => setDnd(0)}>
            <PhoneDisabled sx={{ width: '20px', height: '20px' }} />{' '}
          </Button>
        ) : (
          <Button variant="light" className="w-12" onClick={() => setDnd(1)}>
            <PhoneEnabled
              sx={{ width: '20px', height: '20px', color: '#777777' }}
            />{' '}
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

        {/* Get Call Active Status */}
        <OutlineButton onClick={() => getCallState()}>
          활성 상태 확인
        </OutlineButton>

        {/* Get Volume */}
        <OutlineButton onClick={() => getVolume()}>볼륨 확인</OutlineButton>

        {/* Get Max Volume */}
        <OutlineButton onClick={() => getMaxVolume()}>
          최대 볼륨 확인
        </OutlineButton>
      </Card>

      {/* Set Volume */}
      {/*<Button*/}
      {/*    variant="alternative"*/}
      {/*    onClick={() => setVolume(1)}*/}
      {/*>*/}
      {/*    <VolumeUp />*/}
      {/*    /!*<VolumeDown />*!/*/}
      {/*</Button>*/}

      {/* Check Call Availability */}
      {/*<Button*/}
      {/*    variant="alternative"*/}
      {/*    // onClick={() => checkAvailableCall()}*/}
      {/*    // onClick={() => getAvailableCall()}*/}
      {/*>*/}
      {/*    통화 가능 여부 확인*/}
      {/*</Button>*/}
    </>
  )
}

export default CallPanel

import useOcxMethods from '@/hooks/useOcxMethods'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import { useOcx } from '@/hooks/useOcx'

const CallStateUnit = () => {
  const { ocx } = useOcx()
  const { getCallState } = useOcxMethods(ocx)

  return (
    <>
      <button
        className={ButtonStyles.PRELINE_OUTLINE + `h-full`}
        onClick={() => getCallState()}
      >
        GET_CALL_STATE
      </button>

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

export default CallStateUnit

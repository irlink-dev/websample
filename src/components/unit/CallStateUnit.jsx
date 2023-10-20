import useOcxMethods from '@/hooks/useOcxMethods'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'

const CallStateUnit = ({ ocx }) => {
  const { getCallState } = useOcxMethods(ocx)

  return (
    <>
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
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

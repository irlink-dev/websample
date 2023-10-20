import { InputStyles } from '@/enums/styles/InputStyles'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import useOcxMethods from '@/hooks/useOcxMethods'
import useInput from '@/hooks/useInput'
import { AllInbox, Message } from '@mui/icons-material'

const MessageUnit = ({ ocx }) => {
  const { sendMessageExt, getMessageCount } = useOcxMethods(ocx)

  const { data, onChange } = useInput('WEB_SAMPLE_MESSAGE_UNIT_DATA', {
    remoteNumbers: '',
    content: '',
    parts: '',
  })

  return (
    <>
      <input
        placeholder="고객 전화번호"
        className={InputStyles.PRELINE_BASIC}
        name="remoteNumbers"
        value={data.remoteNumbers}
        onChange={onChange}
      ></input>
      <input
        placeholder="텍스트"
        className={InputStyles.PRELINE_BASIC}
        name="content"
        value={data.content}
        onChange={onChange}
      ></input>
      <input
        placeholder="첨부 파일"
        className={InputStyles.PRELINE_BASIC}
        name="parts"
        value={data.parts}
        onChange={onChange}
      ></input>

      <button
        className={ButtonStyles.PRELINE_SOFT}
        onClick={() =>
          sendMessageExt(data.remoteNumbers, data.content, data.parts)
        }
      >
        <Message /> SEND_MESSAGE_EXT
      </button>
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => getMessageCount()}
      >
        <AllInbox /> GET_MESSAGE_COUNT
      </button>
    </>
  )
}

export default MessageUnit

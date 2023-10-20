import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import { InputStyles } from '@/enums/styles/InputStyles'
import useInput from '@/hooks/useInput'
import useOcxMethods from '@/hooks/useOcxMethods'
import { More } from '@mui/icons-material'

const ExtraUnit = ({ ocx }) => {
  const { setExtra } = useOcxMethods(ocx)

  const { data, onChange } = useInput('WEB_SAMPLE_EXTRA_UNIT_DATA', {
    payload: '',
  })

  return (
    <>
      <input
        placeholder="기타 정보"
        className={InputStyles.PRELINE_BASIC}
        name="payload"
        value={data.payload}
        onChange={onChange}
      ></input>

      <button
        className={ButtonStyles.PRELINE_SOFT}
        onClick={() => setExtra(data.payload)}
      >
        <More /> SET_EXTRA
      </button>
    </>
  )
}

export default ExtraUnit

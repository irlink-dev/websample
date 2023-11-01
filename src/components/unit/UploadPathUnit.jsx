import useOcxMethods from 'src/hooks/useOcxMethods'
import { ButtonStyles } from 'src/enums/styles/ButtonStyles'
import { InputStyles } from 'src/enums/styles/InputStyles'
import useInput from '@/hooks/useInput'
import { useOcx } from '@/hooks/useOcx'

const UploadPathUnit = () => {
  const { ocx } = useOcx()
  const { setSavePath, getSavePath } = useOcxMethods(ocx)

  const { data, onChange } = useInput(
    {
      uploadUrl: '',
    },
    'WEB_SAMPLE_UPLOAD_PATH_DATA',
  )

  return (
    <>
      <input
        placeholder="서버 URL"
        className={InputStyles.PRELINE_BASIC}
        name="uploadUrl"
        value={data.uploadUrl}
        onChange={onChange}
      ></input>
      <div className="flex flex-col gap-2 mt-auto">
        <button
          className={ButtonStyles.PRELINE_SOFT}
          onClick={() => {
            setSavePath(2, data.uploadUrl, '', 1)
          }}
        >
          SET_SAVE_PATH
        </button>
        <button
          className={ButtonStyles.PRELINE_OUTLINE}
          onClick={() => getSavePath()}
        >
          GET_SAVE_PATH
        </button>
      </div>
    </>
  )
}

export default UploadPathUnit

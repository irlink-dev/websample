import useOcxMethods from '@/hooks/useOcxMethods'
import { InputStyles } from '@/enums/styles/InputStyles'
import { ButtonStyles } from '@/enums/styles/ButtonStyles'
import useInput from '@/hooks/useInput'
import { Publish } from '@mui/icons-material'

const UploadUnit = ({ ocx }) => {
  const { setUploadFile, getFileList } = useOcxMethods(ocx)

  const { data, onChange } = useInput('WEB_SAMPLE_UPLOAD_UNIT_DATA', {
    localFileName: '',
    serverFileName: '',
    serverUrl: '',
    fileSavePath: '',
  })

  return (
    <>
      <input
        placeholder="로컬 파일명"
        className={InputStyles.PRELINE_BASIC}
        name="localFileName"
        onChange={onChange}
        value={data.localFileName}
      ></input>
      <input
        placeholder="서버 파일명"
        className={InputStyles.PRELINE_BASIC}
        name="serverFileName"
        onChange={onChange}
        value={data.serverFileName}
      ></input>
      <input
        placeholder="서버 URL"
        className={InputStyles.PRELINE_BASIC}
        name="serverUrl"
        onChange={onChange}
        value={data.serverUrl}
      ></input>
      <input
        placeholder="파일 저장 경로"
        className={InputStyles.PRELINE_BASIC}
        name="fileSavePath"
        onChange={onChange}
        value={data.fileSavePath}
      ></input>

      <button
        className={ButtonStyles.PRELINE_SOFT}
        onClick={() =>
          setUploadFile(
            data.localFileName,
            data.serverFileName,
            data.serverUrl,
            data.fileSavePath,
          )
        }
      >
        <Publish /> SET_UPLOAD_FILE
      </button>
      <button
        className={ButtonStyles.PRELINE_OUTLINE}
        onClick={() => getFileList()}
      >
        GET_FILE_LIST
      </button>
    </>
  )
}

export default UploadUnit

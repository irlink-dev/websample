import { useState } from 'react'
import useOcxMethods from 'src/hooks/useOcxMethods'
import useLocalStorage from 'src/hooks/useLocalStorage'
import { ButtonStyles } from 'src/enums/styles/ButtonStyles'
import { InputStyles } from 'src/enums/styles/InputStyles'

const UploadPathUnit = ({ ocx }) => {
  const LOCAL_STORAGE_SET_SAVE_PATH_KEY = 'WebSample.SET_SAVE_PATH'
  const { setSavePath, getSavePath } = useOcxMethods(ocx)
  const { setLocalStorageData, getLocalStorageData } = useLocalStorage()

  const [uploadUrl, setUploadUrl] = useState(() => {
    const uploadUrl = getLocalStorageData(LOCAL_STORAGE_SET_SAVE_PATH_KEY)
    return uploadUrl ? uploadUrl : ''
  })

  return (
    <section className="p-5">
      <div className="ml-auto flex flex-col gap-2">
        <input
          className={InputStyles.PRELINE_BASIC}
          placeholder="서버 URL"
          value={uploadUrl}
          onChange={(event) => setUploadUrl(event.target.value)}
        ></input>
        <button
          className={ButtonStyles.PRELINE_SOFT}
          onClick={() => {
            setSavePath(2, uploadUrl, '', 1)
            setLocalStorageData(LOCAL_STORAGE_SET_SAVE_PATH_KEY, uploadUrl)
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
    </section>
  )
}

export default UploadPathUnit

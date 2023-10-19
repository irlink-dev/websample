import { useState } from 'react'
import Input from '@/components/preline/Input'
import { SolidButton } from '@/components/preline/Button'
import useOcxMethods from '@/hooks/useOcxMethods'
import useLocalStorage from '@/hooks/useLocalStorage'
import { Style } from '@/enums/Style'

const SetSavePath = ({ ocx }) => {
  const LOCAL_STORAGE_SET_SAVE_PATH_KEY = 'WebSample.SET_SAVE_PATH'
  const { setSavePath } = useOcxMethods(ocx)
  const { setLocalStorageData, getLocalStorageData } = useLocalStorage()
  const [uploadUrl, setUploadUrl] = useState(() => {
    const uploadUrl = getLocalStorageData(LOCAL_STORAGE_SET_SAVE_PATH_KEY)
    return uploadUrl ? uploadUrl : ''
  })

  return (
    <div className="ml-auto flex flex-col gap-2">
      <Input
        placeholder="Server URL"
        value={uploadUrl}
        onChange={(event) => setUploadUrl(event.target.value)}
      ></Input>
      <button
        className={Style.BUTTON_SOFT}
        onClick={() => {
          setSavePath(2, uploadUrl, '', 1)
          setLocalStorageData(LOCAL_STORAGE_SET_SAVE_PATH_KEY, uploadUrl)
        }}
      >
        SET_SAVE_PATH
      </button>
    </div>
  )
}

export default SetSavePath

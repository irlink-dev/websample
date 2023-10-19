import { useState } from 'react'
import Input from '@/components/preline/Input'
import { SolidButton } from '@/components/preline/Button'
import useOcxMethods from '@/hooks/useOcxMethods'
import useLocalStorage from '@/hooks/useLocalStorage'

const SetSavePath = ({ ocx }) => {
  const LOCAL_STORAGE_SET_SAVE_PATH_KEY = 'WebSample.SET_SAVE_PATH'
  const { setSavePath } = useOcxMethods(ocx)
  const { setLocalStorageData, getLocalStorageData } = useLocalStorage()
  const [uploadUrl, setUploadUrl] = useState(() => {
    const uploadUrl = getLocalStorageData(LOCAL_STORAGE_SET_SAVE_PATH_KEY)
    return uploadUrl ? uploadUrl : ''
  })

  return (
    <div className="ml-auto flex gap-2 px-5">
      <Input
        placeholder="Server URL"
        value={uploadUrl}
        onChange={(event) => setUploadUrl(event.target.value)}
      ></Input>
      <SolidButton
        onClick={() => {
          setSavePath(2, uploadUrl, '', 1)
          setLocalStorageData(LOCAL_STORAGE_SET_SAVE_PATH_KEY, uploadUrl)
        }}
      >
        SET_SAVE_PATH
      </SolidButton>
    </div>
  )
}

export default SetSavePath

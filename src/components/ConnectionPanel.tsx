import * as React from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'

const LOCAL_STORAGE_VALUES_KEY = `ir_web_sample:connection_panel:values`

interface ConnectionPanelProps {
  ocx: any
}

interface ConnectionPanelData {
  serverUrl: string
  phoneNumber: string
}

const ConnectionPanel = ({ ocx }: ConnectionPanelProps) => {
  const { getLocalStorageData, setLocalStorageData } = useLocalStorage()

  const [data, setData] = React.useState<ConnectionPanelData>(() => {
    const storageData = getLocalStorageData(LOCAL_STORAGE_VALUES_KEY)
    return storageData
      ? storageData
      : {
          serverUrl: '',
          phoneNumber: '',
        }
  })

  React.useEffect(() => {
    setLocalStorageData(LOCAL_STORAGE_VALUES_KEY, data)
  }, [data])

  return <></>
}

export default ConnectionPanel

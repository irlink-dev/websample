import { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'

const useInput = (defaultValues: unknown, localStorageKey: string) => {
  const { getLocalStorageData, setLocalStorageData } = useLocalStorage()

  const [data, setData] = useState(() => {
    const data = getLocalStorageData(localStorageKey)
    return data ? data : defaultValues
  })

  useEffect(() => {
    setLocalStorageData(localStorageKey, data)
    // console.log(data)
  }, [data])

  const onChange = (event: any) => {
    const { name, value } = event.target
    setData((prevData: any) => ({ ...prevData, [name]: value }))
  }

  return { data, onChange }
}

export default useInput

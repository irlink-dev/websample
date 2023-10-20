import { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'

const useInput = (localStorageKey, defaultValues) => {
  const { getLocalStorageData, setLocalStorageData } = useLocalStorage()

  const [data, setData] = useState(() => {
    const data = getLocalStorageData(localStorageKey)
    return data ? data : defaultValues
  })

  useEffect(() => {
    setLocalStorageData(localStorageKey, data)
  }, [data])

  const onChange = (event) => {
    const { name, value } = event.target
    setData((prevData) => ({ ...prevData, [name]: value }))
  }

  return { data, setData, onChange }
}

export default useInput

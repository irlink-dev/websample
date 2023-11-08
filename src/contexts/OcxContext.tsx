import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import useOcxEvents from '@/hooks/useOcxEvents'
import { OcxStateContext } from '@/contexts/OcxStateContext'

export const OcxContext = createContext({
  ocx: null,
  setOcx: ((ocx: any) => {
    /* empty */
  }) as Dispatch<SetStateAction<any>>,
})

export const OcxProvider = ({ children }: { children: ReactNode }) => {
  const [ocx, setOcx] = useState<any>(null)
  const ocxStateContext = useContext(OcxStateContext)

  useEffect(() => {
    const _ocx = new window.IRWebSocketClient()
    const { ocx } = useOcxEvents(_ocx, ocxStateContext)
    setOcx(() => ocx)
  }, [])

  return (
    <OcxContext.Provider value={{ ocx, setOcx }}>
      {children}
    </OcxContext.Provider>
  )
}

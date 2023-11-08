import { MutableRefObject, ReactNode, createContext, useRef } from 'react'

type SocketContextType = {
  socket: MutableRefObject<any>
  // isConnected: MutableRefObject<boolean>
  serverUrlRef: MutableRefObject<string>
  phoneNumberRef: MutableRefObject<string>
}

export const SocketContext = createContext<SocketContextType>({
  socket: { current: null },
  // isConnected: { current: false },
  serverUrlRef: { current: '' },
  phoneNumberRef: { current: '' },
})

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socket = useRef<any>(null)
  // const isConnected = useRef<boolean>(false)
  const serverUrlRef = useRef<string>('')
  const phoneNumberRef = useRef<string>('')

  return (
    <SocketContext.Provider
      value={{
        socket,
        // isConnected,
        serverUrlRef,
        phoneNumberRef,
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

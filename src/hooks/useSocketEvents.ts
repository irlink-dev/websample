import { useContext, useEffect } from 'react'
import { SocketContext } from '@/contexts/SocketContext'

const useSocketEvents = (socket: any) => {
  useEffect(() => {
    if (!socket?.current) {
      return
    }
    socket.current.on('connect', () => {
      console.log('소켓 연결')
    })
    socket.current.on('disconnect', () => {
      console.log('소켓 연결 해제')
    })
    socket?.current?.on('message', (message: any) => {
      console.log(message)
    })
    return () => {
      // todo ...
    }
  }, [])
}

export default useSocketEvents

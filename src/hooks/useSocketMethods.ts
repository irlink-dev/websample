import { useContext, useEffect, useState } from 'react'
import { SocketContext } from '@/contexts/SocketContext'

const MESSAGE = 'message'

const useSocketMethods = () => {
  const { socket, serverUrlRef, phoneNumberRef } = useContext(SocketContext)

  const [serverUrl, setServerUrl] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const socketOptions = {
    path: '/socket.io',
    transports: ['websocket'],
    secure: true,
    rejectUnauthorized: false,
    query: { EIO: 3 },
  }

  /**
   * 서버 URL, 법인폰 번호가 변경되면 CREATE_DEVICE
   */
  useEffect(() => {
    serverUrlRef.current = serverUrl
    phoneNumberRef.current = phoneNumber

    if (serverUrl && phoneNumber) {
      connectSocket(serverUrl).then(() =>
        emit(
          JSON.stringify({
            type: 'CreateDevice',
          }),
        ),
      )
    }
  }, [serverUrl, phoneNumber])

  /**
   * 소켓 메시지 전송.
   */
  const emit = (message: string) => {
    if (!socket?.current) {
      return
    }
    socket.current.emit(MESSAGE, {
      key: phoneNumber,
      message: message,
    })
  }

  /**
   * 중계서버와 소켓 연결.
   */
  const connectSocket = async (serverUrl: string) => {
    const io = require('socket.io-client')
    socket.current = io(serverUrl, socketOptions)
  }

  /**
   * 법인폰 연결. (서버 URL, 법인폰 번호 설정)
   */
  const emitCreateDevice = (serverUrl: string, phoneNumber: string) => {
    setServerUrl(serverUrl)
    setPhoneNumber(phoneNumber)
  }

  /**
   * 법인폰 연결 해제.
   */
  const emitCloseDevice = () => {
    emit(
      JSON.stringify({
        type: 'CloseDevice',
      }),
    )
  }

  return {
    emitCreateDevice,
    emitCloseDevice,
  }
}

export default useSocketMethods

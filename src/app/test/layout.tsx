'use client'

import { ReactNode } from 'react'
import { SocketProvider } from '@/contexts/SocketContext'

const TestLayout = ({ children }: { children: ReactNode }) => {
  return <SocketProvider>{children}</SocketProvider>
}

export default TestLayout

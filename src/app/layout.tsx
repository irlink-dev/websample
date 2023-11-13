'use client'

import * as React from 'react'
import { OcxProvider } from '@/contexts/OcxContext'
import { OcxStateProvider } from '@/contexts/OcxStateContext'
import { SettingsProvider } from '@/contexts/SettingsContext'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        {/*<script src="/libs/ir-celering-bundle.js" />*/}
        <script src="/libs/IRWebSocketClient.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <SettingsProvider>
        <OcxStateProvider>
          <OcxProvider>
            <body className="bg-[#fafafa] ">{children}</body>
          </OcxProvider>
        </OcxStateProvider>
      </SettingsProvider>
    </html>
  )
}

export default RootLayout

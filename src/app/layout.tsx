'use client'

import * as React from 'react'
import { OcxStateProvider } from '@/components/context/OcxStateContext'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />

            {/*<script src="/libs/ir-celering-bundle.js" />*/}
            <script src="/libs/IRWebSocketClient.js"></script>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <OcxStateProvider>
            <body>{children}</body>
        </OcxStateProvider>
        </html>
    )
}

export default RootLayout

import * as process from 'process'

const RootLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />

            {/*<script src="/libs/ir-celering-bundle.js" />*/}
            <script src="/libs/IRWebSocketClient.js"></script>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>{children}</body>
        </html>
    )
}

export default RootLayout

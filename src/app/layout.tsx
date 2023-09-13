import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
    title: 'The Blog',
    description: 'Blog by Faris Fazlic for Emersoft',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

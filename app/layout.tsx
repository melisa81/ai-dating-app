import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Dating App',
  description: '基于AI的智能约会匹配系统',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}

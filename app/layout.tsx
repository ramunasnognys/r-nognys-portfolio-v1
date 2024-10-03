import type { Metadata } from 'next'
import { ThemeProvider } from './context/ThemeContext'

import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'ASCII Background App',
  description: 'An interactive ASCII background with theme toggle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body className="selectable">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
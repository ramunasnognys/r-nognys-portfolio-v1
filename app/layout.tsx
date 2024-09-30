import type { Metadata } from 'next'
import { ThemeProvider } from './context/ThemeContext'
import ASCIIBackground from './components/ASCIIBackground'


// import { GeistSans } from 'geist/font/sans';
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
      <body>
        <ThemeProvider>
          <ASCIIBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
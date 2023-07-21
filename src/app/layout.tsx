import { UserProvider } from '@auth0/nextjs-auth0/client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David G Hartman',
  description: 'Artist, Musician, and Friend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <UserProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </UserProvider>
  )
}

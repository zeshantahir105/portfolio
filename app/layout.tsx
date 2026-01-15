import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Zeshan Tahir - Full Stack Developer',
  description: 'Full Stack Developer with 5 years of experience in MERN stack, Next.js, NestJS, and cloud technologies.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'MongoDB', 'PostgreSQL'],
  authors: [{ name: 'Muhammad Zeshan Tahir' }],
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
  openGraph: {
    title: 'Muhammad Zeshan Tahir - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


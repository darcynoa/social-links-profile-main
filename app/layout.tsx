import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Social Links - Frontend Mentor',
  description:
    'Frontend Mentor challenge for creating a social links profile page',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
        {children}
        <footer className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </footer>{' '}
      </body>
    </html>
  )
}

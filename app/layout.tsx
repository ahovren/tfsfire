import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'TFS Volunteer Fire Department',
    template: '%s | TFS Volunteer Fire Department',
  },
  description: 'Protecting Fortine and Beyond. Volunteer fire department serving the Fortine, Montana area with emergency response, fire prevention, and community outreach.',
  keywords: ['fire department', 'volunteer fire', 'Fortine Montana', 'emergency response', 'wildfire', 'fire safety', 'Trego Montana', 'Stryker Montana', 'Eureka Montana'],
  authors: [{ name: 'TFS Volunteer Fire Department' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tfsfire.org',
    siteName: 'TFS Volunteer Fire Department',
    title: 'TFS Volunteer Fire Department',
    description: 'Protecting Fortine and Beyond. Volunteer fire department serving the Fortine, Montana area.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TFS Volunteer Fire Department',
    description: 'Protecting Fortine and Beyond.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

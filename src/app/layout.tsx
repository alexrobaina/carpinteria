import Navbar from '@/components/Navbar'
import './globals.css'
import Head from 'next/head'
import Providers from './providers'

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata() {
  // Define metadata based on locale
  return {
    title: 'Carpintería Vanille',
    description: 'Carpintería Robaina',
    keywords: 'Carpintería Robaina',
    openGraph: {
      title: 'Carpintería Robaina',
      description: 'Carpintería Robaina',
      type: 'website',
      images: '/assets/images/mesasDeLuz.png', // Ensure this path is correct
    },
    twitter: {
      description: 'Carpintería Robaina',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  return (
    <html
      lang={locale}
      className="light"
      data-theme="light"
      suppressHydrationWarning
    >
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <body className="bg-gray-100 flex justify-center items-center flex-col">
        <Providers>
          <Navbar />
          <main className="w-full flex flex-col items-center bg-gray-100 text-gray-800">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

import Navbar from '@/components/Navbar'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata() {
  // Define metadata based on locale
  return {
    title: 'Carpintería Vanille',
    description: 'Carpintería Vanille',
    keywords: 'Carpintería Vanille',
    openGraph: {
      title: 'Carpintería Vanille',
      description: 'Carpintería Vanille',
      type: 'website',
      images: '/chatAI.png', // Ensure this path is correct
    },
    twitter: {
      description: 'Carpintería Vanille',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body className="bg-gray-100 flex justify-center items-center flex-col">
        <Navbar />
        <div className="w-full flex flex-col items-center">{children}</div>
      </body>
    </html>
  )
}

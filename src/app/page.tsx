'use client'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solutions from '@/components/Solutions'
import Portfolio from '@/components/portfolio'
import Services from '@/components/Services'
// import Testimonials from '@/components/Testimonials'
  import { Head } from 'next/document'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carpintería Robaina | Muebles a medida en madera</title>
        <meta name="description" content="Diseño y fabricación de muebles a medida. Calidad artesanal en madera. Pedí tu presupuesto personalizado hoy." />
        <meta name="keywords" content="carpintería, muebles a medida, madera, diseño, cocina, dormitorio, Robaina" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Carpintería Robaina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Carpintería Robaina | Muebles a medida" />
        <meta property="og:description" content="Diseño de muebles funcionales en madera. Calidad artesanal." />
        <meta property="og:image" content="https://arcarpinteria.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomoda-1.1116fc6a.png&w=1080&q=75" />
        <meta property="og:url" content="https://arcarpinteria.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carpintería Robaina | Muebles a medida" />
        <meta name="twitter:description" content="Diseño de muebles funcionales en madera. Calidad artesanal." />
        <meta name="twitter:image" content="https://arcarpinteria.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcomoda-1.1116fc6a.png&w=1080&q=75" />
      </Head>

      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Portfolio />
        <Services />
        {/* <Testimonials /> */}
        <Footer />
      </main>
    </>
  )
}

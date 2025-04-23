'use client'

import Image from 'next/image'
import hero from '../../../public/assets/images/comoda-1.png'

export default function Hero() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Carpintería a Medida
            <br className="hidden sm:inline" /> que Da Vida a tus Ideas
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Trabajo artesanal de calidad, carpintería personalizada y servicio
            puntual para propietarios y contratistas.
          </p>
          <div className="mt-6">
            <a
              href="#quote"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-lg font-medium py-3 px-6 rounded-md transition-all duration-300"
            >
              Pedí tu Presupuesto Gratis
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <Image
            src={hero}
            alt="Trabajo de carpintería"
            className="rounded-xl shadow-lg object-cover w-full h-full max-h-[500px]"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

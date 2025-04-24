'use client'

import Image from 'next/image'
import cocina from '../../../public/assets/images/cocina.jpeg'
import vestidor from '../../../public/assets/images/armario.png'
import biblioteca from '../../../public/assets/images/biblioteca.png'
import mesaDeLuz from '../../../public/assets/images/mesaDeLuz-1.png'

export default function Portfolio() {
  const projects = [
    {
      title: 'Muebles de Cocina',
      description: 'Diseño e instalación completa de cocina moderna',
      image: cocina,
    },
    {
      title: 'Vestidor',
      description: 'Vestidor personalizado con acabados premium',
      image: vestidor,
    },
    {
      title: 'Biblioteca',
      description: 'Biblioteca empotrada con detalles artesanales',
      image: biblioteca,
    },
    {
      title: 'Mesas de Luz',
      description: 'Mesas de luz con diseño moderno',
      image: mesaDeLuz,
    },
  ]

  return (
    <section id="portfolio" className="bg-white w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">
          Nuestros Trabajos
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explorá nuestra galería de proyectos terminados y dejate inspirar para
          tu próximo proyecto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg h-[500px] overflow-hidden shadow-md"
            >
              <div className="relative">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  // className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/541138997032"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Consultá por tu Proyecto
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      title: 'Muebles de Cocina',
      description: 'Diseño e instalación completa de cocina moderna',
      image: '/cocina-moderna.jpg',
    },
    {
      title: 'Vestidor',
      description: 'Vestidor personalizado con acabados premium',
      image: '/vestidor.jpg',
    },
    {
      title: 'Biblioteca',
      description: 'Biblioteca empotrada con detalles artesanales',
      image: '/biblioteca.jpg',
    },
    {
      title: 'Mesa Comedor',
      description: 'Mesa de comedor de madera maciza a medida',
      image: '/mesa-comedor.jpg',
    },
  ]

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">
          Nuestros Trabajos
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explorá nuestra galería de proyectos terminados y dejate inspirar para
          tu próximo proyecto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
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
            href="#contacto"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Consultá por tu Proyecto
          </a>
        </div>
      </div>
    </section>
  )
}

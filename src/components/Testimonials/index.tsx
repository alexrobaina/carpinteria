'use client'

export default function Testimonials() {
  const testimonios = [
    {
      nombre: 'Martín G.',
      cargo: 'Propietario',
      texto:
        'Excelente trabajo en mi cocina. La atención al detalle y la calidad de los materiales superaron mis expectativas.',
    },
    {
      nombre: 'Laura S.',
      cargo: 'Diseñadora de Interiores',
      texto:
        'Como profesional, valoro mucho la precisión y puntualidad. Son mi primera opción para proyectos de carpintería.',
    },
    {
      nombre: 'Carlos R.',
      cargo: 'Cliente Residencial',
      texto:
        'El vestidor quedó perfecto, exactamente como lo imaginamos. El proceso fue muy profesional de principio a fin.',
    },
  ]

  return (
    <section id="testimonios" className="bg-gray-50 py-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">
          Lo que Dicen Nuestros Clientes
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          La satisfacción de nuestros clientes es nuestro mejor respaldo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">
                    {testimonio.nombre}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonio.cargo}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonio.texto}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

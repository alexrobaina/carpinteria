'use client'

export default function Problem() {
  return (
    <section className="bg-white py-20 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-amber-600 text-4xl font-bold mb-4">100%</div>
            <h3 className="text-xl font-semibold mb-2">
              Atención personalizada
            </h3>
            <p className="text-gray-600">
              Te ayudamos a elegir el mejor material y color para tu proyecto.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-amber-600 text-4xl font-bold mb-4">100%</div>
            <h3 className="text-xl font-semibold mb-2">
              Satisfacción Garantizada
            </h3>
            <p className="text-gray-600">
              Nos aseguramos de que cada proyecto cumpla con tus expectativas.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-amber-600 text-4xl font-bold mb-4">100%</div>
            <h3 className="text-xl font-semibold mb-2">Diseño e instalación</h3>
            <p className="text-gray-600">
              Te presentaremos propuestas de diseño y te ayudaremos con la
              instalación del proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

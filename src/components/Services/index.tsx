export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-20 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Nuestras Especialidades
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Diseño e instalación de muebles de interior alta calidad, para tu
          hogar.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-amber-600">
                Muebles a Medida
              </h3>
              <svg
                className="w-6 h-6 text-amber-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">
              Mesas de luz, estanterías y piezas únicas que reflejan tu estilo y
              espacio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-amber-600">
                Muebles Empotrados
              </h3>
              <svg
                className="w-6 h-6 text-amber-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">
              Maximizá tu espacio con muebles integrados diseñados para combinar
              con el estilo de tu casa.
            </p>
          </div>

          {/* <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-amber-600">
                
              </h3>
              <svg
                className="w-6 h-6 text-amber-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">
              Construcciones exteriores duraderas: decks, pérgolas y cercos con
              artesanía que perdura.
            </p>
          </div> */}
        </div>

        <div className="mt-10">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/541138997032"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Consultá Gratis
          </a>
        </div>
      </div>
    </section>
  )
}

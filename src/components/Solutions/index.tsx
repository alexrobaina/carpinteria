export default function Solutions() {
  return (
    <section className="bg-gray-50 py-20 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          Nuestro Compromiso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-amber-600 mb-4">
              Calidad Superior
            </h3>
            <p className="text-gray-600">
              Utilizamos los mejores materiales y técnicas para garantizar
              durabilidad y belleza en cada pieza.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-amber-600 mb-4">
              Puntualidad Garantizada
            </h3>
            <p className="text-gray-600">
              Cumplimos con los plazos establecidos y mantenemos una
              comunicación clara durante todo el proceso.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-amber-600 mb-4">
              Atención Personalizada
            </h3>
            <p className="text-gray-600">
              Escuchamos tus ideas y necesidades para crear exactamente lo que
              estás buscando.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

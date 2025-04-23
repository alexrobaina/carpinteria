'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Carpintería Vanille</h3>
            <p className="text-gray-400">
              Creando muebles de calidad y espacios únicos desde 2003.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Mendoza, Godoy Cruz, Argentina</li>
              <li>📞 +54 11 3899-70-32</li>
              <li>✉️ alexrobainaph@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes a Viernes: 9:00 - 18:00</li>
              <li>Sabados y Domingos: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Carpintería Vanille. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

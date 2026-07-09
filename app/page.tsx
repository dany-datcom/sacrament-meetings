import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Reuniones Sacramentales
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Encuentra la información completa de todas nuestras reuniones
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/meetings"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Ver Todas las Reuniones
          </Link>
          <Link
            href="/meetings/current"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Reunión de Hoy
          </Link>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">📅</h2>
          <h3 className="text-lg font-semibold mb-2">Reuniones Semanales</h3>
          <p className="text-gray-600">
            Accede a todas las reuniones sacramentales programadas
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-600 mb-2">🎯</h2>
          <h3 className="text-lg font-semibold mb-2">Agendas Completas</h3>
          <p className="text-gray-600">
            Consulta los temas, oradores y horarios de cada reunión
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">🖨️</h2>
          <h3 className="text-lg font-semibold mb-2">Imprime Fácilmente</h3>
          <p className="text-gray-600">
            Descarga e imprime las agendas en formato optimizado
          </p>
        </div>
      </section>
    </div>
  );
}

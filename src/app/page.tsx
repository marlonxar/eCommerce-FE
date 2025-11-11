export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Bienvenido a Chemas Store 👕
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Descubre nuestra colección de camisetas deportivas exclusivas, con
        diseños únicos y materiales de alta calidad.
      </p>
      <a
        href="/ropa"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Ver Ropa
      </a>
    </section>
  )
}

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Contáctanos</h2>
      <p className="text-gray-700 mb-6">
        ¿Tenés dudas o querés hacer un pedido especial? Escribinos y te responderemos pronto.
      </p>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Tu mensaje"
          className="border rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

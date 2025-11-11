export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Términos y Condiciones
      </h1>
      <p className="mb-4">
        Bienvenido(a) a <strong>Chemas Store</strong>. Al acceder y utilizar
        este sitio web, usted acepta cumplir con los siguientes términos y
        condiciones. Le recomendamos leerlos detenidamente antes de realizar
        cualquier compra o registrarse en nuestro sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        1. Información General
      </h2>
      <p className="mb-4">
        Este sitio web es operado por <strong>Chemas Store S.A.</strong>,
        empresa constituida conforme a las leyes de la República de Costa Rica.
        Todos los servicios, productos y operaciones comerciales ofrecidos en
        este sitio se rigen por la legislación costarricense.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Uso del Sitio</h2>
      <p className="mb-4">
        El usuario se compromete a utilizar el sitio únicamente para fines
        legales y de manera que no infrinja los derechos de terceros ni limite
        el uso del sitio por parte de otros usuarios. Queda prohibido realizar
        actividades fraudulentas, introducir virus o manipular cualquier
        funcionalidad del sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Precios y Pagos</h2>
      <p className="mb-4">
        Todos los precios se expresan en colones costarricenses (₡) e incluyen
        el Impuesto al Valor Agregado (IVA), salvo que se indique lo contrario.
        Los métodos de pago aceptados incluyen tarjetas de crédito o débito,
        SINPE Móvil y otros medios electrónicos autorizados.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Envíos y Entregas</h2>
      <p className="mb-4">
        Los pedidos serán entregados dentro del territorio nacional, de acuerdo
        con la dirección indicada por el cliente. Los tiempos de entrega pueden
        variar según la ubicación y la disponibilidad del producto.{" "}
        <strong>Chemas Store</strong> no se hace responsable por retrasos
        causados por terceros, condiciones climáticas o eventos fuera de su
        control.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        5. Cambios y Devoluciones
      </h2>
      <p className="mb-4">
        Se aceptan cambios y devoluciones dentro de los 10 días hábiles
        posteriores a la compra, siempre y cuando el producto esté en su empaque
        original, sin uso y con la factura correspondiente. No se aceptan
        devoluciones de productos en promoción o personalizados.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        6. Privacidad y Protección de Datos
      </h2>
      <p className="mb-4">
        <strong>Chemas Store</strong> cumple con la Ley N.º 8968 “Ley de
        Protección de la Persona frente al Tratamiento de sus Datos Personales”.
        La información proporcionada por los usuarios será utilizada únicamente
        para fines relacionados con la compra y entrega de productos, y no será
        compartida con terceros sin consentimiento.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        7. Propiedad Intelectual
      </h2>
      <p className="mb-4">
        Todo el contenido de este sitio web, incluyendo textos, imágenes,
        logotipos, íconos y diseño gráfico, es propiedad de{" "}
        <strong>Chemas Store</strong> o de sus proveedores y está protegido por
        las leyes de derechos de autor y propiedad intelectual vigentes en Costa
        Rica.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        8. Limitación de Responsabilidad
      </h2>
      <p className="mb-4">
        <strong>Chemas Store</strong> no se responsabiliza por daños directos o
        indirectos derivados del uso o imposibilidad de uso del sitio web,
        incluyendo pérdidas de datos, interrupciones o errores en el servicio.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Modificaciones</h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos términos y condiciones en
        cualquier momento. Los cambios entrarán en vigor una vez publicados en
        esta página. Se recomienda al usuario revisarlos periódicamente.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        10. Legislación Aplicable y Jurisdicción
      </h2>
      <p className="mb-4">
        Estos términos y condiciones se rigen por las leyes de la República de
        Costa Rica. Cualquier controversia será sometida a los tribunales
        competentes de San José, Costa Rica.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Última actualización:{" "}
        {new Date().toLocaleDateString("es-CR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </main>
  )
}

export default function KinestesicoPage() {
  const temas = [
    {
      titulo: "¿Qué es el dinero?",
      pdfs: [
      ],
    },
    {
      titulo: "Necesidades vs. deseos",
      pdfs: [
        { nombre: "Actividad Kinestesica", url: "/pdfs/kinestesico/beto/2/2.1.pdf" },
      ],
    },
    {
      titulo: "Ahorrar: ¡El superpoder de los niños!",
      pdfs: [
        { nombre: "Actividad", url: "/pdfs/kinestesico/beto/3/3.1.pdf" },
        { nombre: "La importancia de ahorrar", url: "/pdfs/kinestesico/beto/3/3.2.pdf" },
        { nombre: "Pon tu superpoder de ahorro en acción", url: "/pdfs/kinestesico/beto/3/3.3.pdf" },
      ],
    },
    {
      titulo: "Presupuesto básico: \"Dinero que entra, dinero que sale\"",
      pdfs: [
        { nombre: "Dinero que entra Dinero que sale", url: "/pdfs/kinestesico/beto/4/4.1.pdf" },
      ],
    },
    
    {
      titulo: "El banco y el interés (versión amigable)",
      pdfs: [
        
      ],
    },
    {
      titulo: "Compartir y donar: La importancia de ser generoso",
      pdfs: [
        { nombre: "El banco y el interes...", url: "/pdfs/kinestesico/beto/6/6.1.pdf" },
        
      ],
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">
            Temas recomendados para Kinestésicos
          </h1>
          <ul className="space-y-6">
            {temas.map((tema, idx) => (
              <li
                key={idx}
                className="bg-teal-100 text-teal-900 rounded-lg px-4 py-3 font-medium shadow-sm"
              >
                <div className="mb-2">{idx + 1}. {tema.titulo}</div>
                <ul className="ml-4 list-disc space-y-1">
                  {tema.pdfs.map((pdf, pdfIdx) => (
                    <li key={pdfIdx}>
                      <a
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 underline hover:text-teal-900"
                      >
                        {pdf.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
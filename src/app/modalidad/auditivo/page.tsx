import { Volume2 } from "lucide-react";

export default function AuditivoPage() {
  const temas = [
    {
      titulo: "¿Qué es el dinero?",
      audios: [
        { nombre: "Explicación auditiva", url: "/audios/auditivo/b/1/1.1.mp3" },
        { nombre: "¿Qué es el dinero?", url: "/audios/auditivo/b/1/1.2.mp3" },
        { nombre: "¿Para qué sirve el dinero?", url: "/audios/auditivo/b/1/1.3.mp3" },
        { nombre: "¿Cómo se obtiene el dinero?", url: "/audios/auditivo/b/1/1.4.mp3" },
      ],
    },
    {
      titulo: "Necesidades vs. deseos",
      audios: [
        { nombre: "Actividad Auditiva", url: "/audios/auditivo/b/2/2.1.mp3" },
        { nombre: "Necesidades vs. deseos", url: "/audios/auditivo/b/2/2.2.mp3" },
        { nombre: "Ejemplos de necesidades y deseos", url: "/audios/auditivo/b/2/2.3.mp3" },
        { nombre: "Actividad de reflexión", url: "/audios/auditivo/b/2/2.4.mp3" },
      ],
    },
    {
      titulo: "Ahorrar: ¡El superpoder de los niños!",
      audios: [
        { nombre: "Actividad", url: "/audios/auditivo/b/3/3.1.mp3" },
        { nombre: "La importancia de ahorrar", url: "/audios/auditivo/b/3/3.2.mp3" },
        { nombre: "Pon tu superpoder de ahorro en acción", url: "/audios/auditivo/b/3/3.3.mp3" },
      ],
    },
    {
      titulo: "Presupuesto básico: \"Dinero que entra, dinero que sale\"",
      audios: [
        { nombre: "Dinero que entra Dinero que sale", url: "/audios/auditivo/b/4/4.1.mp3" },
        { nombre: "Presupuesto básico", url: "/audios/auditivo/b/4/4.2.mp3" },        
      ],
    },
    {
      titulo: "Ganar dinero: Pequeños emprendedores",
      audios: [
        { nombre: "Ideas auditivas", url: "/audios/auditivo/b/5/5.1.mp3" },
        { nombre: "Ganar dinero", url: "/audios/auditivo/b/5/5.2.mp3" },
        { nombre: "Emprender desde pequeños", url: "/audios/auditivo/b/5/5.3.mp3" },
        { nombre: "Ejemplos de emprendimiento", url: "/audios/auditivo/b/5/5.4.mp3" },
      ],
    },
    {
      titulo: "El banco y el interés (versión amigable)",
      audios: [
        { nombre: "Explicación auditiva", url: "/audios/auditivo/b/6/6.1.mp3" },
        { nombre: "¿Qué es un banco?", url: "/audios/auditivo/b/6/6.2.mp3" },
        { nombre: "¿Qué es el interés?", url: "/audios/auditivo/b/6/6.3.mp3" },
      ],
    },
    {
      titulo: "Compartir y donar: La importancia de ser generoso",
      audios: [
        { nombre: "El banco y el interes...", url: "/audios/auditivo/b/7/7.1.mp3" },
        { nombre: "Compartir y donar", url: "/audios/auditivo/b/7/7.2.mp3" },
      ],
    },
  ];

    return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">
            Temas recomendados para Auditivos
          </h1>
          <ul className="space-y-8">
            {temas.map((tema, idx) => (
              <li
                key={idx}
                className="bg-teal-100/70 text-teal-900 rounded-lg px-4 py-4 font-medium shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Volume2 className="text-teal-600" />
                  <span className="text-lg font-semibold">{idx + 1}. {tema.titulo}</span>
                </div>
                {tema.audios.length > 0 && (
                  <div className="grid gap-4">
                    {tema.audios.map((audio, audioIdx) => (
                      <div
                        key={audioIdx}
                        className="bg-white rounded-md shadow p-3 flex items-center border border-teal-200"
                      >
                        <audio controls className="w-full">
                          <source src={audio.url} type="audio/mpeg" />
                          Tu navegador no soporta el elemento de audio.
                        </audio>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
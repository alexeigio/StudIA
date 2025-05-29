import { PlayCircle } from "lucide-react";

export default function VisualPage() {
  const temas = [
    {
      titulo: "¿Qué es el dinero?",
      videos: [
        { nombre: "Video explicativo", url: "/videos/visual/b/1/1.1.mp4" },
        { nombre: "¿Qué es el dinero?", url: "/videos/visual/b/1/1.2.mp4" },
        { nombre: "¿Para qué sirve el dinero?", url: "/videos/visual/b/1/1.3.mp4" },
        { nombre: "¿Cómo se obtiene el dinero?", url: "/videos/visual/b/1/1.4.mp4" },
        
      ],
    },
    {
      titulo: "Necesidades vs. deseos",
      videos: [
        { nombre: "Video visual", url: "/videos/visual/b/2/2.1.mp4" },
        { nombre: "Necesidades vs. deseos", url: "/videos/visual/b/2/2.2.mp4" },
        { nombre: "Ejemplos de necesidades y deseos", url: "/videos/visual/b/2/2.3.mp4" },
        { nombre: "Actividad de reflexión", url: "/videos/visual/b/2/2.4.mp4" },
      ],
    },
    {
      titulo: "Ahorrar: ¡El superpoder de los niños!",
      videos: [
        { nombre: "La importancia de ahorrar", url: "/videos/visual/b/3/3.1.mp4" },
        { nombre: "Superpoder en acción", url: "/videos/visual/b/3/3.2.mp4" },
        { nombre: "Pon tu superpoder de ahorro en acción", url: "/videos/visual/b/3/3.3.mp4" },
      ],
    },
    {
      titulo: "Presupuesto básico: \"Dinero que entra, dinero que sale\"",
      videos: [
        { nombre: "Presupuesto básico", url: "/videos/visual/b/4/4.1.mp4" },
        { nombre: "Dinero que entra Dinero que sale", url: "/videos/visual/b/4/4.2.mp4" },
      ],
    },
    {
      titulo: "Ganar dinero: Pequeños emprendedores",
      videos: [
        { nombre: "Ideas visuales", url: "/videos/visual/b/5/5.1.mp4" },
        { nombre: "Ganar dinero", url: "/videos/visual/b/5/5.2.mp4" },
        { nombre: "Emprender desde pequeños", url: "/videos/visual/b/5/5.3.mp4" },
        { nombre: "Ejemplos de emprendimiento", url: "/videos/visual/b/5/5.4.mp4" },
      ],
    },
    {
      titulo: "El banco y el interés (versión amigable)",
      videos: [
        { nombre: "Explicación visual", url: "/videos/visual/b/6/6.1.mp4" },
        { nombre: "¿Qué es un banco?", url: "/videos/visual/b/6/6.2.mp4" },
        { nombre: "¿Qué es el interés?", url: "/videos/visual/b/6/6.3.mp4" },
      ],
    },
    {
      titulo: "Compartir y donar: La importancia de ser generoso",
      videos: [
        { nombre: "Compartir y donar", url: "/videos/visual/b/7/7.1.mp4" },
        { nombre: "El banco y el interes...", url: "/videos/visual/b/7/7.2.mp4" },
      ],
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">
            Temas recomendados para Visuales
          </h1>
          <ul className="space-y-8">
            {temas.map((tema, idx) => (
              <li
                key={idx}
                className="bg-teal-100/70 text-teal-900 rounded-lg px-4 py-4 font-medium shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2">
                  <PlayCircle className="text-teal-600" />
                  <span className="text-lg font-semibold">{idx + 1}. {tema.titulo}</span>
                </div>
                {tema.videos.length > 0 && (
                  <div className="grid gap-4">
                    {tema.videos.map((video, videoIdx) => (
                      <div
                        key={videoIdx}
                        className="bg-white rounded-md shadow p-3 flex flex-col items-center border border-teal-200"
                      >
                        {/* Si es un video local */}
                        {video.url.startsWith("/") ? (
                          <video controls className="w-full rounded-md max-h-72">
                            <source src={video.url} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                          </video>
                        ) : (
                          // Si es un video de YouTube (iframe)
                          <iframe
                            className="w-full rounded-md max-h-72"
                            src={video.url}
                            title={video.nombre}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )}
                        {/* Si quieres mostrar el nombre del video, descomenta la siguiente línea */}
                        {/* <div className="mt-2 text-sm text-center">{video.nombre}</div> */}
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
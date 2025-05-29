"use client"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mapeo de opciones a estilos de aprendizaje
const tipoPorOpcion = [
	// 1
	["Auditivo", "Lector", "Visual", "Kinestesico"],
	// 2
	["Auditivo", "Visual", "Lector", "Kinestesico"],
	// 3
	["Auditivo", "Visual", "Lector", "Kinestesico"],
	// 4
	["Lector", "Visual", "Kinestesico", "Auditivo"],
	// 5
	["Auditivo", "Lector", "Visual", "Kinestesico"],
	// 6
	["Kinestesico", "Visual", "Lector", "Auditivo"],
	// 7
	["Auditivo", "Visual", "Kinestesico", "Lector"],
	// 8
	["Lector", "Auditivo", "Kinestesico", "Visual"],
	// 9
	["Auditivo", "Visual", "Kinestesico", "Lector"],
	// 10
	["Kinestesico", "Visual", "Auditivo", "Lector"],
	// 11
	["Lector", "Auditivo", "Visual", "Kinestesico"],
	// 12
	["Auditivo", "Visual", "Kinestesico", "Lector"],
	// 13
	["Auditivo", "Lector", "Kinestesico", "Visual"],
	// 14
	["Visual", "Auditivo", "Kinestesico", "Lector"],
	// 15
	["Visual", "Auditivo", "Kinestesico", "Lector"],
	// 16
	["Visual", "Auditivo", "Lector", "Kinestesico"],
]

const preguntas = [
	{
		id: 1,
		texto: "Acabo de terminar una competencia o una prueba y me gustaría recibir una opinión. Me gustaría recibirla:",
		opciones: [
			"De alguien que lo hable conmigo.",
			"Mediante una descripción escrita de mis resultados.",
			"Mediante gráficos que muestren lo que alcancé.",
			"Utilizando ejemplos de lo que he hecho.",
		],
	},
	{
		id: 2,
		texto: "Quiero aprender a jugar un nuevo juego de mesa o de cartas. Yo:",
		opciones: [
			"Escucharía a alguien que lo explicara y haría preguntas.",
			"Utilizaría los diagramas que explican las distintas fases, movimientos y estrategias del juego.",
			"Leería las instrucciones.",
			"Observaría a otros jugar antes de unirme al juego.",
		],
	},
	{
		id: 3,
		texto: "Quiero montar una mesa de madera que viene por partes. Aprendería mejor con:",
		opciones: [
			"Los consejos de alguien que lo haya hecho antes.",
			"Diagramas que muestren cada etapa del montaje.",
			"Las instrucciones escritas que vienen con las piezas de la mesa.",
			"Un vídeo de una persona montando una mesa similar.",
		],
	},
	{
		id: 4,
		texto: "Cuando aprendo:",
		opciones: [
			"Leo libros, artículos y folletos.",
			"Veo patrones en las cosas.",
			"Uso ejemplos y aplicaciones.",
			"Me gusta hablar de las cosas.",
		],
	},
	{
		id: 5,
		texto: "Quiero ahorrar más dinero y decidir entre una serie de opciones. Yo:",
		opciones: [
			"Hablaría con un experto sobre las opciones.",
			"Leería un folleto impreso que describa las opciones en detalle.",
			"Utilizaría gráficos que muestren diferentes opciones para diferentes periodos de tiempo.",
			"Consideraría ejemplos de cada opción utilizando mi información financiera.",
		],
	},
	{
		id: 6,
		texto: "Cuando aprendo de Internet, me gusta:",
		opciones: [
			"Los vídeos que muestran cómo hacer o fabricar algo.",
			"El diseño y las características visuales interesantes.",
			"Descripciones, listas y explicaciones escritas interesantes.",
			"Los canales de audio donde puedo escuchar podcasts o entrevistas.",
		],
	},
	{
		id: 7,
		texto: "Quiero saber más sobre una excursión a la que voy a ir. Yo:",
		opciones: [
			"Hablaría con la persona que planificó la excursión o con otras personas que vayan a hacerla.",
			"Usaría un mapa y vería dónde están los lugares.",
			"Miraría los detalles sobre los aspectos más destacados y las actividades de la excursión.",
			"Leería sobre la excursión en el itinerario.",
		],
	},
	{
		id: 8,
		texto: "Necesito encontrar el camino a una tienda que me recomendó un amigo. Yo:",
		opciones: [
			"Escribiría el nombre de la calle que debo recordar.",
			"Le diría a mi amigo que me diera las indicaciones.",
			"Buscaría dónde está la tienda en relación con algún lugar que conozco.",
			"Usaría un mapa.",
		],
	},
	{
		id: 9,
		texto: "Una página web tiene un vídeo que muestra cómo hacer un gráfico o una tabla especial. Hay una persona hablando, algunas listas y palabras que describen lo que hay que hacer y algunos diagramas. Aprendería más:",
		opciones: [
			"Escuchando.",
			"Viendo los diagramas.",
			"Viendo las acciones.",
			"Leyendo las palabras.",
		],
	},
	{
		id: 10,
		texto: "Quiero aprender a hacer algo nuevo en una computadora. Yo:",
		opciones: [
			"Empezaría a utilizarlo y aprender por ensayo y error.",
			"Seguiría los diagramas de un libro.",
			"Hablaría con personas que conozcan el programa.",
			"Leería las instrucciones escritas que vienen con el programa.",
		],
	},
	{
		id: 11,
		texto: "Tengo un problema en el corazón. Preferiría que el médico:",
		opciones: [
			"Le diera algo que leer para explicar lo que está mal.",
			"Describiera lo que está mal.",
			"Le mostrara un diagrama de lo que está mal.",
			"Utilizara un modelo de plástico para mostrar lo que está mal.",
		],
	},
	{
		id: 12,
		texto: "Prefiero un presentador o un profesor que utilice:",
		opciones: [
			"Preguntas y respuestas, charlas, discusiones en grupo u oradores invitados.",
			"Diagramas, cuadros, mapas o gráficos.",
			"Demostraciones, modelos o sesiones prácticas.",
			"Folletos, libros o lecturas.",
		],
	},
	{
		id: 13,
		texto: "Quiero aprender sobre un nuevo proyecto. Me gustaría pedir:",
		opciones: [
			"Una oportunidad para hablar sobre el proyecto.",
			"Un informe escrito que describa las principales características del proyecto.",
			"Ejemplos en los que el proyecto se haya utilizado con éxito.",
			"Diagramas que muestren las etapas del proyecto con gráficos de beneficios y costes.",
		],
	},
	{
		id: 14,
		texto: "Quiero informarme sobre una casa o un apartamento. Antes de visitarla quisiera:",
		opciones: [
			"Un plano que muestre las habitaciones y un mapa de la zona.",
			"Una conversación con el propietario.",
			"Ver un vídeo de la propiedad.",
			"Una descripción impresa de las habitaciones y las características.",
		],
	},
	{
		id: 15,
		texto: "Quiero aprender a tomar mejores fotos. Yo:",
		opciones: [
			"Utilizaría diagramas que muestren la cámara y lo que hace cada parte.",
			"Haría preguntas y hablaría sobre la cámara y sus características.",
			"Utilizaría ejemplos de fotos buenas y malas mostrando cómo mejorarlas.",
			"Utilizaría las instrucciones escritas sobre lo que hay que hacer.",
		],
	},
	{
		id: 16,
		texto: "A la hora de elegir una carrera o un área de estudio, esto es importante para mí:",
		opciones: [
			"Trabajar con diseños, mapas o gráficos.",
			"Comunicarme con otros a través del diálogo.",
			"Utilizar bien las palabras en las comunicaciones escritas.",
			"Aplicar mis conocimientos en situaciones reales.",
		],
	},
]

function obtenerTipoAprendizaje(respuestas: { [key: number]: string }) {
	const conteo: Record<string, number> = {
		Visual: 0,
		Auditivo: 0,
		Kinestesico: 0,
		Lector: 0,
	}
	preguntas.forEach((pregunta, idx) => {
		const respuesta = respuestas[pregunta.id]
		if (!respuesta) return
		const opcionIdx = pregunta.opciones.indexOf(respuesta)
		const tipo = tipoPorOpcion[idx][opcionIdx]
		conteo[tipo]++
	})
	// Buscar el tipo con mayor puntaje
	const mayor = Object.entries(conteo).reduce(
		(acc, curr) => (curr[1] > acc[1] ? curr : acc),
		["", 0]
	)
	return { tipo: mayor[0], conteo }
}

export default function EncuestaForm() {
	const [respuestas, setRespuestas] = useState<{ [key: number]: string }>({})
	const [enviado, setEnviado] = useState(false)
	const [resultado, setResultado] = useState<{ tipo: string; conteo: Record<string, number> } | null>(null)

	const handleSelect = (preguntaId: number, opcion: string) => {
		setRespuestas({ ...respuestas, [preguntaId]: opcion })
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const res = obtenerTipoAprendizaje(respuestas)
		setResultado(res)
		setEnviado(true)
	}

	return (
		<section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white py-12 md:py-24 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
				<Card className="w-full max-w-xl shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl font-bold text-center text-teal-700">
							Encuesta de Estilo de Aprendizaje
						</CardTitle>
					</CardHeader>
					<CardContent>
						{enviado ? (
							<div>
								<p className="text-center text-xl font-semibold mb-4">
									Tu estilo de aprendizaje principal es:{" "}
									<span className="text-teal-700">{resultado?.tipo}</span>
								</p>
								<div className="mb-4">
									<p className="text-center font-medium">Resultados:</p>
									<ul className="flex flex-wrap justify-center gap-4 mt-2">
										{resultado &&
											Object.entries(resultado.conteo).map(([tipo, valor]) => (
												<li key={tipo} className="bg-teal-100 text-teal-800 rounded px-3 py-1">
													{tipo}: {valor}
												</li>
											))}
									</ul>
								</div>
								{/* Botón para ir a la modalidad recomendada */}
								{resultado?.tipo && (
									<div className="flex flex-col gap-4 mt-6">
										<Link href={`/modalidad/${resultado.tipo.toLowerCase()}`}>
											<Button className="w-full bg-teal-600 hover:bg-teal-700">
												Ver temas recomendados para {resultado.tipo}
											</Button>
										</Link>
										<Link href="/" className="w-full">
											<Button variant="outline" className="w-full">
												Volver al inicio
											</Button>
										</Link>
									</div>
								)}
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-8">
								{preguntas.map((pregunta) => (
									<div key={pregunta.id} className="space-y-2">
										<h4 className="font-semibold">{pregunta.texto}</h4>
										<div className="flex flex-col gap-2">
											{pregunta.opciones.map((opcion) => (
												<label
													key={opcion}
													className="flex items-center space-x-2 cursor-pointer"
												>
													<input
														type="radio"
														name={`pregunta-${pregunta.id}`}
														value={opcion}
														checked={respuestas[pregunta.id] === opcion}
														onChange={() => handleSelect(pregunta.id, opcion)}
														className="accent-teal-600"
														required
													/>
													<span>{opcion}</span>
												</label>
											))}
										</div>
									</div>
								))}
								<Button
									type="submit"
									className="w-full bg-teal-600 hover:bg-teal-700"
									disabled={Object.keys(respuestas).length < preguntas.length}
								>
									Enviar Encuesta
								</Button>
							</form>
						)}
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

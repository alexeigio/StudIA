import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, Users, Clock, ChevronRight } from "lucide-react"

export default function PWeb() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">EstudIA</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Inicio
            </Link>
            <Link href="#cursos" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Cursos
            </Link>
            <Link href="#temarios" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Temarios
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Profesores
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="hidden md:flex">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-teal-600 hover:bg-teal-700">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Descubre tu potencial con nuestros cursos
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explora nuestra amplia selección de cursos diseñados para ayudarte a alcanzar tus metas académicas y
                  profesionales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-teal-600 hover:bg-teal-700">Ver Cursos</Button>
                  <Button variant="outline">Conocer más</Button>
                </div>
              </div>
              <div className="relative h-[200px] lg:h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Estudiantes en el campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="cursos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¡Conócete Más!</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestros cursos están diseñados para adaptarse a tus necesidades y tipo de aprendizaje.
                  Aprende a tu propio ritmo.
                </p>
              </div>
            </div>
            <div className="flex justify-center py-12">
              <Card className="max-w-md transition-all hover:shadow-lg">
                <CardHeader className="p-4">
                  <div className="relative h-[150px] w-full rounded-md overflow-hidden">
                    <Image
                      src={cursos[0].imagen || "/encuesta.png"}
                      alt={cursos[0].titulo}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardTitle className="text-xl mb-2">{cursos[0].titulo}</CardTitle>
                  <CardDescription className="line-clamp-3">{cursos[0].descripcion}</CardDescription>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {cursos[0].duracion}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="mr-1 h-4 w-4" />
                      {cursos[0].estudiantes}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Ver Detalles</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="temarios" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Temarios Detallados</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce el contenido completo de nuestros cursos más populares.
                </p>
              </div>
            </div>

            <Tabs defaultValue="programacion" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="programacion">Kinestésico</TabsTrigger>
                <TabsTrigger value="diseno">Auditivo</TabsTrigger>
                <TabsTrigger value="negocios">Visual</TabsTrigger>
              </TabsList>

              {/* Contenido de los Temarios */}
              <TabsContent value="programacion" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-teal-600" />
                      Desarrollo Web Fullstack
                    </CardTitle>
                    <CardDescription>
                      Duración: 16 semanas | Nivel: Intermedio | Profesor: Dr. Miguel Ángel Rodríguez
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {temarioProgramacion.map((modulo, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="font-medium text-lg mb-2">
                            Módulo {index + 1}: {modulo.titulo}
                          </h3>
                          <ul className="space-y-2">
                            {modulo.temas.map((tema, i) => (
                              <li key={i} className="flex items-start">
                                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600" />
                                <span>{tema}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Inscribirse en este curso</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="diseno" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-teal-600" />
                      Diseño UX/UI Avanzado
                    </CardTitle>
                    <CardDescription>
                      Duración: 12 semanas | Nivel: Avanzado | Profesora: Dra. Laura Martínez
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {temarioDiseno.map((modulo, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="font-medium text-lg mb-2">
                            Módulo {index + 1}: {modulo.titulo}
                          </h3>
                          <ul className="space-y-2">
                            {modulo.temas.map((tema, i) => (
                              <li key={i} className="flex items-start">
                                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600" />
                                <span>{tema}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Inscribirse en este curso</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="negocios" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-teal-600" />
                      Administración de Empresas
                    </CardTitle>
                    <CardDescription>
                      Duración: 14 semanas | Nivel: Básico-Intermedio | Profesor: Dr. Carlos Vega
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {temarioNegocios.map((modulo, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="font-medium text-lg mb-2">
                            Módulo {index + 1}: {modulo.titulo}
                          </h3>
                          <ul className="space-y-2">
                            {modulo.temas.map((tema, i) => (
                              <li key={i} className="flex items-start">
                                <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-teal-600" />
                                <span>{tema}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Inscribirse en este curso</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">
                  ¿Por qué elegirnos?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Educación de calidad para tu futuro
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nuestros cursos están diseñados por expertos en la industria y académicos de renombre para garantizar
                  que recibas la mejor educación posible.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-600" />
                    <span>Profesores con experiencia en la industria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-600" />
                    <span>Contenido actualizado y relevante</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-600" />
                    <span>Certificaciones reconocidas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-600" />
                    <span>Comunidad de estudiantes activa</span>
                  </li>
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700">Conoce a nuestros profesores</Button>
              </div>
              <div className="relative h-[200px] lg:h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/logo.jpg?height=400&width=600"
                  alt="Profesores en el campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              ¿Listo para comenzar tu viaje educativo?
            </h2>
            <p className="max-w-[900px] mx-auto text-teal-100 md:text-xl/relaxed mb-8">
              Únete a miles de estudiantes que ya han transformado sus vidas a través de nuestros cursos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-teal-50">Registrarse Ahora</Button>
              <Button className="text-white border-white hover:bg-teal-700">
                Solicitar Información
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Datos de ejemplo para los cursos
const cursos = [
  {
    titulo: "Responde la encuesta",
    descripcion:
      "Descrubre cual es el tipo de aprendizaje que mejor se adapta a ti y recibe recomendaciones personalizadas.",
    imagen: "/encuesta.png?height=180&width=320",
    duracion: "16 semanas",
    estudiantes: "1,245 estudiantes",
  },
  /*{
    titulo: "Diseño UX/UI Avanzado",
    descripcion:
      "Domina las técnicas avanzadas de diseño de experiencia de usuario e interfaces para crear productos digitales excepcionales.",
    imagen: "/placeholder.svg?height=180&width=320",
    duracion: "12 semanas",
    estudiantes: "987 estudiantes",
  },
  {
    titulo: "Administración de Empresas",
    descripcion:
      "Adquiere los conocimientos fundamentales para gestionar eficientemente una empresa y tomar decisiones estratégicas.",
    imagen: "/placeholder.svg?height=180&width=320",
    duracion: "14 semanas",
    estudiantes: "1,532 estudiantes",
  },*/
]

// Datos de ejemplo para los temarios
const temarioProgramacion = [
  {
    titulo: "Fundamentos de HTML, CSS y JavaScript",
    temas: [
      "Estructura básica de HTML5",
      "Selectores y propiedades CSS",
      "Responsive Design con Flexbox y Grid",
      "Variables, funciones y objetos en JavaScript",
      "DOM y eventos",
    ],
  },
  {
    titulo: "Frontend con React",
    temas: [
      "Componentes y props",
      "Estado y ciclo de vida",
      "Hooks y efectos secundarios",
      "Manejo de formularios",
      "Enrutamiento con React Router",
    ],
  },
  {
    titulo: "Backend con Node.js",
    temas: [
      "Configuración del entorno",
      "Express.js y middlewares",
      "API RESTful",
      "Autenticación y autorización",
      "Conexión a bases de datos",
    ],
  },
  {
    titulo: "Bases de datos",
    temas: [
      "Modelado de datos",
      "SQL con PostgreSQL",
      "NoSQL con MongoDB",
      "Migraciones y seeds",
      "Optimización de consultas",
    ],
  },
]

const temarioDiseno = [
  {
    titulo: "Fundamentos del Diseño UX",
    temas: [
      "Principios de usabilidad",
      "Arquitectura de información",
      "Investigación de usuarios",
      "Personas y journey maps",
      "Pruebas de usabilidad",
    ],
  },
  {
    titulo: "Diseño de Interfaces",
    temas: [
      "Principios de diseño visual",
      "Sistemas de diseño",
      "Tipografía y color",
      "Diseño de componentes",
      "Microinteracciones",
    ],
  },
  {
    titulo: "Herramientas de Diseño",
    temas: [
      "Figma avanzado",
      "Prototipos interactivos",
      "Animaciones y transiciones",
      "Colaboración en equipo",
      "Handoff para desarrolladores",
    ],
  },
  {
    titulo: "Proyectos Prácticos",
    temas: [
      "Rediseño de aplicación móvil",
      "Creación de sistema de diseño",
      "Diseño de producto digital completo",
      "Pruebas con usuarios reales",
      "Presentación de portfolio",
    ],
  },
]

const temarioNegocios = [
  {
    titulo: "Fundamentos de Administración",
    temas: [
      "Historia y teorías de la administración",
      "Proceso administrativo",
      "Planeación estratégica",
      "Organización empresarial",
      "Dirección y liderazgo",
    ],
  },
  {
    titulo: "Marketing y Ventas",
    temas: [
      "Fundamentos de marketing",
      "Investigación de mercados",
      "Estrategias de marketing digital",
      "Técnicas de venta",
      "Servicio al cliente",
    ],
  },
  {
    titulo: "Finanzas Empresariales",
    temas: [
      "Contabilidad básica",
      "Análisis financiero",
      "Presupuestos",
      "Evaluación de proyectos",
      "Fuentes de financiamiento",
    ],
  },
  {
    titulo: "Gestión de Recursos Humanos",
    temas: [
      "Reclutamiento y selección",
      "Capacitación y desarrollo",
      "Evaluación del desempeño",
      "Compensaciones y beneficios",
      "Clima organizacional",
    ],
  },
]

import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Home, 
  Building, 
  Users, 
  GraduationCap, 
  Scale, 
  Handshake, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function ServiciosPage() {
  const servicios = [
    {
      id: 'mediacion-familiar',
      icon: HeartHandshake,
      title: 'Mediación Familiar',
      description: 'Facilitamos el diálogo constructivo en situaciones complejas de dinámica familiar, velando por el bienestar de los menores y el respeto mutuo.',
      items: [
        'Planes de parentalidad y régimen de comunicación',
        'Acuerdos de cuota alimentaria y actualización',
        'Divorcios por presentación conjunta y convenios reguladores',
        'Gestión pacífica de conflictos de convivencia'
      ]
    },
    {
      id: 'mediacion-patrimonial',
      icon: Home,
      title: 'Mediación Patrimonial y Civil',
      description: 'Solución ágil y privada a controversias económicas y de propiedad, evitando el desgaste de un juicio prolongado.',
      items: [
        'División de bienes y liquidación de sociedad conyugal',
        'Disputas sucesorias y distribución de herencias',
        'Incumplimientos contractuales y reclamos por deudas',
        'Conflictos de locación, rescisiones y desalojos'
      ]
    },
    {
      id: 'mediacion-empresarial',
      icon: Building,
      title: 'Mediación Empresarial y Pymes',
      description: 'Preservación de relaciones comerciales y resolución interna de desacuerdos para garantizar la continuidad del negocio.',
      items: [
        'Conflictos entre socios o accionistas',
        'Negociación con proveedores y clientes claves',
        'Protocolos de empresas familiares y sucesión directiva',
        'Restructuración consensual de compromisos comerciales'
      ]
    },
    {
      id: 'mediacion-vecinal',
      icon: Users,
      title: 'Mediación Vecinal y Comunitaria',
      description: 'Abordaje de fricciones cotidianas en consorcios y barrios para recomponer la convivencia y el entorno social.',
      items: [
        'Problemas de límites, medianería y ruidos molestos',
        'Conflictos de convivencia en propiedad horizontal',
        'Uso de espacios comunes y reglamentos de consorcio',
        'Restablecimiento de vías de comunicación comunitaria'
      ]
    },
    {
      id: 'mediacion-educativa',
      icon: GraduationCap,
      title: 'Mediación Educativa e Institucional',
      description: 'Herramientas pedagógicas y jurídicas para la gestión pacífica de diferencias en el ámbito escolar y académico.',
      items: [
        'Prevención y gestión de situaciones de convivencia escolar',
        'Facilitación de canales entre directivos, docentes y familias',
        'Diseño de protocolos de resolución de conflictos institucionales',
        'Capacitación y talleres de comunicación asertiva'
      ]
    },
    {
      id: 'derecho-de-familia',
      icon: Scale,
      title: 'Derecho de Familia',
      description: 'Asesoramiento jurídico integral especializado en relaciones personales y patrimoniales del ámbito familiar.',
      items: [
        'Asesoramiento legal preventivo previo a mediaciones',
        'Homologación judicial de acuerdos alcanzados',
        'Procesos de filiación y adopción',
        'Patrocinio en trámites judiciales de familia'
      ]
    },
    {
      id: 'negociacion',
      icon: Handshake,
      title: 'Negociación Estratégica',
      description: 'Diseño de estrategias de comunicación y negociación asistida para particulares, profesionales y empresas.',
      items: [
        'Análisis de escenarios y mapeo de intereses',
        'Diseño de propuestas de mutuo beneficio (Win-Win)',
        'Acompañamiento en mesas de diálogo complejas',
        'Estrategias de prevención de controversias'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Especialidades y Servicios | Delta Iuris - Centro de Mediación Salta</title>
        <meta 
          name="description" 
          content="Servicios de mediación familiar, patrimonial, empresarial, vecinal, educativa y derecho de familia en Salta. Dirigido por la Dra. Ana Lo Giúdice." 
        />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#FAF7F2] text-[#2C2825] font-sans overflow-hidden">
        
        {/* ================= BANNER DE BIENVENIDA ================= */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
          
          {/* Resplandor ambiental de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#EAE0D0]/50 rounded-full blur-[140px] pointer-events-none" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white text-[#8C5E3C] text-xs font-bold uppercase tracking-[0.2em] border border-[#E2D8C8] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Especialidades</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2C2825] leading-tight">
                Servicios & <span className="text-[#8C5E3C] italic font-normal">Mediaciones</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A524C] font-light leading-relaxed pt-2">
                Brindamos soluciones eficientes, pacíficas y con plena validez legal a través de procesos de mediación personalizados y asesoramiento jurídico integral.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= LISTADO DE SERVICIOS ================= */}
        <section className="py-12 md:py-20 bg-white border-y border-[#E2D8C8]">
          <div className="container-custom">
            <div className="grid gap-10">
              {servicios.map((servicio, index) => {
                const Icon = servicio.icon;
                return (
                  <motion.div
                    key={servicio.id}
                    id={servicio.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="scroll-mt-32 bg-[#FAF7F2] border border-[#E8DFC8] rounded-[2rem] p-7 md:p-10 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Columna Izquierda: Información Principal */}
                      <div className="lg:col-span-5 space-y-5">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white text-[#8C5E3C] flex items-center justify-center border border-[#E2D8C8] shadow-sm">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-serif text-[#2C2825] font-bold leading-snug">
                          {servicio.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-[#5A524C] font-light leading-relaxed">
                          {servicio.description}
                        </p>

                        <div className="pt-2">
                          <a
                            href="https://wa.me/5493875986192"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C5E3C] hover:text-[#734B2E] bg-white hover:bg-[#F5EFE6] px-5 py-3 rounded-xl border border-[#E2D8C8] transition-all shadow-sm"
                          >
                            <span>Solicitar Mediación</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Columna Derecha: Tarjeta de Puntos Clave */}
                      <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-[#E8DFC8]/80 shadow-sm space-y-4">
                        <h3 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-[0.15em] border-b border-[#F0E8DC] pb-3">
                          Principales Asuntos Abordados
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                          {servicio.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <div className="p-1 rounded-lg bg-[#F8F4ED] text-[#8C5E3C] flex-shrink-0 mt-0.5 border border-[#E2D7C5]">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs sm:text-sm text-[#2C2825] font-medium leading-normal">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= BANNER DE LLAMADA A LA ACCIÓN (CTA) ================= */}
        <section className="py-20 bg-[#FAF7F2]">
          <div className="container-custom">
            <div className="bg-[#2C2825] text-white rounded-[2.5rem] p-8 md:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden space-y-6">
              
              {/* Adorno brillante en fondo oscuro */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8C5E3C]/20 rounded-full blur-[80px] pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/10 text-[#E8DFC8] text-xs font-bold uppercase tracking-[0.2em] border border-white/10">
                <Calendar className="w-3.5 h-3.5" />
                <span>Atención Personalizada</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                ¿Desea coordinar una audiencia o consulta jurídica?
              </h2>

              <p className="text-xs sm:text-base text-[#DCD2C2] font-light leading-relaxed max-w-2xl mx-auto">
                Ofrecemos atención en modalidad presencial y virtual con turno previo coordinado con la Dra. Ana Lo Giúdice.
              </p>

              <div className="pt-4">
                <Link 
                  to="/contacto" 
                  className="inline-flex items-center justify-center gap-2.5 bg-[#8C5E3C] hover:bg-[#734B2E] text-white font-medium text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg shadow-[#8C5E3C]/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Agendar Turno de Mediación</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default ServiciosPage;
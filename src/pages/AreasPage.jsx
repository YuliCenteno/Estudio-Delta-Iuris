import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  Home, 
  Building, 
  Users, 
  Scale, 
  Check, 
  ArrowUpRight,
  Sparkles 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function AreasPage() {
  const [activeArea, setActiveArea] = useState('mediacion-familiar');

  const areas = [
    {
      id: 'mediacion-familiar',
      icon: HeartHandshake,
      title: 'Mediación Familiar',
      category: 'Resolución Ágil',
      description: 'Abordaje integral y reservado para la resolución de conflictos del ámbito familiar, resguardando el bienestar emocional y legal del núcleo familiar.',
      items: [
        'Planes de parentalidad y cuidado personal compartidos',
        'Acuerdos sobre régimen de comunicación y contacto',
        'Fijación y actualización de cuotas alimentarias',
        'División convenida de bienes en divorcios y uniones convivenciales'
      ]
    },
    {
      id: 'mediacion-patrimonial',
      icon: Home,
      title: 'Mediación Patrimonial y Civil',
      category: 'Económico e Inmobiliario',
      description: 'Gestión efectiva de disputas de carácter económico e inmobiliario para evitar litigios prolongados y costos excesivos.',
      items: [
        'División de bienes y sociedad conyugal',
        'Partición de herencias y discrepancias sucesorias',
        'Incumplimiento de contratos y cobranzas',
        'Diferencias en contratos de alquileres e inmuebles'
      ]
    },
    {
      id: 'mediacion-empresarial',
      icon: Building,
      title: 'Mediación Empresarial y Corporativa',
      category: 'Negocios y Sociedades',
      description: 'Intervención técnica para la solución consensuada entre socios, directivos y empresas familiares.',
      items: [
        'Desacuerdos entre socios y accionistas',
        'Protocolos de sucesión en empresas de familia',
        'Negociaciones críticas con proveedores y clientes',
        'Reestructuración de pasivos y acuerdos comerciales'
      ]
    },
    {
      id: 'mediacion-vecinal',
      icon: Users,
      title: 'Propiedad Horizontal y Convivencia',
      category: 'Ámbito Consorcial',
      description: 'Canales neutros para resolver tensiones en consorcios y barrios cerrados, restableciendo la buena convivencia.',
      items: [
        'Delimitación de inmuebles, medianería y ruidos molestos',
        'Cumplimiento de reglamentos de copropiedad',
        'Uso y administración de espacios compartidos',
        'Mecanismos directos de diálogo consorcial'
      ]
    },
    {
      id: 'derecho-de-familia',
      icon: Scale,
      title: 'Derecho de Familia y Patrocinio',
      category: 'Asistencia Jurídica',
      description: 'Sostén legal integral para dar validez jurídica a los acuerdos alcanzados y representación especializada.',
      items: [
        'Homologación judicial de acuerdos y convenios',
        'Patrocinio letrado en procesos familiares',
        'Filiación, adopción y régimen tutelar',
        'Planificación patrimonial preventiva'
      ]
    }
  ];

  const currentData = areas.find((a) => a.id === activeArea) || areas[0];

  return (
    <>
      <Helmet>
        <title>Áreas de Especialidad | Delta Iuris - Centro de Mediación Salta</title>
        <meta name="description" content="Especialidades en mediación familiar, patrimonial, empresarial y derecho de familia en Salta con la Dra. Ana Lo Giúdice." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#FAF7F2] text-[#2C2825] font-sans overflow-hidden">
        
        {/* ================= ENCABEZADO PRINCIPAL ================= */}
        <section className="relative pt-36 pb-12 md:pt-44 md:pb-16">
          
          {/* Resplandor suave de fondo */}
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
                <span>Especialización Profesional</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2C2825] leading-tight">
                Campos de <span className="text-[#8C5E3C] italic font-normal">Actuación</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A524C] font-light leading-relaxed pt-2">
                Diseñamos soluciones a medida basadas en la confidencialidad, la celeridad y la validez legal para cada tipo de conflicto.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= SELECTOR INTERACTIVO Y DETALLE ================= */}
        <section className="pb-20 md:pb-28">
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Menú de Navegación Lateral (Pestañas) */}
              <div className="lg:col-span-5 space-y-3">
                {areas.map((area) => {
                  const Icon = area.icon;
                  const isActive = activeArea === area.id;
                  return (
                    <button
                      key={area.id}
                      onClick={() => setActiveArea(area.id)}
                      className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                        isActive
                          ? 'bg-[#2C2825] text-white border-[#2C2825] shadow-lg scale-[1.01]'
                          : 'bg-white/80 hover:bg-white text-[#2C2825] border-[#E8DFC8] shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors ${
                          isActive 
                            ? 'bg-[#8C5E3C] text-white' 
                            : 'bg-[#FAF7F2] text-[#8C5E3C] border border-[#E8DFC8]'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className={`text-xs uppercase tracking-wider font-semibold mb-0.5 ${
                            isActive ? 'text-[#E8DFC8]' : 'text-[#8C5E3C]'
                          }`}>
                            {area.category}
                          </p>
                          <h3 className="font-serif font-semibold text-base sm:text-lg">
                            {area.title}
                          </h3>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Panel de Detalle Principal */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentData.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#E8DFC8] shadow-sm relative overflow-hidden"
                  >
                    {/* Elemento de brillo sutil en esquina */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF7F2] rounded-full blur-2xl pointer-events-none" />

                    <span className="inline-block px-3.5 py-1 rounded-xl bg-[#FAF7F2] text-[#8C5E3C] border border-[#E8DFC8] text-xs font-bold uppercase tracking-wider mb-4">
                      {currentData.category}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2825] font-bold mb-4">
                      {currentData.title}
                    </h2>

                    <p className="text-[#5A524C] text-sm sm:text-base leading-relaxed mb-8 font-light">
                      {currentData.description}
                    </p>

                    <h4 className="text-xs uppercase tracking-widest text-[#2C2825] font-bold mb-4 border-b border-[#F0E8DC] pb-2">
                      Puntos Clave de Abordaje
                    </h4>

                    <ul className="space-y-3.5 mb-8">
                      {currentData.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5A524C]">
                          <span className="p-1 rounded-lg bg-[#FAF7F2] text-[#8C5E3C] border border-[#E8DFC8] mt-0.5 flex-shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-[#F0E8DC] flex items-center justify-between">
                      <a
                        href="https://wa.me/5493875986192"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-[#8C5E3C] hover:bg-[#734B2E] text-white px-6 py-3.5 rounded-xl text-xs font-medium uppercase tracking-wider shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <span>Iniciar Consulta Privada</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default AreasPage;
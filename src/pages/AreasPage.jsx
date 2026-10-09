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
import { siteConfig } from '@/lib/siteConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function AreasPage() {
  const [activeArea, setActiveArea] = useState('familia');
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent('Hola Dra. Adriana, quisiera realizar una consulta.')}`;

  const areas = [
    {
      id: 'familia',
      icon: HeartHandshake,
      title: 'Derecho de Familia',
      category: 'Familia',
      description: 'Asesoramiento en asuntos familiares y patrimoniales vinculados con las relaciones de familia.',
      items: [
        'Sucesiones',
        'Divorcios',
        'Alimentos',
        'Impugnaciones y filiaciones'
      ]
    },
    {
      id: 'laboral',
      icon: Home,
      title: 'Laboral y ART',
      category: 'Derecho Laboral',
      description: 'Asesoramiento en asuntos laborales y situaciones relacionadas con accidentes de trabajo y ART.',
      items: [
        'Despidos',
        'Asuntos laborales',
        'ART'
      ]
    },
    {
      id: 'contratos',
      icon: Building,
      title: 'Contratos',
      category: 'Asesoramiento contractual',
      description: 'Asesoramiento en instrumentos contractuales para empresas y profesionales.',
      items: [
        'Contratos para empresas',
        'Prestación de servicios profesionales',
        'Rescisiones y cláusulas anexas',
        'Contratos de locación'
      ]
    },
    {
      id: 'salud',
      icon: Users,
      title: 'Derecho a la Salud',
      category: 'Fuero Federal',
      description: 'Asesoramiento en la protección del derecho a la salud.',
      items: [
        'Amparos de salud',
        'Actuación en el Fuero Federal'
      ]
    },
    {
      id: 'consumidor',
      icon: Scale,
      title: 'Defensa del Consumidor',
      category: 'Consumidores',
      description: 'Asesoramiento en reclamos y consultas de defensa del consumidor.',
      items: [
        'Defensa del consumidor',
        'Tarjetas de crédito'
      ]
    },
    {
      id: 'procuracion',
      icon: Home,
      title: 'Procuración y Gestorías',
      category: 'CABA',
      description: 'Servicio de procuración y gestorías en la Ciudad Autónoma de Buenos Aires.',
      items: [
        'Procuración en CABA',
        'Gestorías en CABA'
      ]
    }
  ];

  const currentData = areas.find((a) => a.id === activeArea) || areas[0];

  return (
    <>
      <Helmet>
        <title>Áreas de práctica | Dra. Adriana Elena Aranda</title>
        <meta name="description" content="Áreas de práctica de la Dra. Adriana Elena Aranda: Familia, Laboral y ART, Contratos, Salud, Defensa del Consumidor y procuración en CABA." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#F8F7F4] text-[#252422] font-sans overflow-hidden">
        
        {/* ================= ENCABEZADO PRINCIPAL ================= */}
        <section className="relative pt-36 pb-12 md:pt-44 md:pb-16">
          
          {/* Resplandor suave de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#EBE7E0]/50 rounded-full blur-[140px] pointer-events-none" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white text-[#756E64] text-xs font-bold uppercase tracking-[0.2em] border border-[#E5E1D9] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Áreas de práctica</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#252422] leading-tight">
                Áreas de <span className="text-[#756E64] italic font-normal">práctica</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5D5954] font-light leading-relaxed pt-2">
                Asesoramiento jurídico profesional en Formosa y CABA.
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
                          ? 'bg-[#252422] text-white border-[#252422] shadow-lg scale-[1.01]'
                          : 'bg-white/80 hover:bg-white text-[#252422] border-[#E5E1D9] shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors ${
                          isActive 
                            ? 'bg-[#756E64] text-white' 
                            : 'bg-[#F8F7F4] text-[#756E64] border border-[#E5E1D9]'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className={`text-xs uppercase tracking-wider font-semibold mb-0.5 ${
                            isActive ? 'text-[#E5E1D9]' : 'text-[#756E64]'
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
                    className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#E5E1D9] shadow-sm relative overflow-hidden"
                  >
                    {/* Elemento de brillo sutil en esquina */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8F7F4] rounded-full blur-2xl pointer-events-none" />

                    <span className="inline-block px-3.5 py-1 rounded-xl bg-[#F8F7F4] text-[#756E64] border border-[#E5E1D9] text-xs font-bold uppercase tracking-wider mb-4">
                      {currentData.category}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-serif text-[#252422] font-bold mb-4">
                      {currentData.title}
                    </h2>

                    <p className="text-[#5D5954] text-sm sm:text-base leading-relaxed mb-8 font-light">
                      {currentData.description}
                    </p>

                    <h4 className="text-xs uppercase tracking-widest text-[#252422] font-bold mb-4 border-b border-[#EAE6DF] pb-2">
                      Puntos Clave de Abordaje
                    </h4>

                    <ul className="space-y-3.5 mb-8">
                      {currentData.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#5D5954]">
                          <span className="p-1 rounded-lg bg-[#F8F7F4] text-[#756E64] border border-[#E5E1D9] mt-0.5 flex-shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-[#756E64] hover:bg-[#5E584F] text-white px-6 py-3.5 rounded-xl text-xs font-medium uppercase tracking-wider shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <span>Consultar por WhatsApp</span>
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
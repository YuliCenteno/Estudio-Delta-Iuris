import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Building, 
  Users, 
  Scale, 
  ShieldCheck,
  MapPin,
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
      id: 'derecho-de-familia',
      icon: HeartHandshake,
      title: 'Derecho de Familia',
      description: 'Asesoramiento jurídico en asuntos familiares y patrimoniales.',
      items: [
        'Sucesiones',
        'Divorcios',
        'Alimentos',
        'Impugnaciones y filiaciones'
      ]
    },
    {
      id: 'laboral-art',
      icon: Users,
      title: 'Laboral y ART',
      description: 'Asesoramiento en derecho laboral, accidentes de trabajo y ART.',
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
      description: 'Asesoramiento en contratos para empresas, profesionales y locaciones.',
      items: [
        'Contratos para empresas',
        'Prestación de servicios profesionales',
        'Rescisiones y cláusulas anexas',
        'Contratos de locación'
      ]
    },
    {
      id: 'derecho-salud',
      icon: ShieldCheck,
      title: 'Derecho a la Salud',
      description: 'Asesoramiento en amparos de salud en el Fuero Federal.',
      items: [
        'Amparos de salud',
        'Fuero Federal'
      ]
    },
    {
      id: 'defensa-consumidor',
      icon: Scale,
      title: 'Defensa del Consumidor',
      description: 'Asesoramiento en defensa del consumidor y tarjetas de crédito.',
      items: [
        'Defensa del consumidor',
        'Tarjetas de crédito'
      ]
    },
    {
      id: 'procuracion-gestorias',
      icon: MapPin,
      title: 'Procuración y Gestorías en CABA',
      description: 'Servicio de procuración y gestorías en la Ciudad Autónoma de Buenos Aires.',
      items: [
        'Procuración en CABA',
        'Gestorías en CABA'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios legales | Dra. Adriana Elena Aranda</title>
        <meta 
          name="description" 
          content="Servicios legales en Derecho de Familia, Laboral y ART, Contratos, Salud, Defensa del Consumidor y procuración en CABA." 
        />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#F8F7F4] text-[#252422] font-sans overflow-hidden">
        
        {/* ================= BANNER DE BIENVENIDA ================= */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
          
          {/* Resplandor ambiental de fondo */}
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
                <span>Servicios legales</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#252422] leading-tight">
                Servicios <span className="text-[#756E64] italic font-normal">profesionales</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5D5954] font-light leading-relaxed pt-2">
                Asesoramiento jurídico independiente con atención en Formosa y CABA.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= LISTADO DE SERVICIOS ================= */}
        <section className="py-12 md:py-20 bg-white border-y border-[#E5E1D9]">
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
                    className="scroll-mt-32 bg-[#F8F7F4] border border-[#E5E1D9] rounded-[2rem] p-7 md:p-10 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Columna Izquierda: Información Principal */}
                      <div className="lg:col-span-5 space-y-5">
                        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white text-[#756E64] flex items-center justify-center border border-[#E5E1D9] shadow-sm">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-serif text-[#252422] font-bold leading-snug">
                          {servicio.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-[#5D5954] font-light leading-relaxed">
                          {servicio.description}
                        </p>

                        <div className="pt-2">
                          <Link
                            to="/contacto"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#756E64] hover:text-[#5E584F] bg-white hover:bg-[#EFEBE4] px-5 py-3 rounded-xl border border-[#E5E1D9] transition-all shadow-sm"
                          >
                            <span>Realizar una consulta</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Columna Derecha: Tarjeta de Puntos Clave */}
                      <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-[#E5E1D9]/80 shadow-sm space-y-4">
                        <h3 className="text-xs font-bold text-[#756E64] uppercase tracking-[0.15em] border-b border-[#EAE6DF] pb-3">
                          Asuntos comprendidos
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                          {servicio.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <div className="p-1 rounded-lg bg-[#F1EEE8] text-[#756E64] flex-shrink-0 mt-0.5 border border-[#E5E1D9]">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs sm:text-sm text-[#252422] font-medium leading-normal">
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
        <section className="py-20 bg-[#F8F7F4]">
          <div className="container-custom">
            <div className="bg-[#252422] text-white rounded-[2.5rem] p-8 md:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden space-y-6">
              
              {/* Adorno brillante en fondo oscuro */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#756E64]/20 rounded-full blur-[80px] pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/10 text-[#E5E1D9] text-xs font-bold uppercase tracking-[0.2em] border border-white/10">
                <Calendar className="w-3.5 h-3.5" />
                <span>Atención profesional</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                ¿Necesitás realizar una consulta jurídica?
              </h2>

              <p className="text-xs sm:text-base text-[#DDD9D2] font-light leading-relaxed max-w-2xl mx-auto">
                Contactá a la Dra. Adriana Elena Aranda para consultar sobre las áreas de práctica y la modalidad de atención.
              </p>

              <div className="pt-4">
                <Link 
                  to="/contacto" 
                  className="inline-flex items-center justify-center gap-2.5 bg-[#756E64] hover:bg-[#5E584F] text-white font-medium text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg shadow-[#756E64]/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Contactar</span>
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
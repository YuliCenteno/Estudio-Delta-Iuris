import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function NosotrosPage() {
  const valores = [
    {
      icon: HeartHandshake,
      title: 'Empatía y Diálogo',
      description: 'Facilitamos la comunicación efectiva entre las partes para alcanzar acuerdos pacíficos, sostenibles y mutuamente beneficiosos.'
    },
    {
      icon: ShieldCheck,
      title: 'Confidencialidad y Rigor',
      description: 'Garantizamos absoluta reserva en el tratamiento de los conflictos familiares, patrimoniales y corporativos.'
    },
    {
      icon: Award,
      title: 'Excelencia Académica',
      description: 'Respaldados por la práctica docente universitaria y la capacitación continua en métodos alternativos de resolución de disputas.'
    }
  ];

  const trayectorias = [
    'Abogada egresada de la Universidad Nacional de Salta (UNSa).',
    'Mediadora Privada matriculada (Reg. Nº 187) con amplia experiencia en conflictos familiares y patrimoniales.',
    'Profesora Universitaria en Ciencias Jurídicas.',
    'Especialista en técnicas de negociación, mediación educativa, empresarial y vecinal.',
    'Promotora de la cultura de paz y solución prejudicial de controversias en la provincia de Salta.'
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Delta Iuris - Dra. Ana Lo Giúdice</title>
        <meta 
          name="description" 
          content="Conozca Delta Iuris, Centro de Mediación y Estudio Jurídico en Salta dirigido por la Dra. Ana Lo Giúdice. Especialistas en mediación familiar, patrimonial y resolución de conflictos." 
        />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#FAF7F2] text-[#2C2825] font-sans overflow-hidden">
        
        {/* ================= ENCABEZADO PRINCIPAL ================= */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
          
          {/* Fondo y Resplandor Orgánico */}
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
                <span>Institucional</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2C2825] leading-tight">
                Sobre <span className="text-[#8C5E3C] italic font-normal">Delta Iuris</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5A524C] font-light leading-relaxed pt-2">
                Un espacio dedicado a la resolución pacífica, ágil e integral de conflictos, donde el diálogo y el rigor jurídico convergen para brindar soluciones duraderas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= PERFIL PROFESIONAL - DRA. ANA LO GIÚDICE ================= */}
        <section className="py-16 md:py-24 bg-white border-y border-[#E2D8C8]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              
              {/* TARJETA / FOTO DIRECCIÓN */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
              >
                <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-[2rem] border border-[#E8DFC8] shadow-xl shadow-[#2C2825]/5 space-y-6">
                  
                  {/* Foto Ovalada Suave Proporcional */}
                  <div className="w-36 h-48 sm:w-44 sm:h-56 mx-auto rounded-[2.5rem] overflow-hidden border-2 border-[#8C5E3C]/30 bg-[#F5EFE6] shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                      alt="Dra. Ana Lo Giúdice - Directora de Delta Iuris"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Datos del Encabezado */}
                  <div className="text-center space-y-1 pt-2 border-t border-[#E5DCD0]">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C5E3C] block pt-4">
                      Dirección & Liderazgo
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#2C2825]">
                      Dra. Ana Lo Giúdice
                    </h3>
                    <p className="text-xs text-[#736B63] font-medium">
                      Directora General · Abogada y Mediadora
                    </p>
                  </div>

                  {/* Badge de Matrícula */}
                  <div className="p-3 bg-white rounded-xl border border-[#E2D8C8] text-center">
                    <span className="text-xs text-[#8C5E3C] font-semibold tracking-wide flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      Centro de Mediación Privada Reg. Nº 187
                    </span>
                  </div>

                </div>
              </motion.div>

              {/* TEXTO DE PRESENTACIÓN Y CREDENCIALES */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C5E3C] block">
                    Trayectoria y Visión
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2825] leading-snug">
                    Compromiso con el Consenso y la Excelencia Jurídica
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#5A524C] font-light leading-relaxed">
                  <p>
                    <strong className="font-semibold text-[#2C2825]">DELTA IURIS</strong> nace bajo la visión de la <strong className="font-semibold text-[#2C2825]">Dra. Ana Lo Giúdice</strong> con el propósito de transformar la manera en que se gestionan los desacuerdos legales y personales en Salta. Entendemos que detrás de cada expediente o controversia existen relaciones humanas y proyectos que requieren un abordaje empático, celeridad y resguardo institucional.
                  </p>
                  <p>
                    Como <strong className="font-semibold text-[#2C2825]">Profesora Universitaria en Ciencias Jurídicas</strong> y especialista en mediación privada, la Dra. Lo Giúdice combina el rigor técnico con metodologías avanzadas de negociación participativa, permitiendo que las partes retomen el control de sus decisiones sin la necesidad de prolongar contiendas judiciales innecesarias.
                  </p>
                </div>

                {/* Lista de Logros y Credenciales */}
                <div className="pt-4 space-y-3 border-t border-[#F0E8DC]">
                  {trayectorias.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-lg bg-[#F8F4ED] text-[#8C5E3C] flex-shrink-0 mt-0.5 border border-[#E2D7C5]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#2C2825] font-medium leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= SECCIÓN DE VALORES INSTITUCIONALES ================= */}
        <section className="py-20 bg-[#FAF7F2]">
          <div className="container-custom">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5E3C] bg-white px-4 py-1.5 rounded-xl border border-[#E2D8C8]">
                Nuestra Filosofía
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C2825]">
                Principios Guía
              </h2>
              <p className="text-xs sm:text-sm text-[#736B63] font-light leading-relaxed">
                Fundamentamos nuestra labor en pilares éticos y profesionales que garantizan seguridad jurídica y tranquilidad a quienes depositan su confianza en nosotros.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {valores.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white p-8 rounded-[2rem] border border-[#E8DFC8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#F8F4ED] text-[#8C5E3C] border border-[#E2D7C5] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-[#2C2825]">
                        {v.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-[#736B63] font-light leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default NosotrosPage;
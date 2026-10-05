import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  FileCheck2,
  Calendar,
  Sparkles,
  HeartHandshake,
  Building2,
  Scale,
  Briefcase
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function HomePage() {
  const pilares = [
    {
      title: 'Solvencia Legal & Confidencialidad',
      desc: 'Asesoramiento letrado integral y procesos de mediación bajo estricto secreto profesional.',
      icon: ShieldCheck,
    },
    {
      title: 'Resolución Eficiente',
      desc: 'Buscamos la vía más rápida y efectiva para resolver controversias, evitando desgastes innecesarios.',
      icon: Clock,
    },
    {
      title: 'Seguridad Jurídica Total',
      desc: 'Convenios con la fuerza de una sentencia judicial y patrocinio en litigios de alta complejidad.',
      icon: FileCheck2,
    }
  ];

  const serviciosPrincipales = [
    {
      id: '01',
      title: 'Centro de Mediación Privada',
      subtitle: 'Registro Oficial Nº 187',
      desc: 'Espacio neutral para la resolución pacífica de conflictos familiares, patrimoniales y societarios mediante acuerdos de cumplimiento obligatorio y rápida homologación.',
      icon: HeartHandshake,
      link: '/servicios'
    },
    {
      id: '02',
      title: 'Estudio Jurídico Integral',
      subtitle: 'Patrocinio & Asesoramiento',
      desc: 'Representación legal especializada en Derecho de Familia, Sucesiones, Derecho Civil, Comercial y Corporativo en la provincia de Salta.',
      icon: Scale,
      link: '/areas'
    }
  ];

  const especialidades = [
    {
      title: 'Derecho de Familia & Mediación Familiar',
      desc: 'Divorcios, convenios reguladores, planes de parentalidad, régimen de comunicación y fijación de alimentos.',
      icon: HeartHandshake
    },
    {
      title: 'Derecho Civil & Mediación Patrimonial',
      desc: 'Sucesiones, división de condominios, contratos, desalojos, reclamos por daños y cobro de deudas.',
      icon: Briefcase
    },
    {
      title: 'Derecho Societario & Consorcios',
      desc: 'Resolución de conflictos entre socios, acuerdos de gobernanza familiar y mediación en propiedad horizontal.',
      icon: Building2
    },
    {
      title: 'Homologación Judicial de Acuerdos',
      desc: 'Validación e inscripción de convenios privados ante los tribunales para otorgarles plena eficacia ejecutiva.',
      icon: CheckCircle2
    }
  ];

  return (
    <>
      <Helmet>
        <title>Delta Iuris | Estudio Jurídico & Centro de Mediación Privada en Salta</title>
        <meta
          name="description"
          content="Estudio Jurídico y Centro de Mediación Privada en Salta dirigido por la Dra. Ana Lo Giúdice. Solución integral a conflictos familiares, civiles y comerciales."
        />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#FAF7F2] text-[#2C2825] font-sans overflow-hidden">
        
        {/* ================= HERO SECTION CÁLIDO & INSTITUCIONAL ================= */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          
          {/* Fondo y Resplandor Orgánico */}
          <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-[#EAE0D0]/50 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8C5E3C]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              
              {/* IZQUIERDA: MENSAJE DUAL (ESTUDIO + MEDIACIÓN) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-7"
              >
                {/* Badge Redondeado Suave */}
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-[#EAE3D2] text-[#8C5E3C] text-xs font-semibold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#8C5E3C]" />
                  <span>Estudio Jurídico & Centro de Mediación Privada · Reg. Nº 187</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2C2825] font-bold leading-[1.18] tracking-tight">
                  Excelencia legal y la vía pacífica hacia <span className="text-[#8C5E3C] italic font-normal">soluciones definitivas.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#5A524C] font-light leading-relaxed max-w-xl">
                  Unimos la firmeza del patrocinio jurídico especializado con la agilidad y empatía de la mediación privada, garantizando respaldo técnico y eficacia legal.
                </p>

                {/* BOTONES PRINCIPALES CÁLIDOS Y REDONDEADOS */}
                <div className="flex flex-wrap gap-3.5 pt-3">
                  <Link 
                    to="/contacto" 
                    className="inline-flex items-center justify-center gap-2.5 bg-[#8C5E3C] hover:bg-[#734B2E] text-white font-medium text-xs uppercase tracking-wider px-7 py-4 rounded-2xl shadow-lg shadow-[#8C5E3C]/20 transition-all hover:scale-[1.01] active:scale-[0.99] text-center"
                  >
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>Solicitar Consulta o Turno</span>
                  </Link>

                  <Link 
                    to="/servicios" 
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5EFE6] border border-[#DCD2C2] text-[#2C2825] font-medium text-xs uppercase tracking-wider px-7 py-4 rounded-2xl shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] text-center"
                  >
                    <span>Servicios Legales</span>
                    <ArrowRight className="w-4 h-4 text-[#8C5E3C] flex-shrink-0" />
                  </Link>
                </div>

                {/* DATOS DESTACADOS */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E5DCD0] mt-8">
                  <div className="p-3.5 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E8DFC8]/60 text-center">
                    <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#8C5E3C]">100%</span>
                    <span className="text-[10px] sm:text-[11px] text-[#736B63] uppercase tracking-wider font-semibold">Confidencial</span>
                  </div>
                  <div className="p-3.5 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E8DFC8]/60 text-center">
                    <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#2C2825]">Validez</span>
                    <span className="text-[10px] sm:text-[11px] text-[#736B63] uppercase tracking-wider font-semibold">Ejecutiva & Legal</span>
                  </div>
                  <div className="p-3.5 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E8DFC8]/60 text-center">
                    <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#2C2825]">Atención</span>
                    <span className="text-[10px] sm:text-[11px] text-[#736B63] uppercase tracking-wider font-semibold">Presencial / Virtual</span>
                  </div>
                </div>
              </motion.div>

              {/* DERECHA: TARJETA DE DIRECCIÓN GENERAL OPTIMIZADA */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
              >
                <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-[#E8DFC8] shadow-xl shadow-[#2C2825]/5 space-y-6 relative overflow-hidden">
                  
                  {/* Encabezado: Foto e Información */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-[#F0E8DC] pb-5 text-center sm:text-left">
                    
                    {/* Marco de Foto Ovalado Proporcional */}
                    <div className="w-24 h-32 rounded-[2rem] overflow-hidden border-2 border-[#8C5E3C]/30 flex-shrink-0 bg-[#F5EFE6] shadow-sm">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" 
                        alt="Dra. Ana Lo Giúdice" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Nombre y Títulos */}
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C5E3C] block">
                        Dirección General
                      </span>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2C2825] leading-snug">
                        Dra. Ana Lo Giúdice
                      </h2>
                      <p className="text-xs text-[#736B63] font-normal leading-relaxed">
                        Abogada · Mediadora Privada · Docente Universitaria
                      </p>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-xs sm:text-sm text-[#5A524C] font-light leading-relaxed">
                    Profesional en Derecho y Resolución Alternativa de Conflictos. Brindamos asesoramiento integral y conducción imparcial de mediaciones para arribar a soluciones sólidas en Salta.
                  </p>

                  {/* Puntos Clave */}
                  <ul className="space-y-2.5 text-xs text-[#2C2825] font-medium">
                    <li className="flex items-center gap-2.5">
                      <div className="p-1 rounded-lg bg-[#F8F4ED] text-[#8C5E3C] flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>Mediadora Registrada Nº 187 en Salta</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="p-1 rounded-lg bg-[#F8F4ED] text-[#8C5E3C] flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>Patrocinio Letrado & Homologación Judicial</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="p-1 rounded-lg bg-[#F8F4ED] text-[#8C5E3C] flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>Audiencias Presenciales y Modalidad Virtual</span>
                    </li>
                  </ul>

                  {/* Botón de Perfil */}
                  <div className="pt-1">
                    <Link 
                      to="/nosotros" 
                      className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold text-[#8C5E3C] hover:text-[#734B2E] bg-[#F8F4ED] hover:bg-[#EAE0D0] w-full px-5 py-3 rounded-xl transition-all text-center"
                    >
                      <span>Conocer Perfil Profesional</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= PILARES DESTACADOS ================= */}
        <section className="py-16 bg-[#F2ECE1] border-y border-[#E2D8C8]">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {pilares.map((pilar, idx) => {
                const Icon = pilar.icon;
                return (
                  <div key={idx} className="bg-white p-7 rounded-2xl border border-[#E8DFC8] shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-[#F8F4ED] text-[#8C5E3C] rounded-xl border border-[#E2D7C5] flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#2C2825] mb-1">
                        {pilar.title}
                      </h3>
                      <p className="text-xs text-[#736B63] font-light leading-relaxed">
                        {pilar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= BLOQUE DUAL: SERVICIOS PRINCIPALES ================= */}
        <section className="py-20 bg-[#FAF7F2]">
          <div className="container-custom">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5E3C] bg-white px-4 py-1.5 rounded-xl border border-[#E2D8C8]">
                Propuesta de Valor
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C2825]">
                Dos Enfoques Complementarios
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviciosPrincipales.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div 
                    key={srv.id} 
                    className="bg-white p-8 rounded-[2rem] border border-[#E8DFC8] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="p-3.5 bg-[#F8F4ED] text-[#8C5E3C] rounded-xl border border-[#E2D7C5]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs uppercase tracking-widest font-bold text-[#8C5E3C] bg-[#F8F4ED] px-3.5 py-1 rounded-xl border border-[#E2D7C5]">
                          {srv.subtitle}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-[#2C2825]">
                        {srv.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#736B63] font-light leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#F0E8DC]">
                      <Link 
                        to={srv.link} 
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#8C5E3C] hover:text-[#734B2E] transition-colors"
                      >
                        <span>Saber Más</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= ÁREAS DE PRÁCTICA ================= */}
        <section className="py-20 bg-[#F2ECE1] border-t border-[#E2D8C8]">
          <div className="container-custom">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C5E3C] block mb-2">
                  Especialización
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C2825]">
                  Campos de Actuación
                </h2>
              </div>
              <Link 
                to="/areas" 
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#8C5E3C] hover:text-[#734B2E] bg-white px-5 py-2.5 rounded-xl border border-[#E2D8C8] shadow-sm transition-all"
              >
                <span>Ver Todas las Áreas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {especialidades.map((esp, idx) => {
                const Icon = esp.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white p-8 rounded-[2rem] border border-[#E8DFC8] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="p-3 rounded-xl bg-[#F8F4ED] text-[#8C5E3C] border border-[#E2D7C5] w-fit">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-xl font-serif font-bold text-[#2C2825] group-hover:text-[#8C5E3C] transition-colors">
                        {esp.title}
                      </h3>

                      <p className="text-xs md:text-sm text-[#736B63] font-light leading-relaxed">
                        {esp.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#F0E8DC]">
                      <Link 
                        to="/areas" 
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#2C2825] group-hover:text-[#8C5E3C] transition-colors"
                      >
                        <span>Consultar por esta área</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
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

export default HomePage;
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Laptop, Sparkles, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

function ContactoPage() {
  return (
    <>
      <Helmet>
        <title>Contacto | Delta Iuris - Centro de Mediación y Estudio Jurídico Salta</title>
        <meta name="description" content="Coordine una consulta presencial o virtual con la Dra. Ana Lo Giúdice en Delta Iuris. Mediación familiar, patrimonial y asesoramiento legal en Salta." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#FAF7F2] text-[#2C2825] font-sans overflow-hidden">
        
        {/* ================= ENCABEZADO PRINCIPAL ================= */}
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
                <span>Solicitud de Turnos y Consultas</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2C2825] leading-tight">
                Ponte en <span className="text-[#8C5E3C] italic font-normal">Contacto</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A524C] font-light leading-relaxed pt-2">
                Comuníquese con la Dra. Ana Lo Giúdice para coordinar una audiencia de mediación o recibir asesoramiento jurídico integral.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= FORMULARIO Y DATOS DE CONTACTO ================= */}
        <section className="pb-20 md:pb-28">
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Formulario de Contacto */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="bg-white border border-[#E8DFC8] rounded-[2rem] p-7 md:p-10 shadow-sm">
                  <div className="space-y-2 mb-8 border-b border-[#F0E8DC] pb-6">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2825]">
                      Formulario de Consulta
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5A524C] font-light">
                      Déjenos su mensaje y nos pondremos en contacto a la brevedad para coordinar su turno o resolver su inquietud.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Tarjeta de Información de Contacto */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-[#2C2825] text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden space-y-8">
                  
                  {/* Resplandor decorativo */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#8C5E3C]/20 rounded-full blur-[60px] pointer-events-none" />

                  <h2 className="text-2xl font-serif font-bold text-white border-b border-white/10 pb-4">
                    Información de Contacto
                  </h2>

                  <div className="space-y-6 text-sm font-light">
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-white/10 text-[#E8DFC8] border border-white/10 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-base">Ubicación</h3>
                        <p className="text-[#DCD2C2] mt-0.5">Ciudad de Salta, Argentina</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-white/10 text-[#E8DFC8] border border-white/10 flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-base">Teléfono / WhatsApp</h3>
                        <a 
                          href="https://wa.me/5493875986192" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#E8DFC8] hover:underline flex items-center gap-1.5 mt-0.5 font-medium"
                        >
                          <span>387 598-6192</span>
                          <MessageCircle className="w-4 h-4 text-[#8C5E3C]" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-white/10 text-[#E8DFC8] border border-white/10 flex-shrink-0">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-base">Modalidad de Atención</h3>
                        <p className="text-[#DCD2C2] mt-0.5">Presencial y Virtual<br /><span className="text-xs opacity-80">(Únicamente con turno previo)</span></p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-white/10 text-[#E8DFC8] border border-white/10 flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-base">Correo Electrónico</h3>
                        <p className="text-[#DCD2C2] mt-0.5">contacto@deltaiuris.com.ar</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-white/10 text-[#E8DFC8] border border-white/10 flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-base">Profesional a Cargo</h3>
                        <p className="text-[#DCD2C2] mt-0.5">Dra. Ana Lo Giúdice<br /><span className="text-xs text-[#E8DFC8]/80">Abogada · Mediadora Privada</span></p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mapa con coordenadas del centro de Salta */}
                <div className="rounded-[2rem] overflow-hidden h-60 shadow-sm border border-[#E8DFC8] relative">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-65.4217%2C-24.7959%2C-65.4017%2C-24.7759&layer=mapnik&marker=-24.7859,-65.4117"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Ubicación de Delta Iuris en Salta"
                  />
                </div>

              </motion.div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default ContactoPage;
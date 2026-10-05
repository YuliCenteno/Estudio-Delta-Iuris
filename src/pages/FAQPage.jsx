import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Qué es la mediación y para qué sirve?',
      answer: 'La mediación es un método alternativo y voluntario de resolución de conflictos en el cual un tercero neutral e imparcial (el mediador) ayuda a las partes involucradas a dialogar, negociar y alcanzar un acuerdo mutuamente satisfactorio sin necesidad de ir a un juicio.'
    },
    {
      question: '¿Qué validez legal tienen los acuerdos logrados en mediación?',
      answer: 'Los acuerdos firmados en el Centro de Mediación Delta Iuris tienen plena validez legal y ejecutoriedad. Una vez homologados o firmados bajo la normativa vigente, poseen la misma fuerza ejecutiva que una sentencia judicial.'
    },
    {
      question: '¿Qué tipos de mediación realiza la Dra. Ana Lo Giúdice?',
      answer: 'En Delta Iuris nos especializamos en mediación familiar (divorcios, alimentos, régimen de comunicación), mediación patrimonial (división de bienes, contratos, deudas), mediación empresarial, vecinal y educativa.'
    },
    {
      question: '¿Cómo solicito un turno de atención?',
      answer: 'Atendemos exclusivamente con turno previo. Puede solicitar su cita presencial o virtual a través de nuestro WhatsApp oficial (387 598-6192), vía correo electrónico o completando el formulario en nuestra página de contacto.'
    },
    {
      question: '¿Las audiencias de mediación pueden ser virtuales?',
      answer: 'Sí. Ofrecemos la modalidad de mediación a distancia/virtual mediante plataformas digitales para brindar flexibilidad y comodidad a las partes, independientemente de su ubicación geográfica.'
    },
    {
      question: '¿Cuál es la diferencia entre ir a juicio y resolver por mediación?',
      answer: 'La mediación es sustancialmente más rápida, económica, confidencial y menos desgastante a nivel emocional. Además, son las propias partes quienes deciden la solución, en lugar de someter la decisión final al criterio de un juez.'
    },
    {
      question: '¿Es obligatorio contar con abogado patrocinante para mediar?',
      answer: 'Según la materia y el tipo de mediación (especialmente en el ámbito judicial o de familia), puede ser requerida la asistencia letrada para garantizar la protección jurídica de los derechos de cada parte. En Delta Iuris brindamos el asesoramiento correspondiente en la etapa previa.'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes | Delta Iuris - Centro de Mediación Salta</title>
        <meta name="description" content="Respuestas a las preguntas más frecuentes sobre mediación familiar, patrimonial, validez de acuerdos y turnos en Salta con la Dra. Ana Lo Giúdice." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#FAF7F2] text-[#2C2825] font-sans overflow-hidden">

        {/* ================= ENCABEZADO PRINCIPAL ================= */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
          
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
                <span>Centro de Ayuda</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2C2825] leading-tight">
                Preguntas <span className="text-[#8C5E3C] italic font-normal">Frecuentes</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A524C] font-light leading-relaxed pt-2">
                Resolvemos sus dudas principales sobre la mediación, la validez legal de los acuerdos y la modalidad de trabajo con la Dra. Ana Lo Giúdice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= LISTADO DE PREGUNTAS ================= */}
        <section className="pb-20 md:pb-28">
          <div className="container-custom max-w-4xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-[#8C5E3C]/40 shadow-md' 
                        : 'bg-white/80 hover:bg-white border-[#E2D8C8] shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                    >
                      <span className="flex items-center gap-3.5 font-serif text-base sm:text-lg font-bold text-[#2C2825] group-hover:text-[#8C5E3C] transition-colors">
                        <div className={`p-2 rounded-xl transition-colors ${
                          isOpen ? 'bg-[#FAF7F2] text-[#8C5E3C]' : 'bg-[#FAF7F2] text-[#8C5E3C]'
                        }`}>
                          <HelpCircle className="w-5 h-5 flex-shrink-0" />
                        </div>
                        {faq.question}
                      </span>
                      
                      <div className={`p-2 rounded-xl border transition-all ${
                        isOpen ? 'bg-[#8C5E3C] text-white border-[#8C5E3C]' : 'bg-[#FAF7F2] text-[#8C5E3C] border-[#E2D8C8]'
                      }`}>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-2 text-[#5A524C] leading-relaxed border-t border-[#F0E8DC] text-xs sm:text-sm font-light">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= TARJETA DE CONTACTO ADICIONAL ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 sm:p-12 rounded-[2.5rem] bg-[#2C2825] text-white text-center relative overflow-hidden shadow-xl"
            >
              {/* Adorno luminoso ambiental */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8C5E3C]/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/10 text-[#E8DFC8]">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                ¿Tiene otra inquietud?
              </h3>

              <p className="text-xs sm:text-base text-[#DCD2C2] font-light mb-8 max-w-xl mx-auto leading-relaxed">
                Escríbanos directamente por WhatsApp o utilice nuestro formulario para recibir información personalizada sobre su caso.
              </p>

              <a
                href="https://wa.me/5493875986192"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8C5E3C] hover:bg-[#734B2E] text-white font-medium text-xs uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg shadow-[#8C5E3C]/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Consultar por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default FAQPage;
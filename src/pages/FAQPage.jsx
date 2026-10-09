import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig } from '@/lib/siteConfig';

const faqs = [
  {
    question: '¿En qué áreas brinda asesoramiento?',
    answer: 'La práctica comprende Derecho de Familia (sucesiones, divorcios, alimentos, impugnaciones y filiaciones); asuntos laborales, ART y despidos; contratos; amparos de salud en el Fuero Federal; defensa del consumidor y tarjetas de crédito; además de procuración y gestorías en CABA.'
  },
  {
    question: '¿En qué lugares atiende?',
    answer: 'La atención profesional se brinda en Formosa y CABA. El domicilio informado en CABA es Av. Almirante Brown 653.'
  },
  {
    question: '¿Cómo puedo realizar una consulta?',
    answer: 'Podés comunicarte por WhatsApp al número indicado en esta página o completar el formulario de contacto, que preparará un mensaje para enviar por WhatsApp.'
  },
  {
    question: '¿Qué información conviene incluir en la consulta?',
    answer: 'Podés indicar brevemente el tema de tu consulta y tus datos de contacto. Evitá enviar documentación sensible hasta coordinar cómo compartirla de manera adecuada.'
  },
  {
    question: '¿El sitio brinda asesoramiento legal para un caso particular?',
    answer: 'La información de este sitio es general. La orientación sobre una situación concreta requiere conocer sus circunstancias y la documentación relevante.'
  }
];

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent('Hola Dra. Adriana, quisiera realizar una consulta.')}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Preguntas frecuentes | Dra. Adriana Elena Aranda</title>
        <meta name="description" content="Preguntas frecuentes sobre áreas de práctica, atención en Formosa y CABA, y canales de contacto de la Dra. Adriana Elena Aranda." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen bg-[#F8F7F4] text-[#252422]">
        <section className="pt-36 pb-10 md:pt-44 md:pb-14">
          <div className="container-custom text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E5E1D9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">
              <Sparkles className="h-4 w-4" /> Información
            </span>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Preguntas frecuentes</h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#5D5954]">Información general sobre las áreas de práctica y la atención profesional.</p>
          </div>
        </section>
        <section className="container-custom max-w-4xl pb-20 md:pb-28">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="overflow-hidden rounded-2xl border border-[#E5E1D9] bg-white shadow-sm">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium sm:p-6"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#756E64] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && <p className="border-t border-[#EAE6DF] px-5 pb-5 pt-4 text-sm leading-relaxed text-[#5D5954] sm:px-6 sm:pb-6">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
          <div className="mt-12 rounded-[2rem] bg-[#252422] p-8 text-center text-white sm:p-10">
            <h2 className="font-serif text-2xl font-semibold">¿Tenés otra consulta?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#DDD9D2]">Contactá a la Dra. Adriana Elena Aranda por WhatsApp o revisá las áreas de práctica.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#252422] hover:bg-[#E9E6DF]">
                <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
              </a>
              <Link to="/areas" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Áreas de práctica <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FAQPage;

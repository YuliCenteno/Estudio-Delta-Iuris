import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/siteConfig';

function ContactoPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent('Hola Dra. Adriana, quisiera realizar una consulta.')}`;

  return (
    <>
      <Helmet>
        <title>Contacto | Dra. Adriana Elena Aranda</title>
        <meta name="description" content="Contactá a la Dra. Adriana Elena Aranda. Atención profesional en Formosa y CABA. Domicilio en Av. Almirante Brown 653, CABA." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen bg-[#F8F7F4] text-[#252422]">
        <section className="pt-36 pb-12 md:pt-44">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl space-y-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E1D9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">
                <Sparkles className="h-4 w-4" /> Contacto
              </span>
              <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Realizá tu consulta</h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5D5954]">
                Completá el formulario y continuá la consulta por WhatsApp con la Dra. Adriana Elena Aranda.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container-custom pb-20 md:pb-28">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="rounded-[2rem] border border-[#E5E1D9] bg-white p-7 shadow-sm md:p-10 lg:col-span-7">
              <div className="mb-8 border-b border-[#EAE6DF] pb-5">
                <h2 className="font-serif text-2xl font-semibold">Formulario de consulta</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#5D5954]">Al enviar, se abrirá WhatsApp con los datos que ingreses para que puedas revisar el mensaje antes de enviarlo.</p>
              </div>
              <ContactForm />
            </div>

            <aside className="space-y-5 lg:col-span-5">
              <div className="rounded-[2rem] bg-[#252422] p-8 text-white md:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#E9E6DF]">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D1CBC1]">Atención profesional</p>
                <h2 className="font-serif text-2xl font-semibold">Formosa y CABA</h2>
                <p className="mt-4 leading-relaxed text-[#DDD9D2]">Domicilio en CABA</p>
                <p className="font-medium text-white">{siteConfig.address}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                  <MessageCircle className="h-4 w-4" /> {siteConfig.phone}
                </a>
              </div>
              <a
                href="https://www.openstreetmap.org/search?query=Av.%20Almirante%20Brown%20653%2C%20CABA"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-[#E5E1D9] bg-white p-6 text-sm font-medium text-[#252422] transition hover:bg-[#EFEBE4]"
              >
                Ver domicilio en el mapa <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactoPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Scale, ShieldCheck, UserRound } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig } from '@/lib/siteConfig';

function NosotrosPage() {
  return (
    <>
      <Helmet>
        <title>Perfil profesional | Dra. Adriana Elena Aranda</title>
        <meta name="description" content="Conocé a la Dra. Adriana Elena Aranda, abogada profesional independiente con atención en Formosa y CABA." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#F8F7F4] text-[#252422]">
        <section className="pt-36 pb-14 md:pt-44 md:pb-20">
          <div className="container-custom text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E5E1D9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">
              <Scale className="h-4 w-4" /> Perfil profesional
            </span>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Dra. Adriana Elena Aranda</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5D5954]">
              Abogada profesional independiente. Atención en Formosa y CABA.
            </p>
          </div>
        </section>

        <section className="border-y border-[#E5E1D9] bg-white py-14 md:py-20">
          <div className="container-custom grid items-center gap-10 md:grid-cols-12">
            <div className="flex justify-center md:col-span-4">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border border-[#E5E1D9] bg-[#EFEBE4] text-[#756E64]">
                <UserRound className="h-20 w-20 stroke-[1.2]" />
              </div>
            </div>
            <div className="space-y-5 md:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">Presentación</p>
              <h2 className="font-serif text-3xl font-semibold">Asesoramiento jurídico independiente</h2>
              <p className="max-w-3xl leading-relaxed text-[#5D5954]">
                La Dra. Adriana Elena Aranda brinda asesoramiento jurídico en distintas áreas del derecho, con atención en la provincia de Formosa y en la Ciudad Autónoma de Buenos Aires.
              </p>
              <p className="max-w-3xl leading-relaxed text-[#5D5954]">
                Su práctica comprende Derecho de Familia, asuntos laborales y ART, contratos, amparos de salud en el Fuero Federal, defensa del consumidor y servicios de procuración y gestorías en CABA.
              </p>
              <div className="flex items-start gap-3 border-t border-[#EAE6DF] pt-5 text-sm text-[#5D5954]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#756E64]" />
                <span>Atención en Formosa y CABA. Domicilio en CABA: {siteConfig.address}.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container-custom py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#E5E1D9] bg-white p-8 text-center shadow-sm md:p-12">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFEBE4] text-[#756E64]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Áreas de práctica</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#5D5954]">
              Familia · Laboral y ART · Contratos · Derecho a la Salud · Defensa del Consumidor · Procuración y gestorías en CABA
            </p>
            <Link to="/areas" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#252422] hover:underline">
              Conocer el detalle <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NosotrosPage;

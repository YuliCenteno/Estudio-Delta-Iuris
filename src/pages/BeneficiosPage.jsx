import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Scale, ShieldCheck, UserRound } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const puntos = [
  {
    icon: UserRound,
    title: 'Atención profesional independiente',
    description: 'Asesoramiento jurídico a cargo de la Dra. Adriana Elena Aranda.'
  },
  {
    icon: Scale,
    title: 'Áreas de práctica diversas',
    description: 'Familia, asuntos laborales y ART, contratos, salud y defensa del consumidor.'
  },
  {
    icon: MapPin,
    title: 'Atención en Formosa y CABA',
    description: 'Domicilio informado en CABA: Av. Almirante Brown 653.'
  },
  {
    icon: Briefcase,
    title: 'Procuración y gestorías',
    description: 'Servicio de procuración y gestorías en la Ciudad Autónoma de Buenos Aires.'
  }
];

function BeneficiosPage() {
  return (
    <>
      <Helmet>
        <title>Atención profesional | Dra. Adriana Elena Aranda</title>
        <meta name="description" content="Conocé la atención profesional independiente de la Dra. Adriana Elena Aranda en Formosa y CABA y sus áreas de práctica." />
      </Helmet>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen bg-[#F8F7F4] text-[#252422]">
        <section className="border-b border-[#E5E1D9] bg-[#EFEBE4] pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="container-custom text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E5E1D9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">
              <ShieldCheck className="h-4 w-4" /> Atención jurídica
            </span>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Atención profesional independiente</h1>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#5D5954]">
              La Dra. Adriana Elena Aranda ofrece asesoramiento jurídico en sus áreas de práctica, con atención en Formosa y CABA.
            </p>
          </div>
        </section>
        <section className="container-custom py-16 md:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {puntos.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-[#E5E1D9] bg-white p-7 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1EEE8] text-[#756E64]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#5D5954]">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contacto" className="inline-flex items-center gap-2 rounded-xl bg-[#252422] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#44413D]">
              Realizar una consulta <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BeneficiosPage;

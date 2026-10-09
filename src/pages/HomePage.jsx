import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, FileText, HeartPulse, MapPin, Scale, ShieldCheck, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/siteConfig';

const serviceIcons = {
  familia: Users,
  laboral: Briefcase,
  contratos: FileText,
  salud: HeartPulse,
  consumidor: ShieldCheck,
  procuracion: MapPin
};

function HomePage() {
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent('Hola Dra. Adriana, quisiera realizar una consulta.')}`;
  const handleWhatsApp = () => window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  return (
    <>
      <Helmet>
        <title>Dra. Adriana Elena Aranda | Abogada en Formosa y CABA</title>
        <meta name="description" content="Asesoramiento jurídico independiente en Formosa y CABA. Derecho de Familia, Laboral, Contratos, Salud, Defensa del Consumidor y procuración." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#F8F7F4] text-[#252422]">
        <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="absolute -right-24 -top-20 h-96 w-96 rounded-full bg-[#E9E6DF] blur-3xl" />
          <div className="container-custom relative grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-7 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E1D9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">
                <Scale className="h-4 w-4" />
                Abogada profesional independiente
              </span>
              <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Asesoramiento jurídico para acompañarte en cada etapa.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[#5D5954] sm:text-lg">
                La Dra. Adriana Elena Aranda brinda atención profesional en Formosa y CABA, con práctica en derecho de familia, laboral, contratos, salud y defensa del consumidor.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-200 active:scale-[0.98]"
                >
                  <svg
                    className="w-5 h-5 mr-2 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.163-3.486-8.411" />
                  </svg>
                  Contactar por WhatsApp
                </Button>
                <Link to="/areas" className="inline-flex items-center gap-2 rounded-xl border border-[#D8D3CA] bg-white px-6 py-3.5 text-sm font-medium text-[#252422] transition hover:bg-[#EFEBE4]">
                  Áreas de práctica <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[#E5E1D9] bg-white p-8 shadow-sm lg:col-span-5 lg:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1EEE8] text-[#756E64]">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">Atención profesional</p>
              <h2 className="mb-3 font-serif text-2xl font-semibold">Formosa y CABA</h2>
              <p className="mb-6 leading-relaxed text-[#5D5954]">
                Domicilio en CABA: {siteConfig.address}
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#252422] underline decoration-[#BDB6AA] underline-offset-4 hover:decoration-[#252422]">
                {siteConfig.phone} <ArrowRight className="h-4 w-4" />
              </a>
            </aside>
          </div>
        </section>

        <section className="border-y border-[#E5E1D9] bg-[#EFEBE4] py-16 md:py-20">
          <div className="container-custom">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">Especialidades</p>
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Áreas de práctica</h2>
              <p className="mt-4 text-[#5D5954]">Asesoramiento jurídico independiente en los siguientes asuntos:</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.services.map((service) => {
                const Icon = serviceIcons[service.id];
                return (
                  <article key={service.id} className="rounded-2xl border border-[#E5E1D9] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1EEE8] text-[#756E64]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-[#5D5954]">{service.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-[#252422] hover:underline">
                Ver detalle de los servicios <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="container-custom py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#252422] p-8 text-white md:flex-row md:items-center md:p-12">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D1CBC1]">Dra. Adriana Elena Aranda</p>
              <h2 className="font-serif text-2xl font-semibold sm:text-3xl">¿Necesitás orientación sobre tu situación?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#DDD9D2]">Comunicate para realizar una consulta y conocer las opciones de atención.</p>
            </div>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="shrink-0 bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-200 active:scale-[0.98]"
            >
              <svg
                className="w-5 h-5 mr-2 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.163-3.486-8.411" />
              </svg>
              Contactar por WhatsApp
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;

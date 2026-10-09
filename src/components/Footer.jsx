import React from 'react';
import { Link } from 'react-router-dom';
import { Github, MapPin, MessageCircle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/siteConfig';

function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent('Hola Dra. Adriana, quisiera realizar una consulta.')}`;
  const handleWhatsApp = () => window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  return (
    <footer className="border-t border-[#E5E1D9] bg-white py-12 text-[#252422]">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#252422] text-white">
                <Scale className="h-5 w-5" />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold">{siteConfig.name}</p>
                <p className="text-xs text-[#716B64]">{siteConfig.subtitle}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5D5954]">
              Asesoramiento jurídico independiente en Formosa y CABA.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-lg font-semibold">Contacto y ubicación</h2>
            <div className="space-y-3 text-sm text-[#5D5954]">
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#756E64]" />{siteConfig.address}</p>
              <p>Atención en Formosa y CABA</p>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="mt-4 bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-200 active:scale-[0.98]"
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
          </div>

          <div>
            <h2 className="mb-4 font-serif text-lg font-semibold">Información</h2>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-[#5D5954]" aria-label="Navegación del pie">
              <Link to="/nosotros" className="hover:text-[#252422]">Perfil</Link>
              <Link to="/areas" className="hover:text-[#252422]">Áreas de práctica</Link>
              <Link to="/servicios" className="hover:text-[#252422]">Servicios</Link>
              <Link to="/faq" className="hover:text-[#252422]">Preguntas frecuentes</Link>
              <Link to="/articulos" className="hover:text-[#252422]">Artículos</Link>
              <Link to="/contacto" className="hover:text-[#252422]">Contacto</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#E5E1D9] pt-6 text-xs text-[#716B64] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>Abogada profesional independiente</p>
          <a
            href="https://github.com/yulicenteno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#252422]"
          >
            <Github className="h-3.5 w-3.5" />
            Desarrollado por ZCS Systems
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

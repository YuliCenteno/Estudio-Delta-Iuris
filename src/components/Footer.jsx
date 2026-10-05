import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#FAF7F2] pt-20 pb-8 border-t border-[#E8DFC8] text-[#2C2825]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Columna 1: Marca y descripción */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 bg-[#8C5E3C] rounded-2xl flex items-center justify-center text-white shadow-sm">
                <Scale className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-[#2C2825] leading-none">Delta Iuris</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase mt-1 text-[#8C5E3C]">
                  Centro de Mediación Privada
                </span>
              </div>
            </div>

            <p className="text-[#5A524C] leading-relaxed mb-8 max-w-sm font-light text-sm">
              Resolución pacífica, ágil y confidencial de conflictos familiares, patrimoniales y societarios en la provincia de Salta.
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <a 
                href="https://wa.me/5493875986192" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] flex items-center justify-center text-[#2C2825] hover:bg-[#8C5E3C] hover:text-white hover:border-[#8C5E3C] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-xl bg-white border border-[#E8DFC8] flex items-center justify-center text-[#2C2825] hover:bg-[#8C5E3C] hover:text-white hover:border-[#8C5E3C] transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Información de Contacto */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-serif font-semibold text-[#2C2825] mb-6">
              Contacto y Ubicación
            </h4>
            <ul className="space-y-5 text-[#5A524C] text-sm">
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DFC8] flex items-center justify-center shrink-0 mt-0.5 text-[#8C5E3C]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">
                  Salta Capital, Salta, Argentina
                </span>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DFC8] flex items-center justify-center shrink-0 mt-0.5 text-[#8C5E3C]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <a 
                    href="https://wa.me/5493875986192" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#8C5E3C] transition-colors"
                  >
                    +54 9 387 598-6192
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DFC8] flex items-center justify-center shrink-0 text-[#8C5E3C]">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href="mailto:contacto@deltaiuris.com.ar" 
                  className="hover:text-[#8C5E3C] transition-colors"
                >
                  contacto@deltaiuris.com.ar
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Navegación Principal */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-serif font-semibold text-[#2C2825] mb-6">
              Navegación
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/nosotros" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Servicios</Link></li>
              <li><Link to="/areas" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Áreas de Actuación</Link></li>
              <li><Link to="/beneficios" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Beneficios</Link></li>
              <li><Link to="/faq" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link to="/contacto" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 4: Áreas de Especialización */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-serif font-semibold text-[#2C2825] mb-6">
              Especialidades
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/areas" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Mediación Familiar</Link></li>
              <li><Link to="/areas" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Mediación Patrimonial</Link></li>
              <li><Link to="/areas" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Mediación Empresarial</Link></li>
              <li><Link to="/areas" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Propiedad Horizontal</Link></li>
              <li><Link to="/areas" className="text-[#5A524C] hover:text-[#8C5E3C] transition-colors">Derecho de Familia</Link></li>
            </ul>
          </div>

        </div>

        {/* Pie Inferior */}
        <div className="pt-8 border-t border-[#E8DFC8] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A524C]">
            &copy; {new Date().getFullYear()} Delta Iuris - Centro de Mediación Privada. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#5A524C]/80">
            Dra. Ana Lo Giúdice &mdash; Salta, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Importación de Páginas
import HomePage from '@/pages/HomePage';
import NosotrosPage from '@/pages/NosotrosPage';
import ServiciosPage from '@/pages/ServiciosPage';
import AreasPage from '@/pages/AreasPage';
import BeneficiosPage from '@/pages/BeneficiosPage';
import FAQPage from '@/pages/FAQPage';
import ContactoPage from '@/pages/ContactoPage';
import ArticulosPage from '@/pages/ArticulosPage';

// Componente para posicionar el scroll al inicio de la página tras cada navegación o ancla
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Rutas Principales */}
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/articulos" element={<ArticulosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />

        {/* Ruta de fallback (Redirección a Home para rutas no coincidentes) */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/areas', label: 'Áreas de Práctica' },
    { path: '/faq', label: 'Preguntas Frecuentes' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-border shadow-sm py-3' 
          : 'bg-background/80 backdrop-blur-md border-border/50 py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group z-50 relative">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${isScrolled ? 'bg-primary text-primary-foreground' : 'bg-primary text-primary-foreground'}`}>
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif leading-none text-primary">DRA. ADRIANA ELENA ARANDA</span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mt-1 text-muted-foreground">Abogada independiente</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative px-2 py-1 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden z-50 relative text-primary hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg xl:hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-lg font-serif transition-colors px-4 py-3 rounded-lg ${
                        isActive 
                          ? 'bg-primary/5 text-primary' 
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Sparkles, Book } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import fm from 'front-matter';

function ArticulosPage() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    // Importación dinámica de todos los archivos .md en la carpeta de artículos
    const files = import.meta.glob('/src/content/articulos/*.md', { query: '?raw', import: 'default' });

    const fetchArticulos = async () => {
      const posts = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const content = await resolver();
          const parsed = fm(content);
          return {
            slug: path.split('/').pop().replace('.md', ''),
            ...parsed.attributes,
            body: parsed.body
          };
        })
      );
      // Ordenar por fecha descendente
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setArticulos(posts);
    };

    fetchArticulos();
  }, []);

  return (
    <>
      <Helmet>
        <title>Artículos y Publicaciones | Delta Iuris Salta</title>
        <meta name="description" content="Artículos, novedades y publicaciones sobre mediación familiar, patrimonial y derecho por la Dra. Ana Lo Giúdice." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-[#FAF7F2] text-[#2C2825] font-sans min-h-screen pt-36 pb-24">
        <div className="container-custom">
          
          {/* Cabecera de la sección */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white text-[#8C5E3C] text-xs font-bold uppercase tracking-[0.2em] border border-[#E8DFC8] shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Publicaciones y Novedades</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#2C2825]">
              Artículos & <span className="text-[#8C5E3C] italic font-normal">Lecturas</span>
            </h1>
            <p className="text-[#5A524C] font-light text-base leading-relaxed">
              Reflexiones, análisis jurídicos y herramientas prácticas sobre resolución pacífica de conflictos.
            </p>
          </div>

          {/* DESTACADO: Sección del Libro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 bg-[#2C2825] text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-[#8C5E3C] text-white text-xs font-bold uppercase tracking-wider">
                  <Book className="w-3.5 h-3.5" />
                  Próximo Lanzamiento
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-[#FAF7F2]">
                  Nuevo Libro Publicado
                </h2>
                <p className="text-[#E8DFC8] text-sm md:text-base font-light leading-relaxed">
                  Una obra dedicada a la profundización de los procesos de mediación y la gestión constructiva del conflicto. Podés solicitar tu ejemplar o realizar consultas directamente.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/5493875986192?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20el%20libro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#8C5E3C] hover:bg-[#734B2E] text-white px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <span>Consultar por el Libro</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Espacio para la portada del libro */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-48 h-64 bg-[#3A3531] border border-[#8C5E3C]/40 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-2xl relative group">
                  <BookOpen className="w-12 h-12 text-[#8C5E3C] mb-3" />
                  <p className="text-xs uppercase tracking-widest text-[#E8DFC8] font-bold">Portada del Libro</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grilla de Artículos del Blog */}
          {articulos.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#E8DFC8] p-8">
              <BookOpen className="w-10 h-10 text-[#8C5E3C] mx-auto mb-3 opacity-60" />
              <p className="text-[#5A524C] font-serif font-medium">Próximamente estaremos publicando los primeros artículos.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articulos.map((art) => (
                <article key={art.slug} className="bg-white rounded-2xl border border-[#E8DFC8] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  {art.image && (
                    <img src={art.image} alt={art.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#8C5E3C] font-semibold mb-2">
                        <span>{art.category}</span>
                        {art.date && (
                          <span className="flex items-center gap-1 text-[#5A524C] font-normal">
                            <Calendar className="w-3 h-3" />
                            {new Date(art.date).toLocaleDateString('es-AR')}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#2C2825] mb-2 leading-snug">
                        {art.title}
                      </h3>
                      <p className="text-[#5A524C] text-sm font-light line-clamp-3">
                        {art.description}
                      </p>
                    </div>

                    <a
                      href={`/articulos/${art.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C5E3C] hover:text-[#2C2825] transition-colors pt-4 border-t border-[#F0E8DC]"
                    >
                      <span>Leer artículo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ArticulosPage;
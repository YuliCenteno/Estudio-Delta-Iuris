import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BookOpen, Calendar, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import fm from 'front-matter';

function ArticulosPage() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
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
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setArticulos(posts);
    };
    fetchArticulos();
  }, []);

  return (
    <>
      <Helmet>
        <title>Artículos | Dra. Adriana Elena Aranda</title>
        <meta name="description" content="Artículos y novedades sobre las áreas de práctica de la Dra. Adriana Elena Aranda." />
      </Helmet>
      <Header />
      <WhatsAppButton />
      <main className="min-h-screen bg-[#F8F7F4] pb-20 pt-36 text-[#252422] md:pt-44">
        <div className="container-custom">
          <header className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E1D9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#756E64]">
              <Sparkles className="h-4 w-4" /> Información
            </span>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Artículos y novedades</h1>
            <p className="leading-relaxed text-[#5D5954]">Publicaciones sobre temas vinculados con las áreas de práctica profesional.</p>
          </header>

          {articulos.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-[#E5E1D9] bg-white px-8 py-12 text-center shadow-sm">
              <BookOpen className="mx-auto mb-4 h-10 w-10 text-[#756E64]" />
              <h2 className="font-serif text-xl font-semibold">Próximamente</h2>
              <p className="mt-2 text-sm text-[#5D5954]">En este espacio se compartirán artículos y novedades jurídicas.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articulos.map((art) => (
                <article key={art.slug} className="overflow-hidden rounded-2xl border border-[#E5E1D9] bg-white shadow-sm">
                  {art.image && <img src={art.image} alt={art.title} className="h-48 w-full object-cover" />}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between gap-3 text-xs text-[#756E64]">
                      <span>{art.category}</span>
                      {art.date && <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(art.date).toLocaleDateString('es-AR')}</span>}
                    </div>
                    <h2 className="font-serif text-xl font-semibold">{art.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#5D5954]">{art.description}</p>
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

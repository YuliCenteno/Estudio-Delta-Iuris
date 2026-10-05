import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  ShieldCheck, 
  Coins, 
  HeartHandshake, 
  Scale, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function BeneficiosPage() {
  const ventajas = [
    {
      icon: Clock,
      title: 'Celeridad y Ahorro de Tiempo',
      description: 'A diferencia de los procesos judiciales que pueden extenderse durante años, la mediación permite resolver controversias en cuestión de semanas o pocas sesiones.',
      highlight: 'Soluciones rápidas y ejecutivas'
    },
    {
      icon: Coins,
      title: 'Economía de Costos',
      description: 'Reduce significativamente los gastos asociados a litis prolongadas, honorarios regulados de peritos, tasas de justicia y costos de tramitación interminables.',
      highlight: 'Mayor previsibilidad financiera'
    },
    {
      icon: Lock,
      title: 'Absoluta Confidencialidad',
      description: 'Todo lo tratado durante las audiencias se mantiene bajo estricta reserva legal. No genera antecedentes ni exposición pública de la intimidad familiar o empresarial.',
      highlight: 'Privacidad 100% garantizada'
    },
    {
      icon: HeartHandshake,
      title: 'Preservación de Relaciones',
      description: 'Al fomentar el diálogo participativo y acuerdos de mutuo beneficio ("Ganar-Ganar"), minimiza el desgaste emocional y protege los vínculos futuros.',
      highlight: 'Enfoque constructivo y pacífico'
    },
    {
      icon: Scale,
      title: 'Validez y Eficacia Legal',
      description: 'Los acuerdos alcanzados en Delta Iuris poseen fuerza legal binding y ejecutoriedad equivalente a una sentencia judicial homologada.',
      highlight: 'Seguridad jurídica garantizada'
    },
    {
      icon: Zap,
      title: 'Flexibilidad e Innovación',
      description: 'Adaptamos el proceso a la dinámica de las partes, ofreciendo sesiones presenciales en Salta o audiencias 100% virtuales con turno previo.',
      highlight: 'Modalidad presencial y virtual'
    }
  ];

  const comparativa = [
    {
      criterio: 'Duración del Proceso',
      mediacion: 'Semanas o pocos meses',
      juicio: 'Años de tramitación'
    },
    {
      criterio: 'Control de la Solución',
      mediacion: 'Las partes deciden el acuerdo',
      juicio: 'Un tercero (juez) impone el fallo'
    },
    {
      criterio: 'Costo Económico',
      mediacion: 'Previsible y acotado',
      juicio: 'Elevado y variable en el tiempo'
    },
    {
      criterio: 'Clima Institucional / Humano',
      mediacion: 'Colaborativo y pacífico',
      juicio: 'Adversarial y desgastante'
    },
    {
      criterio: 'Confidencialidad',
      mediacion: 'Estricta reserva privada',
      juicio: 'Actuaciones públicas'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Beneficios de la Mediación | Delta Iuris - Dra. Ana Lo Giúdice Salta</title>
        <meta name="description" content="Descubra las ventajas de la mediación frente a un juicio tradicional: celeridad, ahorro de costos, validez legal y resguardo de las relaciones personales en Salta." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        {/* Banner de Encabezado */}
        <section className="pt-40 pb-20 bg-muted/30 relative">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block py-1.5 px-5 rounded-full bg-accent/20 text-accent-foreground font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 border border-accent/30">
                ¿Por qué elegir Mediación?
              </span>
              <h1 className="mb-6 text-primary font-serif">Beneficios de Resolver en Delta Iuris</h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Una vía ágil, económica y pacífica que transforma los litigios en soluciones sostenibles impulsadas por el diálogo y la excelencia jurídica[cite: 1, 2].
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tarjetas de Beneficios Clave */}
        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ventajas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20 text-accent">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/40 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-xs font-semibold text-primary">
                      {item.highlight}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabla Comparativa: Mediación vs Juicio Tradicional */}
        <section className="section-spacing bg-muted/40 border-y border-border/50">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-primary mb-4">
                Mediación Privada vs. Juicio Tradicional
              </h2>
              <p className="text-muted-foreground font-light">
                Compare las diferencias sustanciales antes de iniciar una contienda judicial.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border shadow-sm bg-card">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground font-serif">
                    <th className="p-4 md:p-6 text-sm font-semibold">Criterio</th>
                    <th className="p-4 md:p-6 text-sm font-semibold bg-accent/20 text-accent-foreground">Mediación en Delta Iuris</th>
                    <th className="p-4 md:p-6 text-sm font-semibold opacity-80">Proceso Judicial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-sm">
                  {comparativa.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 md:p-6 font-medium text-primary">{row.criterio}</td>
                      <td className="p-4 md:p-6 font-semibold text-accent flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {row.mediacion}
                      </td>
                      <td className="p-4 md:p-6 text-muted-foreground">{row.juicio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom text-center max-w-3xl">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Elija una solución inteligente y pacífica para su conflicto
            </h2>
            <p className="opacity-90 mb-8 text-base md:text-lg font-light">
              La Dra. Ana Lo Giúdice le brindará la orientación requerida con atención personalizada presencial o virtual[cite: 1, 2].
            </p>
            <Link to="/contacto" className="btn-accent inline-flex items-center gap-2">
              Solicitar Turno de Mediación <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BeneficiosPage;
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Award } from 'lucide-react';

function TeamMemberCard({ member, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row group"
    >
      <div className="lg:w-2/5 relative overflow-hidden">
        <div className="aspect-[3/4] lg:aspect-auto lg:h-full w-full bg-muted">
          <img 
            src={member.image} 
            alt={`${member.name} - ${member.title} - Estudio Jurídico Casanegra & Asociados`} 
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
        </div>
        <div className="absolute bottom-0 left-0 p-6 lg:hidden">
          <h2 className="text-2xl font-serif text-white mb-1">{member.name}</h2>
          <p className="text-white/80 font-medium tracking-wide uppercase text-xs">{member.title}</p>
        </div>
      </div>
      
      <div className="lg:w-3/5 p-8 md:p-10 flex flex-col">
        <div className="hidden lg:block mb-8 border-b border-border/50 pb-6">
          <h2 className="text-3xl font-serif text-primary mb-2">{member.name}</h2>
          <p className="text-muted-foreground font-medium tracking-widest uppercase text-sm">{member.title}</p>
        </div>

        <div className="space-y-8 flex-grow">
          <div>
            <p className="text-foreground/90 leading-relaxed text-lg font-light italic border-l-2 border-primary/30 pl-4">
              "{member.summary}"
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                <GraduationCap className="w-4 h-4" /> Formacion
              </h3>
              <ul className="space-y-2">
                {member.background.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                <Award className="w-4 h-4" /> Especialidades
              </h3>
              <ul className="space-y-2">
                {member.specialties.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          {member.cvUrl ? (
            <a 
              href={member.cvUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/70 transition-colors group/btn"
            >
              <FileText className="w-4 h-4" />
              <span>Descargar CV Completo</span>
              <span className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all text-xs text-muted-foreground ml-2">
                (PDF)
              </span>
            </a>
          ) : (
            <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/70 transition-colors group/btn">
              <FileText className="w-4 h-4" />
              <span>Descargar CV Completo</span>
              <span className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all text-xs text-muted-foreground ml-2">
                (Proximamente)
              </span>
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default TeamMemberCard;
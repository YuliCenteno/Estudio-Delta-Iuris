import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border p-8 rounded-2xl flex flex-col h-full card-premium"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-serif text-primary">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;
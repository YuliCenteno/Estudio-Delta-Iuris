import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ quote, name, profession, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full bg-card border-border/50">
        <CardContent className="p-6 flex flex-col h-full">
          <Quote className="w-10 h-10 text-accent mb-4" />
          <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
            "{quote}"
          </blockquote>
          <div className="border-t border-border pt-4">
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{profession}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;
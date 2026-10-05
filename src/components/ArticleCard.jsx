import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ArticleCard({ title, excerpt, date, readTime, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full card-hover border-border/50 bg-card flex flex-col">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-foreground line-clamp-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 flex-grow line-clamp-3">{excerpt}</p>
          <Link to="/articulos" className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors mt-auto">
            Leer articulo completo
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ArticleCard;
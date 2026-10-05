import React from 'react';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function WhatsAppButton() {
  const whatsappNumber = '543516506222';
  const message = encodeURIComponent('Hola Estudio Jurídico Casanegra & Asociados, me gustaría solicitar una consulta especializada.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-full bg-white overflow-hidden flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contactar por WhatsApp"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/1d193b2b-0df5-4200-8ea5-f973af13e9b4/6f0e8b666251714b5d659969e039a942.png" 
              alt="WhatsApp" 
              className="w-14 h-14 object-contain"
            />
          </motion.a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-primary text-primary-foreground border-none mr-2 font-medium px-4 py-2">
          <p>Asesoramiento Inmediato</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default WhatsAppButton;
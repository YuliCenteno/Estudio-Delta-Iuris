import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FAQAccordion({ faqs }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border border-border rounded-xl px-6 bg-card"
        >
          <AccordionTrigger className="text-left hover:no-underline py-5">
            <span className="font-semibold text-foreground pr-4">{faq.question}</span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQAccordion;
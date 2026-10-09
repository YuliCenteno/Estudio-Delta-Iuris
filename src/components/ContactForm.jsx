import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { siteConfig } from '@/lib/siteConfig';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    area_interes: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});

  const areas = [
    "Derecho de Familia",
    "Derecho Laboral y ART",
    "Contratos",
    "Derecho a la Salud",
    "Defensa del Consumidor y tarjetas de crédito",
    "Procuración y gestorías en CABA"
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Requerido';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.telefono.trim()) newErrors.telefono = 'Requerido';
    if (!formData.area_interes) newErrors.area_interes = 'Seleccione un área';
    if (!formData.mensaje.trim() || formData.mensaje.length < 10) newErrors.mensaje = 'Mínimo 10 caracteres';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Por favor, revise los campos marcados en el formulario.');
      return;
    }

    try {
      const message = [
        'Hola Dra. Adriana, quisiera realizar una consulta.',
        `Nombre: ${formData.nombre}`,
        formData.empresa ? `Empresa: ${formData.empresa}` : '',
        `Correo: ${formData.email}`,
        `Teléfono: ${formData.telefono}`,
        `Área de consulta: ${formData.area_interes}`,
        `Mensaje: ${formData.mensaje}`
      ].filter(Boolean).join('\n');
      const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
      const whatsappWindow = window.open(whatsappUrl, '_blank');

      if (whatsappWindow) {
        whatsappWindow.opener = null;
      } else {
        window.location.assign(whatsappUrl);
      }
    } catch (error) {
      console.error('Error al preparar la consulta de WhatsApp:', error);
      toast.error('No se pudo abrir WhatsApp. Puede contactarse al ' + siteConfig.phone + '.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nombre" className="text-foreground">Nombre completo *</Label>
          <Input
            id="nombre"
            type="text"
            value={formData.nombre}
            onChange={(e) => handleChange('nombre', e.target.value)}
            className={`bg-background border-border focus-visible:ring-primary ${errors.nombre ? 'border-destructive' : ''}`}
            placeholder="Su nombre"
          />
          {errors.nombre && <span className="text-xs text-destructive">{errors.nombre}</span>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-foreground">Empresa (Opcional)</Label>
          <Input
            id="empresa"
            type="text"
            value={formData.empresa}
            onChange={(e) => handleChange('empresa', e.target.value)}
            className="bg-background border-border focus-visible:ring-primary"
            placeholder="Nombre de su organización"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Correo electrónico *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`bg-background border-border focus-visible:ring-primary ${errors.email ? 'border-destructive' : ''}`}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono" className="text-foreground">Teléfono de contacto *</Label>
          <Input
            id="telefono"
            type="tel"
            value={formData.telefono}
            onChange={(e) => handleChange('telefono', e.target.value)}
            className={`bg-background border-border focus-visible:ring-primary ${errors.telefono ? 'border-destructive' : ''}`}
            placeholder="+54 9 11 1234 5678"
          />
          {errors.telefono && <span className="text-xs text-destructive">{errors.telefono}</span>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="area_interes" className="text-foreground">Área de práctica *</Label>
        <Select value={formData.area_interes} onValueChange={(value) => handleChange('area_interes', value)}>
          <SelectTrigger className={`bg-background border-border focus:ring-primary ${errors.area_interes ? 'border-destructive' : ''}`}>
            <SelectValue placeholder="Seleccione el área de su interés" />
          </SelectTrigger>
          <SelectContent>
            {areas.map(area => (
              <SelectItem key={area} value={area}>{area}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.area_interes && <span className="text-xs text-destructive">{errors.area_interes}</span>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje" className="text-foreground">Consulta *</Label>
        <Textarea
          id="mensaje"
          value={formData.mensaje}
          onChange={(e) => handleChange('mensaje', e.target.value)}
          className={`min-h-[150px] bg-background border-border focus-visible:ring-primary resize-y ${errors.mensaje ? 'border-destructive' : ''}`}
          placeholder="Detalle su consulta aquí..."
        />
        {errors.mensaje && <span className="text-xs text-destructive">{errors.mensaje}</span>}
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto btn-primary px-10"
      >
        Continuar por WhatsApp
      </Button>
    </form>
  );
}

export default ContactForm;
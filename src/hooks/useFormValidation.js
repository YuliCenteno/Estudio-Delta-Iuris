import { useState } from 'react';

export function useFormValidation() {
  const [errors, setErrors] = useState({});

  const validateField = (name, value, rules = {}) => {
    let error = '';

    if (rules.required && !value.trim()) {
      error = 'Este campo es obligatorio';
    } else if (rules.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Ingrese un email válido';
      }
    } else if (rules.phone && value) {
      const phoneRegex = /^[0-9\s\-\+\(\)]{8,}$/;
      if (!phoneRegex.test(value)) {
        error = 'Ingrese un teléfono válido';
      }
    } else if (rules.minLength && value.length < rules.minLength) {
      error = `Mínimo ${rules.minLength} caracteres`;
    }

    return error;
  };

  const validate = (formData, validationRules) => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(
        fieldName,
        formData[fieldName] || '',
        validationRules[fieldName]
      );
      
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const clearErrors = () => {
    setErrors({});
  };

  const clearFieldError = (fieldName) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  return {
    errors,
    validate,
    clearErrors,
    clearFieldError,
    validateField
  };
}
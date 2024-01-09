import { useState } from 'react';
/**
 * @function useInput
 * - O hook serve para o componente Input
 */

export function useInput() {
  const [isLoading, setIsLoading] = useState();

  /**
   * @function handleSubmitForm
   * - A função manipula o evento de submissão do formulario para validar informações e enviar.
   *
   * @param {EventListener} ev
   * @returns void
   */

  return {
    isLoading,
    setIsLoading,
  };
}

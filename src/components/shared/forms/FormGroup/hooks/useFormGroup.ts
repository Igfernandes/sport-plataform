import { useState } from "react";
import { IUseFormGroup } from "./IUseFormGroup";


/**
 * @function useFormGroup
 * - O hook serve para o componente FormGroup
 */

export function useFormGroup(): IUseFormGroup {

    const [isLoading, setIsLoading] = useState();
    /**
    * @function handleSubmitForm
    * - A função manipula o evento de submissão do formulario para validar informações e enviar.
    * 
    * @param {EventListener} ev
    * @returns void
    */
    const handleSubmitForm = (ev: any) => {
        ev.preventDefault();
    }

    return {
        isLoading,
        setIsLoading,
        handleSubmitForm,
    }
}
import { useState } from "react";
import { IUseSelectGroup } from "./IUseSelectGroup";

/**
 * @function useSelectGroup
 * - O hook serve para o componente SelectGroup
 */

export function useSelectGroup(): IUseSelectGroup {

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
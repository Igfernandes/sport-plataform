import { useState } from "react";
import { IUseTextAreaGroup } from "./IUseTextAreaGroup";


/**
 * @function useTextAreaGroup
 * - O hook serve para o componente TextAreaGroup
 */

export function useTextAreaGroup(): IUseTextAreaGroup {

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
        handleSubmitForm,
    }
}
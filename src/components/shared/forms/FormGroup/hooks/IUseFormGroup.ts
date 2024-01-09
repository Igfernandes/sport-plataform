import { Dispatch } from "react";

export interface IUseFormGroup {
    isLoading: any,
    setIsLoading: Dispatch<(prevState: undefined) => undefined>,
    handleSubmitForm: (ev: any) => void,
}
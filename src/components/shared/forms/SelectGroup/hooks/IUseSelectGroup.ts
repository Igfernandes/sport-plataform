import { Dispatch } from "react";

export interface IUseSelectGroup {
    isLoading: any,
    setIsLoading: Dispatch<(prevState: undefined) => undefined>,
    handleSubmitForm: (ev: any) => void,
}
import { PostContactUsPayload } from '@services/ContactUs/Post/types';
import usePostContactUsMutate from '@services/ContactUs/Post/usePostBiddingMutate';
import { RegionsDataCity, RegionsDataStates } from '@services/Regions/types';
import useGetRegions from '@services/Regions/useGetSRegions';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export function useContactUs() {
  const { mutateAsync: postContactUs, isLoading, isError, data } = usePostContactUsMutate();
  const [response, setResponse] = useState('');
  const { data: statesData, isFetching } = useGetRegions({ type: 'state' });
  const [states, setStates] = useState<Array<RegionsDataStates>>(statesData);
  const [statesSelected, setStateSelected] = useState('');
  const {
    data: citiesData,
    refetch,
    isLoading: isFetchingCity,
  } = useGetRegions({ type: 'city', state: statesSelected });
  const [cities, setCities] = useState<RegionsDataCity>(citiesData);

  useEffect(() => {
    setStates(statesData);
  }, [isFetching]);

  useEffect(() => {
    refetch().then((response) => {
      setCities(response.data as any);
    });
  }, [isFetchingCity, statesSelected]);

  useEffect(() => {
    if (data) setResponse('Enviando com sucesso!');
    else if (isError) {
      setResponse('Ocorreu um problema ao enviar. Tente novamente!');
      setTimeout(() => {
        setResponse('');
      }, 4000);
    }
  }, [data, isError]);

  const handleGetCities = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setStateSelected(target.value);
  };

  const handleSubmitContactForm = async (ev: FormEvent<HTMLFormElement>) => {
    setResponse('Enviando...');
    ev.preventDefault();
    const formElement = ev.target;
    const payload = {} as PostContactUsPayload;

    /** @ts-ignore  */
    for (const input of formElement.querySelectorAll('[name]')) {
      /** @ts-ignore Será ignorado até ser refatorado essa parte toda do formulário */
      payload[input.name] = input.value;
    }

    await postContactUs(payload);
  };

  return {
    handleGetCities,
    cities,
    states,
    response,
    handleSubmitContactForm,
    isLoading: isLoading || response,
  };
}

import { PostBiddingPayload } from '@services/Bidding/Post/types';
import usePostBiddingMutate from '@services/Bidding/Post/usePostBiddingMutate';
import { RegionsDataCity, RegionsDataStates } from '@services/Regions/types';
import useGetRegions from '@services/Regions/useGetSRegions';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export function useModalBidding() {
  const { data: statesData, isFetching } = useGetRegions({ type: 'state' });
  const [states, setStates] = useState<Array<RegionsDataStates>>(statesData);
  const [statesSelected, setStateSelected] = useState('');
  const [citySelected, setCitySelected] = useState('');
  const {
    data: citiesData,
    refetch,
    isLoading: isFetchingCity,
  } = useGetRegions({ type: 'city', state: statesSelected });
  const [cities, setCities] = useState<RegionsDataCity>(citiesData);
  const [response, setResponse] = useState('');
  const {
    mutateAsync: postBidding,
    isLoading,
    isError,
    data,
  } = usePostBiddingMutate({
    success: () => {
      setResponse('Enviando com sucesso!');
    },
    error: () => {
      setResponse('Ocorreu um problema ao enviar. Tente novamente!');
    },
  });

  useEffect(() => {
    setStates(statesData);
  }, [isFetching]);

  useEffect(() => {
    refetch().then((response) => {
      setCities(response.data as any);
    });
  }, [isFetchingCity, statesSelected]);

  useEffect(() => {
    if (data ?? []) setResponse('Enviando com sucesso!');
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

  const handleUpdatingFileName = (ev: any) => {
    let name = ev.target.files[0].name;
    let content = ev.target.closest('label');

    content.querySelector('span').innerHTML = name.length > 22 ? name.slice(0, 22) + '...' : name;
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    setResponse('Enviando...');
    ev.preventDefault();
    const formElement = ev.target;
    const payload = {} as PostBiddingPayload;

    payload['docs'] = new Array();
    /** @ts-ignore  */
    for (const input of formElement.querySelectorAll('[name]')) {
      if (input.name.indexOf('docs') != -1) {
        payload['docs'].push(input.files[0]);
        continue;
      } else if (input.name.indexOf('logotipo') != -1) {
        payload.logotype = input.files[0];
        continue;
      }

      /** @ts-ignore Será ignorado até ser refatorado essa parte toda do formulário */
      payload[input.name] = input.value;
    }

    await postBidding(payload);
  };

  return {
    handleUpdatingFileName,
    states,
    cities,
    handleGetCities,
    citySelected,
    setCitySelected,
    response,
    onSubmit,
    isLoading: isLoading || response,
  };
}

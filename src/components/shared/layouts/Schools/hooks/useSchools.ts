import { RegionsDataCity, RegionsDataStates } from '@services/Regions/types';
import useGetRegions from '@services/Regions/useGetSRegions';
import { SchoolsData } from '@services/Schools/types';
import useGetSchools from '@services/Schools/useGetSchools';
import { ChangeEvent, useEffect, useState } from 'react';

export const useSchools = () => {
  const { data: statesData, isFetching } = useGetRegions({ type: 'state' });
  const [states, setStates] = useState<Array<RegionsDataStates>>(statesData);
  const [statesSelected, setStateSelected] = useState('');
  const [citySelected, setCitySelected] = useState('');
  const {
    data: citiesData,
    refetch,
    isLoading: isFetchingCity,
  } = useGetRegions({ type: 'city', state: statesSelected });
  const {
    data,
    refetch: refetchSchools,
    isFetching: isFetchingSchools,
  } = useGetSchools({
    estado: statesSelected,
    cidade: citySelected,
  });
  const [schools, setSchools] = useState<Array<SchoolsData>>();
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
    if (citySelected && statesSelected) setSchools(data ?? []);
  }, [isFetchingSchools]);

  const handleSubmitGetSchools = async (ev: any) => {
    ev.preventDefault();
    refetchSchools();
  };

  const handleGetCities = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setStateSelected(target.value);
  };

  return {
    states,
    schools,
    setSchools,
    handleSubmitGetSchools,
    handleGetCities,
    cities,
    setCitySelected,
    citySelected,
  };
};

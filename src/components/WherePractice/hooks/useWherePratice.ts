import { RegionsDataCity, RegionsDataStates } from '@services/Regions/types';
import useGetRegions from '@services/Regions/useGetSRegions';
import { SchoolsData } from '@services/Schools/types';
import useGetSchools from '@services/Schools/useGetSchools';
import { ChangeEvent, useEffect, useState } from 'react';

export function useWherePratice() {
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
    data: clubsSchools,
    refetch: refetchSchoolsClubs,
    isFetching: isFetchingClubSchools,
  } = useGetSchools({
    type: 'club',
    estado: statesSelected,
    cidade: citySelected,
  });
  const {
    data: federationsSchools,
    refetch: refetchSchoolsFederation,
    isFetching: isFetchingFederationSchools,
  } = useGetSchools({
    type: 'federation',
    estado: statesSelected,
    cidade: citySelected,
  });
  const [clubSchools, setClubSchools] = useState<Array<SchoolsData>>([]);
  const [federationSchools, setFederationSchools] = useState<Array<SchoolsData>>([]);
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
    if (citySelected && statesSelected) {
      setFederationSchools(federationSchools);
      setClubSchools(clubSchools);
    }
  }, [isFetchingClubSchools, isFetchingFederationSchools]);

  const handleSubmitGetSchools = async (ev: any) => {
    ev.preventDefault();
    refetchSchoolsClubs();
    refetchSchoolsFederation();
  };

  const handleGetCities = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setStateSelected(target.value);
  };

  return {
    states,
    clubsSchools,
    federationsSchools,
    handleSubmitGetSchools,
    handleGetCities,
    cities,
    setCitySelected,
    citySelected,
  };
}

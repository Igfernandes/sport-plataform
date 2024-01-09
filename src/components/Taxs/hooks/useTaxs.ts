import { TaxsResponse } from '@services/Taxs/Get/types';
import useGetTaxs from '@services/Taxs/Get/useGetTaxs';
import { useEffect, useState } from 'react';

export function useTaxs() {
  const { data, isFetched } = useGetTaxs();
  const [products, setProducts] = useState<TaxsResponse>(data as TaxsResponse);

  useEffect(() => {
    setProducts(data as TaxsResponse);
  }, [isFetched]);

  return {
    products,
  };
}

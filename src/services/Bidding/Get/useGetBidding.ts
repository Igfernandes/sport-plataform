import { useQuery } from 'react-query';
import useGet from '.';
import { GetBiddingProps } from './types';

export default function useGetBidding(queryString?: GetBiddingProps) {
  const { getBidding } = useGet();

  async function handle() {
    const { data } = await getBidding(queryString ?? {});
    return data;
  }

  const { data, ...rest } = useQuery(['bidding'], handle);
  return { data: data || [], ...rest };
}

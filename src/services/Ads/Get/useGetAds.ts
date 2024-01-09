import { useQuery } from "react-query";
import useGet from ".";
import { GetAdsProps } from "./types";

export default function useGetAds(queryString?: GetAdsProps) {
  const { getAds } = useGet();

  async function handle() {
    const { data } = await getAds(queryString);
    return data;
  }

  const { data, ...rest } = useQuery(["ads"], handle);
  return { data: data || [], ...rest };
}

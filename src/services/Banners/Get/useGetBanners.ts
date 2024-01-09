import { useQuery } from "react-query";
import useGet from ".";
import { GetBannersProps } from "./types";

export default function useGetBanners(queryString?: GetBannersProps) {
  const { getBanners } = useGet();

  async function handle() {
    const { data } = await getBanners(queryString);
    return data;
  }

  const { data, ...rest } = useQuery(["banners"], handle);
  return { data: data || [], ...rest };
}

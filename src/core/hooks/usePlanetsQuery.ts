import { PlanetResponseData } from '../constants/types';
import { useApi } from '../context/ApiProvider';
import { useSuspenseQuery } from '@tanstack/react-query';

type PlanetQueryParams = {
  planetId?: number;
  page?: number;
};

/**
 * Custom hook for querying planet data.
 *
 * @param params - Optional parameters for the query.
 * @returns The result of the query.
 */
export default function usePlanetsQuery(
  params: PlanetQueryParams | null = null
) {
  const api = useApi();
  const planetUrl = `/planets/${params?.planetId ?? ''}${
    params?.page ?? 0 > 0 ? `?page=${params?.page}` : ''
  }`;

  const query = useSuspenseQuery({
    queryKey: ['listPlanet', params?.page],
    queryFn: async () => {
      const { data } = await api.get<PlanetResponseData>(planetUrl);
      return data;
    },
  });

  return query;
}

import { useMemo } from 'react';
import { PlanetResponseData } from '../constants/types';
import { useApi } from '../context/ApiProvider';
import { useSuspenseQuery } from '@tanstack/react-query';

type PlanetQueryParams = {
  planetId: number;
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
  const planetUrl = useMemo(
    () => `/planets/${params?.planetId ?? ''}`,
    [params]
  );

  const query = useSuspenseQuery({
    queryKey: ['listPlanet'],
    queryFn: async () => {
      const { data } = await api.get<PlanetResponseData>(planetUrl);
      return data;
    },
  });

  return query;
}

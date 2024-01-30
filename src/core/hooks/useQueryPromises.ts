import { useSuspenseQuery } from '@tanstack/react-query';
import { useApi } from '../context/ApiProvider';

export default function useQueryPromises(params: Array<string>) {
  const api = useApi();

  const query = useSuspenseQuery({
    queryKey: params,
    queryFn: async () => {
      return await Promise.all(
        params.map((url) => api.get<unknown>(url).then((rs) => rs.data))
      );
    },
  });

  return query;
}

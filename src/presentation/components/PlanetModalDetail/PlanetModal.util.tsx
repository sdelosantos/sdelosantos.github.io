import { useMemo } from 'react';
import PeapleTable from '../PeapleTable/PeapleTable';
import useQueryPromises from '../../../core/hooks/useQueryPromises';
import { applySuspenseLoading } from '../../../components/HOC';
import { PeapleResponseData, Person } from '../../../core/constants/types';

const emptyResponse: PeapleResponseData = {
  count: 0,
  next: '',
  previous: '',
  results: [],
};
type PeapleTabProps = {
  urlPeaple: string[];
};
export const PeapleTab = applySuspenseLoading(
  ({ urlPeaple }: PeapleTabProps) => {
    const dataList = useQueryPromises(urlPeaple);

    const peapleData = useMemo<PeapleResponseData>(() => {
      if (dataList.isFetched) {
        const results = dataList.data as Person[];
        return { count: results.length, next: '', previous: '', results };
      }
      return emptyResponse;
    }, [dataList]);

    return <PeapleTable data={peapleData} />;
  },
  'Loading'
);

import { useMemo } from 'react';
import PeopleTable from '../PeopleTable/PeopleTable';
import useQueryPromises from '../../../core/hooks/useQueryPromises';
import { applySuspenseLoading } from '../../../components/HOC';
import { PeopleResponseData, Person } from '../../../core/constants/types';

const emptyResponse: PeopleResponseData = {
  count: 0,
  next: '',
  previous: '',
  results: [],
};
type PeopleTabProps = {
  urlPeople: string[];
};
export const PeopleTab = applySuspenseLoading(
  ({ urlPeople }: PeopleTabProps) => {
    const dataList = useQueryPromises(urlPeople);

    const peopleData = useMemo<PeopleResponseData>(() => {
      if (dataList.isFetched) {
        const results = dataList.data as Person[];
        return { count: results.length, next: '', previous: '', results };
      }
      return emptyResponse;
    }, [dataList]);

    return <PeopleTable data={peopleData} />;
  },
  'Loading'
);

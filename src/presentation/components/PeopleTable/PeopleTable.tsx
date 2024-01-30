import { useCallback, useEffect, useState } from 'react';
import {
  PeopleResponseData,
  Person,
  Planet,
} from '../../../core/constants/types';
import { formatDateToString } from '../../../core/utils/format';
import DataTable, { ColumnName } from '../../../components/DataTable/DataTable';
import { filterArray } from '../../../core/utils/array';

type PeopleTableProps = {
  search?: string;
  data: PeopleResponseData;
  onSelectedPlanet?: (planet: Planet) => void;
};

const PeopleTable = ({ search, onSelectedPlanet, data }: PeopleTableProps) => {
  const [people, setPeoples] = useState<Person[]>([]);

  const applySearch = useCallback(
    (data: Person[]) => {
      if (search) {
        const result = filterArray(data, ['name', 'gender'], search);
        return result;
      } else {
        return data;
      }
    },
    [search]
  );

  useEffect(() => {
    const people = data?.results ?? [];
    setPeoples(applySearch(people));
  }, [data, applySearch]);

  return (
    <DataTable data={people} onRowClick={onSelectedPlanet}>
      <ColumnName label='Person Name' name='name' />
      <ColumnName label='Gender' name='gender' />
      <ColumnName label='Height' name='height' />
      <ColumnName label='Hair Color' name='hair_color' />
      <ColumnName label='Birth Year' name='birth_year' />
      <ColumnName
        label='Created'
        name='created'
        format={(value) => formatDateToString(value)}
      />
      <ColumnName
        label='Edited'
        name='edited'
        format={(value) => formatDateToString(value)}
      />
    </DataTable>
  );
};

export default PeopleTable;

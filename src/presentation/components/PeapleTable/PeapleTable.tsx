import { useCallback, useEffect, useState } from 'react';
import {
  PeapleResponseData,
  Person,
  Planet,
} from '../../../core/constants/types';
import { formatDateToString } from '../../../core/utils/format';
import DataTable, { ColumnName } from '../../../components/DataTable/DataTable';
import { filterArray } from '../../../core/utils/array';

type PeapleTableProps = {
  search?: string;
  data: PeapleResponseData;
  onSelectedPlanet?: (planet: Planet) => void;
};

const PeapleTable = ({ search, onSelectedPlanet, data }: PeapleTableProps) => {
  const [peaple, setPeaples] = useState<Person[]>([]);

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
    const peaple = data?.results ?? [];
    setPeaples(applySearch(peaple));
  }, [data, applySearch]);

  return (
    <DataTable data={peaple} onRowClick={onSelectedPlanet}>
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

export default PeapleTable;

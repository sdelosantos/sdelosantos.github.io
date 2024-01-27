import { useCallback, useEffect, useState } from 'react';
import usePlanetsQuery from '../../../core/hooks/usePlanetsQuery';
import { Planet, PlanetResponseData } from '../../../core/constants/types';
import { applySuspenseLoading } from '../../../components/HOC';
import { formatDateToString, parseToDecimal } from '../../../core/utils/format';
import DataTable, { ColumnName } from '../../../components/DataTable/DataTable';
import { filterArray } from '../../../core/utils/array';

type PlanetTableProps = {
  search?: string;
  pageIndex?: number;
  onDataLoaded?: (data: PlanetResponseData) => void;
  onSelectedPlanet?: (planet: Planet) => void;
};

const LOADING_MESSAGE = 'Loading Planets';
const PlanetsTable = applySuspenseLoading<PlanetTableProps>(
  ({ search, pageIndex = 0, onDataLoaded, onSelectedPlanet }) => {
    const planetsQuery = usePlanetsQuery({
      page: pageIndex + 1,
    });
    const [listPlanets, setListPlanets] = useState<Planet[]>([]);

    const applySearch = useCallback(
      (data: Planet[]) => {
        if (search) {
          const result = filterArray(
            data,
            ['name', 'terrain', 'climate'],
            search
          );
          return result;
        } else {
          return data;
        }
      },
      [search]
    );

    useEffect(() => {
      if (planetsQuery.isFetched) {
        onDataLoaded?.(planetsQuery.data);
        const planets = planetsQuery.data?.results ?? [];
        setListPlanets(applySearch(planets));
      }
    }, [onDataLoaded, planetsQuery, applySearch]);

    return (
      <DataTable data={listPlanets} onRowClick={onSelectedPlanet}>
        <ColumnName label='Planet Name' name='name' />
        <ColumnName label='Terrain' name='terrain' />
        <ColumnName label='Climate' name='climate' />
        <ColumnName label='Gravity' name='gravity' />
        <ColumnName
          label='Population'
          name='population'
          format={(value) => parseToDecimal(value)}
        />
        <ColumnName
          label='Created'
          name='created'
          format={(value) => formatDateToString(value)}
        />
      </DataTable>
    );
  },
  LOADING_MESSAGE
);

export default PlanetsTable;

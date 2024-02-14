import { useEffect, useRef, useState } from 'react';
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
  ({
    search,
    pageIndex = 0,
    onDataLoaded,
    onSelectedPlanet,
  }: PlanetTableProps) => {
    const planetsQuery = usePlanetsQuery({
      page: pageIndex + 1,
    });
    const rawData = useRef<Planet[]>([]);
    const [listPlanets, setListPlanets] = useState<Planet[]>([]);

    useEffect(() => {
      const data = [...rawData.current];
      if (search) {
        const result = filterArray(
          data,
          ['name', 'terrain', 'climate'],
          search
        );
        console.log('search', result);
        setListPlanets(result);
      } else {
        setListPlanets(data);
      }
    }, [search]);

    useEffect(() => {
      if (planetsQuery.isFetched) {
        onDataLoaded?.(planetsQuery.data);
        const planets = planetsQuery.data?.results ?? [];
        rawData.current = [...planets];
        console.log('data');
        setListPlanets(planets);
      }
    }, [onDataLoaded, planetsQuery]);

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

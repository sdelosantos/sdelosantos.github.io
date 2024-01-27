import { useCallback, useState } from 'react';
import { StyledTableContainer } from '../../../components/DataTable/DataTable.style';
import {
  PaginationProps,
  TablePagination,
} from '../../../components/DataTable/DataTable.util';
import PlanetsTable from './PlanetsTable';
import { PlanetResponseData } from '../../../core/constants/types';
import SearchInput from '../../../components/SearchInput/SearchInput';

const initialPagination: PaginationProps = {
  count: 0,
  pageSize: 10,
  currentPageIndex: 0,
};
export default function PlanetTableWrapper() {
  const [search, setSearch] = useState<string>();
  const [pagination, setPagination] =
    useState<PaginationProps>(initialPagination);

  const handleDataLoad = useCallback(({ count }: PlanetResponseData) => {
    setPagination((stPagination) => ({ ...stPagination, count }));
  }, []);

  const handleMovePage = useCallback((currentPageIndex: number) => {
    setPagination((stPagination) => ({ ...stPagination, currentPageIndex }));
  }, []);

  return (
    <StyledTableContainer>
      <SearchInput
        onChangeText={setSearch}
        delayBeforeTriggerChange={500}
        placeHolder='Search by Planet, Terrain, Climate '
      />
      <PlanetsTable
        onDataLoaded={handleDataLoad}
        search={search}
        pageIndex={pagination.currentPageIndex}
      />
      {!search && (
        <TablePagination {...pagination} onPageChange={handleMovePage} />
      )}
    </StyledTableContainer>
  );
}

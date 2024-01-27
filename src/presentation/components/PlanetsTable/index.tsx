import { useCallback, useState } from 'react';
import { StyledTableContainer } from '../../../components/DataTable/DataTable.style';
import {
  PaginationProps,
  TablePagination,
} from '../../../components/DataTable/DataTable.util';
import PlanetsTable from './PlanetsTable';
import { Planet, PlanetResponseData } from '../../../core/constants/types';
import SearchInput from '../../../components/SearchInput/SearchInput';
import PlanetDetailModal from '../PlanetModalDetail/PlanetModalDetail';

const initialPagination: PaginationProps = {
  count: 0,
  pageSize: 10,
  currentPageIndex: 0,
};
export default function PlanetTableWrapper() {
  const [showModalDetail, setShowModalDetail] = useState<boolean>(false);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  const [search, setSearch] = useState<string>();
  const [pagination, setPagination] =
    useState<PaginationProps>(initialPagination);

  const handleSelectPlanet = useCallback((planet: Planet) => {
    setSelectedPlanet(planet);
    setShowModalDetail(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPlanet(null);
    setShowModalDetail(false);
  }, []);

  const handleDataLoad = useCallback(({ count }: PlanetResponseData) => {
    setPagination((stPagination) => ({ ...stPagination, count }));
  }, []);

  const handleMovePage = useCallback((currentPageIndex: number) => {
    setPagination((stPagination) => ({ ...stPagination, currentPageIndex }));
  }, []);

  return (
    <>
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
          onSelectedPlanet={handleSelectPlanet}
        />
        {!search && (
          <TablePagination {...pagination} onPageChange={handleMovePage} />
        )}
      </StyledTableContainer>
      <PlanetDetailModal
        openModal={showModalDetail}
        planet={selectedPlanet}
        onClose={handleCloseModal}
      />
    </>
  );
}

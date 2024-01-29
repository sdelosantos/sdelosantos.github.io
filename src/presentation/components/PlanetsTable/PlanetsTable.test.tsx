import { screen, render } from '@testing-library/react';
import PlanetsTable from './PlanetsTable';
import { filterArray } from '../../../core/utils/array';
import { parseToDecimal } from '../../../core/utils/format';

jest.mock('../../../core/utils/array', () => ({
  filterArray: jest.fn(() => []),
}));

jest.mock('../../../core/utils/format', () => ({
  parseToDecimal: jest.fn(),
}));

jest.mock('../../../core/context/ApiProvider', () => ({
  useApi: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useSuspenseQuery: jest.fn(),
}));

describe('PlanetsTable', () => {
  it('should render a DataTable component with the expected columns and labels', () => {
    // Arrange
    const search = 'Tatooine';
    const pageIndex = 2;
    const onDataLoaded = jest.fn();
    const onSelectedPlanet = jest.fn();

    // Act
    render(
      <PlanetsTable
        search={search}
        pageIndex={pageIndex}
        onDataLoaded={onDataLoaded}
        onSelectedPlanet={onSelectedPlanet}
      />
    );

    // Assert
    expect(screen.getByLabelText('Planet Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Terrain')).toBeInTheDocument();
    expect(screen.getByLabelText('Climate')).toBeInTheDocument();
    expect(screen.getByLabelText('Gravity')).toBeInTheDocument();
    expect(screen.getByLabelText('Population')).toBeInTheDocument();
    expect(screen.getByLabelText('Created')).toBeInTheDocument();
  });

  it('should apply search filtering to the list of planets when a search term is provided', () => {
    // Arrange
    const search = 'Tatooine';
    const pageIndex = 2;
    const onDataLoaded = jest.fn();
    const onSelectedPlanet = jest.fn();

    // Act
    render(
      <PlanetsTable
        search={search}
        pageIndex={pageIndex}
        onDataLoaded={onDataLoaded}
        onSelectedPlanet={onSelectedPlanet}
      />
    );

    // Assert
    expect(filterArray).toHaveBeenCalledWith(
      expect.any(Array),
      ['name', 'terrain', 'climate'],
      search
    );
  });

  it('should format the "Population" column using the "parseToDecimal" function', () => {
    // Arrange
    const search = 'Tatooine';
    const pageIndex = 2;
    const onDataLoaded = jest.fn();
    const onSelectedPlanet = jest.fn();

    // Act
    render(
      <PlanetsTable
        search={search}
        pageIndex={pageIndex}
        onDataLoaded={onDataLoaded}
        onSelectedPlanet={onSelectedPlanet}
      />
    );

    // Assert
    expect(parseToDecimal).toHaveBeenCalledWith(expect.any(String));
  });

  it('should handle the case when the fetched planet data is null or undefined', () => {
    // Arrange
    const search = 'Tatooine';
    const pageIndex = 2;
    const onDataLoaded = jest.fn();
    const onSelectedPlanet = jest.fn();

    // Act
    render(
      <PlanetsTable
        search={search}
        pageIndex={pageIndex}
        onDataLoaded={onDataLoaded}
        onSelectedPlanet={onSelectedPlanet}
      />
    );

    // Assert
    expect(onDataLoaded).toHaveBeenCalledWith(null);
  });

  it('should handle the case when the fetched planet data does not have a "results" property', () => {
    // Arrange
    const search = 'Tatooine';
    const pageIndex = 2;
    const onDataLoaded = jest.fn();
    const onSelectedPlanet = jest.fn();

    // Act
    render(
      <PlanetsTable
        search={search}
        pageIndex={pageIndex}
        onDataLoaded={onDataLoaded}
        onSelectedPlanet={onSelectedPlanet}
      />
    );

    // Assert
    expect(onDataLoaded).toHaveBeenCalledWith(undefined);
  });

  it('should handle the case when the "onDataLoaded" callback is not provided', () => {
    // Arrange
    const search = 'Tatooine';
    const pageIndex = 2;
    const onSelectedPlanet = jest.fn();

    // Act
    render(
      <PlanetsTable
        search={search}
        pageIndex={pageIndex}
        onSelectedPlanet={onSelectedPlanet}
      />
    );

    // Assert
    expect(onSelectedPlanet).toHaveBeenCalledTimes(0);
  });
});

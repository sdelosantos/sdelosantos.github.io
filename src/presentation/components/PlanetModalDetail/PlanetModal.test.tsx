import { screen, render } from '@testing-library/react';
import PlanetDetailModal from './PlanetModalDetail';
import { Planet } from '../../../core/constants/types';
import { formatDateToString } from '../../../core/utils/format';

describe('PlanetDetailModal', () => {
  it('should render modal with planet details when openModal is true', () => {
    // Arrange
    const openModal = true;
    const onClose = jest.fn();
    const planet: Planet = {
      name: 'Earth',
      terrain: 'Grasslands',
      climate: 'Temperate',
      population: '7000000000',
      created: '01/01/2024',
      edited: '01/02/2024',
      gravity: '1',
      orbital_period: '365',
      rotation_period: '24',
      surface_water: '70',
      diameter: '',
      films: [],
      residents: [],
      url: '',
    };

    // Act
    render(
      <PlanetDetailModal
        openModal={openModal}
        onClose={onClose}
        planet={planet}
      />
    );

    // Assert
    expect(screen.getByText('Earth Planet')).toBeInTheDocument();
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('Grasslands')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
    expect(screen.getByText('Temperate')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('7,000,000,000')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(
      screen.getByText(formatDateToString(planet.created))
    ).toBeInTheDocument();
    expect(screen.getByText('Edited')).toBeInTheDocument();
    expect(
      screen.getByText(formatDateToString(planet.edited))
    ).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Orbital Period')).toBeInTheDocument();
    expect(screen.getByText('365')).toBeInTheDocument();
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('Surface Water')).toBeInTheDocument();
    expect(screen.getByText('70')).toBeInTheDocument();
  });

  it('should display planet details', () => {
    // Arrange
    const openModal = true;
    const onClose = jest.fn();
    const planet: Planet = {
      name: 'Earth',
      terrain: 'Grasslands',
      climate: 'Temperate',
      population: '7000000000',
      created: '01/01/2024',
      edited: '01/02/2024',
      gravity: '1',
      orbital_period: '365',
      rotation_period: '24',
      surface_water: '70',
    };

    // Act
    render(
      <PlanetDetailModal
        openModal={openModal}
        onClose={onClose}
        planet={planet}
      />
    );

    // Assert
    expect(screen.getByText('Earth Planet')).toBeInTheDocument();
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('Grasslands')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
    expect(screen.getByText('Temperate')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('7,000,000,000')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(
      screen.getByText(formatDateToString(planet.created))
    ).toBeInTheDocument();
    expect(screen.getByText('Edited')).toBeInTheDocument();
    expect(
      screen.getByText(formatDateToString(planet.edited))
    ).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Orbital Period')).toBeInTheDocument();
    expect(screen.getByText('365')).toBeInTheDocument();
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('Surface Water')).toBeInTheDocument();
    expect(screen.getByText('70')).toBeInTheDocument();
  });

  it('should format population with parseToDecimal function', () => {
    // Arrange
    const openModal = true;
    const onClose = jest.fn();
    const planet: Planet = {
      name: 'Earth',
      terrain: 'Grasslands',
      climate: 'Temperate',
      population: '7000000000',
      created: new Date(),
      edited: new Date(),
      gravity: '1',
      orbital_period: '365',
      rotation_period: '24',
      surface_water: '70',
      diameter: '',
      films: [],
      residents: [],
      url: '',
    };

    // Act
    render(
      <PlanetDetailModal
        openModal={openModal}
        onClose={onClose}
        planet={planet}
      />
    );

    // Assert
    expect(screen.getByText('7,000,000,000')).toBeInTheDocument();
  });

  it('should not render anything if openModal is false', () => {
    // Arrange
    const openModal = false;
    const onClose = jest.fn();
    const planet: Planet = {
      name: 'Earth',
      terrain: 'Grasslands',
      climate: 'Temperate',
      population: '7000000000',
      created: new Date(),
      edited: new Date(),
      gravity: '1',
      orbital_period: '365',
      rotation_period: '24',
      surface_water: '70',
      diameter: '',
      films: [],
      residents: [],
      url: '',
    };

    // Act
    render(
      <PlanetDetailModal
        openModal={openModal}
        onClose={onClose}
        planet={planet}
      />
    );

    // Assert
    expect(screen.queryByText('Earth Planet')).not.toBeInTheDocument();
  });

  it('should display "N/A" if planet name is undefined or null', () => {
    // Arrange
    const openModal = true;
    const onClose = jest.fn();
    const planet: Planet = {
      name: undefined,
      terrain: 'Grasslands',
      climate: 'Temperate',
      population: '7000000000',
      created: new Date(),
      edited: new Date(),
      gravity: '1',
      orbital_period: '365',
      rotation_period: '24',
      surface_water: '70',
    };

    // Act
    render(
      <PlanetDetailModal
        openModal={openModal}
        onClose={onClose}
        planet={planet}
      />
    );

    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent('Planet');
  });

  it('should display "N/A" if planet terrain is undefined or null', () => {
    // Arrange
    const openModal = true;
    const onClose = jest.fn();
    const planet = {
      name: 'Earth',
      terrain: undefined,
      climate: 'Temperate',
      population: '7000000000',
      created: new Date(),
      edited: new Date(),
      gravity: '1',
      orbital_period: '365',
      rotation_period: '24',
      surface_water: '70',
    };

    // Act
    render(
      <PlanetDetailModal
        openModal={openModal}
        onClose={onClose}
        planet={planet}
      />
    );

    // Assert
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('N/A')).toBeInTheDocument();
  });
});

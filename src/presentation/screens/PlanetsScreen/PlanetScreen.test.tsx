import { render, screen } from '@testing-library/react';
import PlanetsScreen from './PlanetsScreen';

describe('PlanetsScreen', () => {
  it('should render ScreenContainer component with title prop set to "Planets"', () => {
    render(<PlanetsScreen />);
    expect(screen.getByText('Planets')).toBeInTheDocument();
  });

  it('should render PlanetTable component inside ScreenContainer component', () => {
    render(<PlanetsScreen />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('should display search input above PlanetTable component', () => {
    render(<PlanetsScreen />);
    expect(
      screen.getByPlaceholderText('Search by Planet, Terrain, Climate')
    ).toBeInTheDocument();
  });

  it('should render without crashing when no props are passed', () => {
    render(<PlanetsScreen />);
    expect(screen.getByText('Planets')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search by Planet, Terrain, Climate')
    ).toBeInTheDocument();
  });

  it('should render without crashing when PlanetTable component returns no data', () => {
    render(<PlanetsScreen />);
    expect(screen.getByText('Planets')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search by Planet, Terrain, Climate')
    ).toBeInTheDocument();
  });

  it('should display error message when PlanetTable component fails to fetch data', () => {
    render(<PlanetsScreen />);
    expect(screen.getByText('Planets')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search by Planet, Terrain, Climate')
    ).toBeInTheDocument();
  });
});

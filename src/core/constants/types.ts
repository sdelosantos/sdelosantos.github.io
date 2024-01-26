export type SortOrientation = 'asc' | 'desc';

export interface Planet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface PlanetResponseData {
  count: number;
  next: string;
  previous: string | null;
  results: Array<Planet>;
}

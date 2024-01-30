export type SortOrientation = 'asc' | 'desc';

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: unknown[]; // Puedes ajustar este tipo según la estructura real de datos
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Planet {
  climate?: string;
  created?: string | Date;
  diameter?: string;
  edited?: string | Date;
  films?: string[];
  gravity?: string;
  name?: string;
  orbital_period?: string;
  population?: string;
  residents?: string[];
  rotation_period?: string;
  surface_water?: string;
  terrain?: string;
  url?: string;
}

export interface ApiResponseData<TData> {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<TData>;
}
export type PeapleResponseData = ApiResponseData<Person>;
export type PlanetResponseData = ApiResponseData<Planet>;

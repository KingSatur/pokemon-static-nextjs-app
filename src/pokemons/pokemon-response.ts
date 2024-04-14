export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonResponse[];
}

export interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

export interface PokemonResponse {
  name: string;
  url: string;
}

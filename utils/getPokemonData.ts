import { pokeApi } from "../api";
import { PokemonDetailDto } from "../interfaces";

export const getPokemonInfo = async function (nameOrId: string) {
  const { data } = await pokeApi.get<PokemonDetailDto>(`/pokemon/${nameOrId}`);

  return {
    id: data?.id,
    name: data?.name,
    sprites: data?.sprites,
  };
};

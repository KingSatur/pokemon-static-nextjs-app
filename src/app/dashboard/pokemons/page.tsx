import { LocalPokemon, PokemonGrid, PokemonListResponse } from "@/src/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<LocalPokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonListResponse = await res.json();

  return data.results.map((pokemon) => ({
    name: pokemon.name,
    id: parseInt(pokemon.url.split("/").at(-2)!),
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(125);

  return (
    <div className="p-2 flex flex-col">
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

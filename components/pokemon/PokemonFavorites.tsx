import { Card, Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { PokemonCardFavorite } from "./PokemonCardFavorite";

interface Props {
  pokemons: number[];
}

export const PokemonCardFavorites: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons?.map((id) => (
        <PokemonCardFavorite key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};

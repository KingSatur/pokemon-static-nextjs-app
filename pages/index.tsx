import { Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage } from "next";
import React from "react";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts/Layout";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponseDto, PokemonResultDto } from "../interfaces";

interface Props {
  pokemons: PokemonResultDto[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon app">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={pokemon?.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export async function getStaticProps(ctx: any) {
  const { data } = await pokeApi.get<PokemonListResponseDto>(
    "/pokemon/?limit=151"
  );

  const pokemons = await Promise.all(
    data?.results?.map(async ({ name, url }, index) => {
      return {
        name,
        url,
        id: index + 1,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          index + 1
        }.svg`,
      };
    })
  );

  return {
    props: {
      pokemons,
    },
  };
}

export default Home;

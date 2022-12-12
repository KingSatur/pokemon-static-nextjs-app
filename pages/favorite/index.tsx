import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { NoFavorite } from "../../components/ui/NoFavorite";
import { localFavorites } from "../../utils";
import { PokemonCard } from "../../components/pokemon";
import { PokemonCardFavorites } from "../../components/pokemon/PokemonFavorites";

const FavoritePage: NextPage = (props) => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="Favorites pokemon">
      {favoritePokemons.length ? (
        <PokemonCardFavorites pokemons={favoritePokemons} />
      ) : (
        <NoFavorite />
      )}
    </Layout>
  );
};

export default FavoritePage;

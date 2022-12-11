import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { NoFavorite } from "../../components/ui/NoFavorite";
import { localFavorites } from "../../utils";
import { PokemonCard } from "../../components/pokemon";

const FavoritePage: NextPage = (props) => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="Favorites pokemon">
      {favoritePokemons.length ? (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritePokemons?.map((id) => (
            <Grid xs={6} sm={3} xl={1} key={id}>
              <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={"100%"}
                  height={140}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      ) : (
        <NoFavorite />
      )}
    </Layout>
  );
};

export default FavoritePage;

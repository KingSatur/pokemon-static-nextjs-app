import React from "react";
import { Layout } from "../../components/layouts";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import { PokemonDetailDto } from "../../interfaces";
import { ParsedUrlQuery } from "querystring";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: PokemonDetailDto;
}
interface Params extends ParsedUrlQuery {
  id: string;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="some pokemon">
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon?.sprites?.other?.dream_world?.front_default ||
                  "/no-image.png"
                }
                alt={pokemon?.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon?.name}
              </Text>
              <Button ghost color="gradient">
                Save in favorites
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon?.sprites?.front_default}
                  alt={pokemon?.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon?.sprites?.back_default}
                  alt={pokemon?.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon?.sprites?.front_shiny}
                  alt={pokemon?.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon?.sprites?.back_shiny}
                  alt={pokemon?.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export async function getStaticPaths(ctx: any) {
  const pokemons: string[] = [...Array(151)].map((value, index) => {
    return `${index + 1}`;
  });

  return {
    paths: pokemons.map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { id } = params!;

  const { data } = await pokeApi.get<PokemonDetailDto>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;

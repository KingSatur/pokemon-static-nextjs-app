import { Container, Image, Text } from "@nextui-org/react";
import React from "react";

export const NoFavorite = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh -100px)",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>There is not favorites</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg"
        alt="No favorite pokemons"
        width={250}
        height={250}
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};

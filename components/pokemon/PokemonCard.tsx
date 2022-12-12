import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { PokemonResultDto } from "../../interfaces";

interface Props {
  pokemon: PokemonResultDto;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon?.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={3} xl={3} key={pokemon?.id} onClick={onClick}>
      <Card hoverable clickable>
        <Card.Body>
          <Card.Image src={pokemon?.imageUrl || ""} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon?.name}</Text>
            <Text>#{pokemon?.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

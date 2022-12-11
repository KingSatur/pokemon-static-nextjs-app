import { Button, Image, Spacer, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: String(theme?.colors?.gray900) || "aliceblue",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        height={70}
        width={70}
      />

      <Link href={"/"} style={{ display: "flex" }}>
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okemon
        </Text>
      </Link>
      <Spacer css={{ flex: "1" }} />
      <Button
        css={{ marginRight: "10px" }}
        ghost
        color="gradient"
        onClick={() => router.push("/favorite")}
      >
        Favorites
      </Button>
    </div>
  );
};

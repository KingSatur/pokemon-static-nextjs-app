import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

type MainProps = {
  title: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<MainProps>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemonnnn"}</title>
        <meta name="author" content="juanda" />
        <meta name="description" content="Data about pokemons" />
        <meta name="keywords" content="pokemon, pokedex" />
        <meta property="Pokemons page date" />
        <meta
          property="og:description"
          content={`This is a page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

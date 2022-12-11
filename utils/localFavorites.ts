const toggleFavorite = (id: number): void => {
  console.log("Toggle favorite llamado");

  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((idInLocalStorage) => idInLocalStorage !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isFavorite = function (id: number): boolean {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites?.includes(id);
};

const getPokemons = (): number[] => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites;
};

export default { toggleFavorite, isFavorite, getPokemons };

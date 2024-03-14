import React, { useContext } from "react";
import { FavoritesContext, albumPicsType } from "../store/FavoritesContext";
import AlbumCard from "./AlbumCard";

const FavoritesList = () => {
  const favCtx = useContext(FavoritesContext);

  const handleRemoveFavorite = (fav: albumPicsType) => {
    favCtx.removeFavorite(fav);
  };
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favCtx.favorites?.map((fav: albumPicsType) => (
          <AlbumCard
            item={fav}
            handleButton={handleRemoveFavorite}
            buttonText="Remove"
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface albumPicsType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface FavoritesContextType {
  favorites: albumPicsType[];
  addFavorite: (item: albumPicsType) => void;
  removeFavorite: (item: albumPicsType) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const useFavorites = (): FavoritesContextType =>
  useContext(FavoritesContext);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<albumPicsType[]>([]);

  const addFavorite = (item: albumPicsType): void => {
    const isItemAvailable = favorites.find((fav) => fav.id === item.id);
    if (!isItemAvailable) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (item: albumPicsType): void => {
    const filterFav = favorites.filter((fav) => fav.id !== item.id);
    setFavorites(filterFav);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

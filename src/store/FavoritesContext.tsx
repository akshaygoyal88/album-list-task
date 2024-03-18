import React, { createContext, useContext, useState, ReactNode } from "react";

export interface albumPicsType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface FavoritesContextType {
  page: number;
  favorites: albumPicsType[];
  list: albumPicsType[];
  addFavorite: (item: albumPicsType) => void;
  removeFavorite: (item: albumPicsType) => void;
  updatePage: () => void;
  updateList: (items: albumPicsType[]) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  page: 1,
  list: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  updatePage: () => {},
  updateList: () => {},
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
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<albumPicsType[]>([]);

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

  const updatePage = () => {
    setPage((prev) => prev + 1);
  };

  const updateList = (items: albumPicsType[]) => {
    setList((prev) => {
      const newItems = items.filter(
        (item) => !prev.some((prevItem) => prevItem.id === item.id)
      );
      return [...prev, ...newItems];
    });
  };

  const contextVal = {
    favorites,
    page,
    list,
    addFavorite,
    removeFavorite,
    updatePage,
    updateList,
  };

  return (
    <FavoritesContext.Provider value={contextVal}>
      {children}
    </FavoritesContext.Provider>
  );
};

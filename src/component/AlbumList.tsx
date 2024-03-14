import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext, albumPicsType } from "../store/FavoritesContext";
import AlbumCard from "./AlbumCard";

const List: React.FC = () => {
  const [items, setItems] = useState<albumPicsType[]>([]);
  const [limit, setLimit] = useState<number>(10);
  const favCtx = useContext(FavoritesContext);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=${limit}`
      );
      const data = await response.json();
      setItems(data);
    };

    fetchItems();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [limit]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <=
      document.documentElement.offsetHeight - 20
    ) {
      setLimit((prev) => prev + 10);
    }
  };

  const handleAddFav = (item: albumPicsType) => {
    favCtx.addFavorite(item);
  };

  return (
    <div>
      <h1>List Page</h1>
      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
      {items.map((item) => (
        <AlbumCard
          item={item}
          handleButton={handleAddFav}
          buttonText="Add to favorites"
        />
      ))}
    </div>
  );
};

export default List;

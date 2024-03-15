import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext, albumPicsType } from "../store/FavoritesContext";
import AlbumCard from "./AlbumCard";
import "./AlbumList.scss";

function debounce(func: Function, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const AlbumList: React.FC = () => {
  const [items, setItems] = useState<albumPicsType[]>([]);
  const [page, setPage] = useState<number>(1);
  const favCtx = useContext(FavoritesContext);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`
      );
      const data = await response.json();
      setItems((prevItems) => [...prevItems, ...data]);
    };

    fetchItems();

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 20
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const debouncedScrollHandler = debounce(handleScroll, 200);

    window.addEventListener("scroll", debouncedScrollHandler);
    return () => window.removeEventListener("scroll", debouncedScrollHandler);
  }, [page]);

  const handleAddFav = (item: albumPicsType) => {
    favCtx.addFavorite(item);
  };

  return (
    <div className="album-list-container">
      <div className="fixed-content">
        <h1>List Page</h1>
        <Link to="/" className="back-button">
          Back to Dashboard
        </Link>
      </div>
      <div className="content-scrollable">
        {items.map((item) => (
          <AlbumCard
            key={item.id}
            item={item}
            handleButton={handleAddFav}
            buttonText="Add to favorites"
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumList;

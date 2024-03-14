import React from "react";
import { albumPicsType } from "../store/FavoritesContext";

export default function AlbumCard({
  item,
  handleButton,
  buttonText,
}: {
  item: albumPicsType;
  handleButton: (item: albumPicsType) => void;
  buttonText: string;
}) {
  return (
    <div key={item.id}>
      <img src={item.url} alt={item.title} />
      <p>ID: {item.id}</p>
      <p>Title: {item.title}</p>
      <button onClick={() => handleButton(item)}>{buttonText}</button>
    </div>
  );
}

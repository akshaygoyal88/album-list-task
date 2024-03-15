import { albumPicsType } from "../store/FavoritesContext";
import "./AlbumCard.scss";

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
    <div className="album-card" key={item.id}>
      <img src={item.url} alt={item.title} />
      <p>Title: {item.title}</p>
      <button onClick={() => handleButton(item)}>{buttonText}</button>
    </div>
  );
}

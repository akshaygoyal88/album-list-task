import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import AlbumList from "./component/AlbumList";
import { FavoritesProvider } from "./store/FavoritesContext";

const App: React.FC = () => {
  return (
    <Router>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<AlbumList />} />
        </Routes>
      </FavoritesProvider>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoritesList from "./FavoritesList";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/list">
        <button>Go to List Page</button>
      </Link>
      <FavoritesList />
    </div>
  );
};

export default Dashboard;

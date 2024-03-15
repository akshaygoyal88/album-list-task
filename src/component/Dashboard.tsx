import React from "react";
import { Link } from "react-router-dom";
import FavoritesList from "./FavoritesList";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="fixed-content">
        <h1>Dashboard</h1>
        <Link to="/list">
          <button>Go to List Page</button>
        </Link>
      </div>
      <FavoritesList />
    </div>
  );
};

export default Dashboard;

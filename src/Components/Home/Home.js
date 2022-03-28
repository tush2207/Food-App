import { Button } from "@mui/material";
import React from "react";
import homeback from "../Home/home.jpg";

import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${homeback})` }}>
        <div className="header-container">
          <h2>Food Fly Corner</h2>
          <p>INDIAN FOOD AT A CLICK</p>
        </div>
        <Link to="/Products">
          <div className="homebutton">
            <Button variant="contained" size="large" color="success">
              ORDER NOW
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;

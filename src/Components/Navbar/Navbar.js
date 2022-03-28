import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Badge } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
const Navbar = (props) => {
  const logout = (event) => {
    props.onLogout();
  };

  const { countCartItems } = props;

  return (
    <>
      <div className="head">
        <h1>Welcome To Food Fly</h1>
      </div>

      <div className="header  ">
        <Link to="/">
          <img
            src="../img/headlogo.png"
            alt="logo"
            width="50px"
            height="50px"
          />
        </Link>

        <Link to="/Home">
          <HomeIcon fontSize="large" />
        </Link>

        <Link to="/Products">
          <RestaurantMenuIcon fontSize="large" />
        </Link>

        <Link to="/MenuCard">
          <Badge
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            badgeContent={countCartItems}
            color="error"
          >
            <StorefrontIcon fontSize="large" />
          </Badge>
        </Link>

        <Link to="/About">
          <AccountCircleIcon fontSize="large" />
        </Link>

        <Link
          to="/"
          sx={{ m: 1, width: "8ch" }}
          variant="contained"
          onClick={logout}
        >
          <ExitToAppIcon fontSize="large" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;

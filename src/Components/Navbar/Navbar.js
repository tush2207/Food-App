import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
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

      <header className="header">
        <div className="MenuIcon">
          <div className="Menu">
            <Link to="">{/* <MenuIcon fontSize="large" /> */}</Link>
          </div>
        </div>

        <div className="header-link">
          <ul>
            <li>
              <Link to="/Home">
                <HomeIcon fontSize="large" />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/Products">
                <RestaurantMenuIcon fontSize="large" />
              </Link>
            </li>
          </ul>
          <ul>
            <li>


            <Link to="/MenuCard">
              <Badge badgeContent={countCartItems} color="primary">
                <StorefrontIcon color="action" fontSize="large" />
              </Badge>
              </Link>

            </li>
          </ul>
          <ul>
            <li>
              <Link to="/About">
                <AccountCircleIcon fontSize="large" />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                to="/"
                sx={{ m: 1, width: "8ch" }}
                variant="contained"
                onClick={logout}
              >
                <ExitToAppIcon fontSize="large" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;

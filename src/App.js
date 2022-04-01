import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import data from "./Components/Data/Data";
import { Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/Contact/About";
import MenuCard from "./Components/Menu/MenuCard";
import Products from "./Components/Products/Products";
import Thankyou from "./Components/Thankyou/Thankyou";
import PlacedOrder from "./Components/PlacedOrder/PlacedOrder"
const { Product } = data;

function App() {
  const [loginState, setLoginState] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const postApi = (user) => {
    axios
      .post("https://reqres.in/api/login", {
        email: user.username,
        password: user.password,
      })
      .then(function (response) {
        console.log(response);
        setLoginState(response.status === 200 ? true : false);
      });
  };

  const logout = () => {
    setLoginState(false);
    console.log(loginState);
    localStorage.removeItem("token"); 
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



 useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      setLoginState(true);
    }
  }, []);
  return (
    <>
      {!loginState ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login onLogin={postApi} />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Navbar onLogout={logout} countCartItems={cartItems.length} />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="About" element={<About />} />
            <Route
              path="MenuCard"
              element={
                <MenuCard
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
                />
              }
            />
            <Route
              path="Products"
              element={
                <Products key={Product.id} onAdd={onAdd} Product={Product} />
              }
            />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="Thankyou" element={<Thankyou />} />
            <Route path="PlacedOrder" element={<PlacedOrder />} />


          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

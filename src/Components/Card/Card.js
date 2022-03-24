import React from "react";
import { Button } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import "./Product.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Products(props) {
  const [value, setValue] = React.useState(2);

  const { Product } = props;
  console.log(props);

  return (
    <div className="products" key={Product.id}>
      {Product &&
        Product.map((Product) => (
          <div className="card">
            <div className="img">
              <img
                className="product-img"
                src={Product.img}
                alt={Product.name}
              />
            </div>
            <div className="name-loc">
              <h3 className="product-name">{Product.name} </h3>
              <h3 className="product-location">
                <FmdGoodIcon /> {Product.location}
              </h3>
              <h3 className="product-price">₹{Product.price}</h3>
            </div>
              <Box
                sx={{
                  "& > legend": { mt: 4 },
                }}
              >
                <div className="Hotel-rating">
                <h3 className="product-hotel">{Product.hotel}</h3>
                <Rating
                className="rating"
                  name="simple-controlled"
                  value={value} 
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                </div>
              </Box>

            <div className="Order-button">
             
              <AddCircleIcon fontSize="large"/>
           
              </div>
          </div>
        ))}
    </div>
  );
}
export default Products;

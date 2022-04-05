import React from "react";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "./MenuCard.css";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import StoreIcon from "@mui/icons-material/Store";
import PlacedOrder from "../PlacedOrder/PlacedOrder";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MenuCard(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemgst = itemsPrice * 0.12;
  const totalPrice = itemsPrice + itemgst;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  return (
    <div className="full">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Coupon code applied success!
          </Alert>
        </Snackbar>
      </Stack>
      <div className="Main">
        <div className="MenuCard">
          {cartItems.length === 0 ? (
            <Box sx={{ width: 880, height: 400 }} className="emptycart">
              <h1> No Food is Order</h1>
            </Box>
          ) : (
            <>
              {cartItems.map((item) => {
                return (
                  <Card
                    className="ordercard"
                    sx={{
                      display: "flex",

                      marginLeft: 3,
                      marginBottom: 5,
                      border: "2px solid grey",
                      borderRadius: 3,
                    }}
                  >
                    <CardMedia
                      className="cardimg"
                      component="img"
                      sx={{ width: 250, height: 150 }}
                      image={item.img}
                      alt="orderimg"
                    />

                    <div className="ordercontant">
                      <div className="hotloc" varient="h2">
                        <StoreIcon fontSize="large" /> {item.hotel}
                        <FmdGoodIcon fontSize="large" /> {item.location}
                      </div>
                      <div className="Dish">
                        <RoomServiceIcon fontSize="large" />
                        {item.name}
                      </div>
                      <div className="qtypri">
                        <Button onClick={() => onAdd(item)} className="add">
                          <AddCircleIcon color="success" fontSize="large" />
                        </Button>
                        <div className="Qty">{item.qty}</div>
                        <Button
                          onClick={() => onRemove(item)}
                          className="remove"
                        >
                          <RemoveCircleIcon color="error" fontSize="large" />
                        </Button>
                        <div className="DishPrice" varient="h3">
                          <CurrencyRupeeIcon fontSize="large" />
                          {item.price}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </>
          )}
        </div>

        <div className="SideBar">
          <Box
            sx={{
              width: 380,
              height: 400,
              flexDirection: "flex-end",
              border: "4px solid black",
              borderRadius: 15,
            }}
          >
            <h4>Order Summary</h4>
            <div>SubTotal:{itemsPrice}</div>
            <div>GSt:{itemgst}</div>
            <br />
            <FormControl className="Coupon" variant="contained">
              <OutlinedInput
                size="small"
                width="25ch"
                placeholder="Apply Coupon"
                endAdornment={
                  <InputAdornment>
                    <IconButton>
                      <Button variant="outlined" onClick={handleClick}>
                        Apply
                      </Button>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            Total Price:{totalPrice}
            <br />
            <div className="Order-Button">
              <Link to="/PlacedOrder">
                <Button
                  variant="contained"
                  color="success"
                  onClick={PlacedOrder}
                >
                  PLACED ORDER
                </Button>
              </Link>
             
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

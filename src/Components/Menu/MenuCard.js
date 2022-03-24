import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "./MenuCard.css";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import StoreIcon from "@mui/icons-material/Store";
import Thankyou from "../Thankyou/Thankyou";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

  const [openorder, setOpenorder] = React.useState(false);

  const handleClickOrder = () => {
    setOpenorder(true);
  };

  const handleCloseOrder = () => {
    setOpenorder(false);
  };

  return (
    <>
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
      <h3 className="cart"> Items</h3>
      <div className="Main">
        <div className="MenuCard">
          {cartItems.length === 0 ? (

            <h4 className="emptycart">Cart is Empty</h4>
          ) : (
            <>
              {cartItems.map((item) => {
                return (
                  <Card
                    className="ordercard"
                    sx={{
                      display: "flex",
                      // minwidth:"75%",
                      // maxWidth:"75%",
                      maxheight: "170",
                      marginLeft: 3,
                      marginBottom:5,
                      border: "2px solid grey",
                      borderRadius: 3,
                    }}
                  >
                    <CardMedia
                      className="cardimg"
                      component="img"
                      sx={{ width: 150, height: 150 }}
                      image={item.img}
                      alt="orderimg"
                    />

                    <Typography>{item.name}</Typography>

                    <Typography>
                      <StoreIcon />{item.hotel}
                    </Typography>
                    <Typography>
                      <FmdGoodIcon /> {item.location}
                    </Typography>
                    <Button onClick={() => onAdd(item)} className="add">
                      <AddCircleIcon />
                    </Button>
                    <Typography>{item.qty}</Typography>

                    <Button onClick={() => onRemove(item)} className="remove">
                      <DeleteIcon />
                    </Button>
                    <Typography>{item.price}</Typography>
                  </Card>
                );
              })}
            </>
          )}
        </div>
        <div className="Order Summary">
          <Box
            className="SideBar"
            sx={{
              width: 400,
              height: 500,
              marginLeft: 3,
              

              border: "2px solid grey",
              borderRadius: 3,
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
              <Button
                variant="contained"
                color="success"
                onClick={handleClickOrder}
              >
                PLACED ORDER
              </Button>
              <Dialog
                open={openorder}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseOrder}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>
                  {"Do you want to confirm this order?"}
                </DialogTitle>

                <DialogActions>
                  <Button onClick={handleCloseOrder}>Cancel</Button>

                  <Link to="/Thankyou">
                    <Button onClick={Thankyou}>confirm</Button>
                  </Link>
                </DialogActions>
              </Dialog>
            </div>
          </Box>
        </div>
        {/* </>
        )}
      </div> */}
      </div>
    </>
  );
}

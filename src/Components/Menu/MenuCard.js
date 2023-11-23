import React, { useState } from 'react';
import {
  Box,
  Stack,
  Snackbar,
  Alert,
  Container,
  Typography,
  Button,
  Card,
  Grid,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';
import {
  CurrencyRupee,
  RoomService,
  AddCircle,
  RemoveCircle,
} from '@mui/icons-material';
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from '@mui/material';
import './MenuCard.css';
import homeback from '../Menu/back3.png';

const MenuCard = ({ cartItems, onAdd, onRemove }) => {
  const [open, setOpen] = useState(false);

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemgst = itemsPrice * 0.12;
  const totalPrice = itemsPrice + itemgst;

  const handleClick = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  console.log(cartItems, 'cartItems');

  return (
    <Stack
      style={{
        height: '83vh',
        backgroundImage: `url(${homeback})`,
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom', // Add this line
      }}
    >
      <Container style={{ marginTop: '50px' }}>
        <Stack spacing={2}>
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='success'>
              Coupon code applied successfully!
            </Alert>
          </Snackbar>
        </Stack>
        <div>
          <Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card style={{ border: '0.5px solid black' }}>
                  <CardContent>
                    <Typography variant='h5'>
                      <b>Order Items</b>
                    </Typography>
                    {cartItems.length !== 0 ? (
                      <List>
                        {cartItems.map((item) => (
                          <ListItem key={item.id}>
                            <ListItemText
                              primary={item.name}
                              secondary={`Quantity: ${item.qty}`}
                            />
                            <div>
                              <IconButton
                                aria-label='subtract'
                                size='small'
                                onClick={() => onRemove(item)}
                              >
                                <RemoveIcon />
                              </IconButton>
                              {item.qty}
                              <IconButton
                                aria-label='add'
                                size='small'
                                onClick={() => onAdd(item)}
                              >
                                <AddIcon />
                              </IconButton>
                            </div>
                            <IconButton
                              aria-label='delete'
                              size='small'
                              onClick={() => onRemove(item)}
                            >
                              Delete
                            </IconButton>
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <Box
                        display='flex'
                        justifyContent='center'
                        padding={10.3}
                        textAlign='center'
                        maxWidth={500}
                      >
                        <Typography textAlign='center' variant='h6'>
                          Your cart is empty.
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card style={{ border: '0.5px solid black' }}>
                  <CardContent>
                    <Typography variant='h5'>
                      <b>Order Summary</b>
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary={`Subtotal: $${cartItems
                            .reduce(
                              (sum, item) => sum + item.qty * item.price,
                              0
                            )
                            .toFixed(2)}`}
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary={`Tax: $
${(
  cartItems.reduce((sum, item) => sum + item.qty * item.price, 0) * 0.1
).toFixed(2)}`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={`Total: $
${(
  cartItems.reduce((sum, item) => sum + item.qty * item.price, 0) * 1.1
).toFixed(2)}`}
                        />
                      </ListItem>
                    </List>
                    <Button
                      fullWidth
                      variant='contained'
                      color='primary'
                      onClick={() => {
                        // history.push('/checkout');
                      }}
                    >
                      Checkout
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Stack>
  );
};

export default MenuCard;

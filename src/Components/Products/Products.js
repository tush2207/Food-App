import React from 'react';
import './Product.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Stack } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import StoreIcon from '@mui/icons-material/Store';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

function Products(props) {
  const [value, setValue] = React.useState('');
  const { Product, onAdd } = props;

  console.log(props);

  const [filter, setFilter] = useState('');

  const searchText = (e) => {
    setFilter(e.target.value);
  };
  console.warn(filter);
  let datasearch = props.Product.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  console.log(props.Product);

  return (
    <div className='Menu' key={Product.id}>
      <div className='MenuBar'>
        {/* <h2>Menu Card</h2> */}

        <div className='search-bar'>
          <FormControl variant='outlined'>
            <OutlinedInput
              size='small'
              width='25ch'
              placeholder='Search Food ,Location ...'
              value={filter}
              onChange={searchText}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton>
                    <SearchIcon fontSize='large' />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
      {Product && (
        <Box
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {datasearch?.map((menu) => (
            <Card sx={{ maxWidth: '390px', display: 'flex', m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: '390px' }}
                  component={'img'}
                  src={menu.img}
                  alt={menu.name}
                />
                <CardContent>
                  <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h5' component='div'>
                      <RoomServiceIcon /> {menu.name}
                    </Typography>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      <CurrencyRupeeIcon /> {menu.price}
                    </Typography>
                  </Box>

                  <Typography variant='body2'>{menu.description}</Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    paddingBottom: 24,
                  }}
                >
                  <Button
                    size='small'
                    color='primary'
                    onClick={() => onAdd(menu)}
                    variant='outlined'
                  >
                    Order Now
                  </Button>
                </CardActions>
              </CardActionArea>

              {/* </CardActionArea> */}
            </Card>
          ))}
        </Box>
      )}

      {/* {Product &&
        datasearch.map((Product) => (
          <div className='cards' Key={Product.id}>
            <Card
              className='card'
              sx={{
                minWidth: 300,
                marginInlineStart: 4.5,
                borderRadius: 10,
              }}
            >
              <CardMedia
                component='img'
                height='160'
                src={Product.img}
                alt='green iguana'
              ></CardMedia>

              <CardContent className='CardContent'>
                <Typography variant='h5' component='div'>
                  <RoomServiceIcon /> {Product.name} <CurrencyRupeeIcon />{' '}
                  {Product.price}
                </Typography>

                <Typography variant='h5' component='div'>
                  <StoreIcon /> {Product.hotel}
                  <br />
                  <Rating
                    className='rating'
                    name='simple-controlled'
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Typography>
                <Typography variant='h5' component='div'>
                  <FmdGoodIcon />
                  {Product.location}
                </Typography>
                <div className='Order-button'>
                  <Button
                    size='small'
                    variant='contained'
                    onClick={() => onAdd(Product)}
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))} */}
    </div>
  );
}
export default Products;

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Ordered() {

  return (
    <Card sx={{ display: 'flex', width:"75%" }}>
  
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            <Typography variant="subtitle1" color="text.secondary" >
            Dish
          </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>

        <Typography variant="subtitle1" color="text.secondary" >
          hotel
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" >
            loc.
          </Typography>
  
        </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>

          <Typography variant="subtitle1" color="text.secondary" >
            qnt
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" >
            pri
          </Typography>
        </Box>
        </Box>

         
    </Card>
  );
}

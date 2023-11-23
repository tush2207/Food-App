import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from '@mui/material';
// import Logo from '../../images/logo.png';

import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  const { countCartItems } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'goldenrod'}
        variant='h5'
        component='div'
        sx={{
          flexGrow: 1,
          my: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
        }}
      >
        Food Fly
        {/* <img src={Logo} alt='logo' height={'70'} width='200' /> */}
      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          <NavLink activeClassName='active' to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/menu'}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{
                mr: 2,
                display: { sm: 'none' },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant='h5'
              component='div'
              sx={{
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
              }}
            >
              Food Fly
              {/* <img src={Logo} alt='logo' height={'70'} width='250' /> */}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassName='active' to='/Home'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to='/Products'>
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/MenuCard'}>
                    <Badge
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      badgeContent={countCartItems}
                      color='error'
                    >
                      Order
                    </Badge>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/Contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

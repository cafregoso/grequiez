import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import logo from '../../../assets/gr-logo.png';

import './Nav.css';

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className='navbar-bg'>
      <Container maxWidth="xl">
        <Toolbar disableGutters className=''> 
        <img style={ { maxWidth: '200px' } } alt="Grupo Requiez - Logo" src={ logo } />
          <Box 
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            className='nav-links'
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className='colorLetter'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/'>Inicio</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/esr'>Ver Registros</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/history'>Crear Producto</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/sustentability'>Crear Ubicacion</Link></Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box 
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            className='nav-links'
          >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={ Link }
                className='colorLetter'
                to='/'
              >
                Inicio
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={ Link }
                className='colorLetter'
                to='/esr'
              >
                ESR
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={ Link }
                className='colorLetter'
                to='/history'
              >
                Nuestra Historia
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={ Link }
                className='colorLetter'
                to='/sustentability'
              >
                Sustentabilidad
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;

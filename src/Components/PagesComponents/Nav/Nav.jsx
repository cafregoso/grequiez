import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
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
      <Container maxWidth="xl" className='navbar-container'>
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
                <Typography textAlign="center"><Link className='colorLetter' to='/'>INICIO</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><HashLink className='colorLetter' to='/#brands'>MARCAS</HashLink></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/history'>NUESTRA HISTORIA</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/sustentability'>SUSTENTABILIDAD</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/esr'>ESR</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/blog'>BLOG</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link className='colorLetter' to='/contact'>CONTACTO</Link></Typography>
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
                INICIO
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={ HashLink }
                className='colorLetter'
                to='/#brands'
              >
                MARCAS
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={ Link }
                className='colorLetter'
                to='/history'
              >
                NUESTRA HISTORIA
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={ Link }
                className='colorLetter'
                to='/sustentability'
              >
                SUSTENTABILIDAD
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
                to='/blog'
              >
                BLOG
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={ Link }
                className='colorLetter'
                to='/contact'
              >
                CONTACTO
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;

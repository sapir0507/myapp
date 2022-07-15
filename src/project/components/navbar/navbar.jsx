import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const login = ['Login'];

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

function NavbarComp() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElStatus, setAnchorElStatus] = useState(false);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return (  
    <ThemeProvider theme={darkTheme}>
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        onClick={(e)=>{
                            e.preventDefault()
                            navigate("/")
                        }}
                        >
                        LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" 
                                        onClick={(e)=>{
                                            handleCloseNavMenu()
                                            e.preventDefault()
                                            navigate(`/${page}`)
                                    }}>{page}</Typography>
                                </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                    LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                        key={page}
                        onClick={(e)=>{
                            handleCloseNavMenu()
                            e.preventDefault()
                            navigate(`/${page}`)
                        }}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        {page}
                        </Button>
                    ))}
                    </Box>

                {/* if user is logged in want to show this */}

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {!anchorElStatus && settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center" onClick={(e)=>{
                                if(setting==='Logout'){
                                    e.preventDefault()
                                    setAnchorElStatus(!anchorElStatus)
                                    navigate("/")
                                }
                                else{ 
                                    e.preventDefault()
                                    navigate(`/${setting}`)
                                }
                            }}>{setting}</Typography>
                        </MenuItem>
                        ))}
                        {anchorElStatus && login.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center" onClick={(e)=>{
                                if(setting==='Login'){
                                    setAnchorElStatus(!anchorElStatus)
                                    e.preventDefault()
                                    navigate("/")
                                }
                            }}>{setting}</Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>

                    {/* end */}

                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
);
}

export default NavbarComp;
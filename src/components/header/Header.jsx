import React, { useState } from 'react'
import './header.css'
import {
  NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer,
  NavbarInnerContainer, NavbarLinkContainer, NavbarLink,
  OpenLinksButton, NavbarLinkExtended, NombreUsuario, NombreUsuarioExtender
  , Libutton, Titulo, NavbarSubLink, IconCarrito

} from './Menu'
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'
import { deepOrange } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
const Header = () => {

  const [extendNavbar, setExtendNavbar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);




  const navigate = useNavigate()



  const handleClickLink = () => {
    if (extendNavbar == true)
      setExtendNavbar(false)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};

  const handleLogOut = () => {
    navigate("/")
  }




  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Titulo>ShopiMarket</Titulo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to='/'>Inicio</NavbarLink>
            <NavbarLink to='/Login'>Login</NavbarLink>
            <NavbarLink to='/Signup'>SignUp</NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
        <NombreUsuario>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, mb: 1 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>
                KV
              </Avatar>
            </IconButton>
          </Tooltip>
        </NombreUsuario>
      </NavbarInnerContainer>
      {extendNavbar &&
        (
          <NavbarExtendedContainer>
            <NavbarLinkExtended onClick={handleClickLink} to='/'>Inicio</NavbarLinkExtended>
            <NavbarLinkExtended onClick={handleClickLink} to='/Login'>Login</NavbarLinkExtended>
            <NavbarLinkExtended onClick={handleClickLink} to='/Signup'>SignUp</NavbarLinkExtended>
            <NombreUsuarioExtender>
              <span>Nombre Usuario</span>
              <span onClick={handleLogOut}> <Logout fontSize="small" />Logout</span>
            </NombreUsuarioExtender>
          </NavbarExtendedContainer>
        )
      }
           <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                
            >
                <MenuItem>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} /> usuario 1
                </MenuItem>
                <Divider />

                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>


    </NavbarContainer>
  )
}

export default Header
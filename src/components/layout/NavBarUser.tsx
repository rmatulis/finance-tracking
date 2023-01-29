import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from "react-router-dom";

// Auth0
import { useAuth0 } from '@auth0/auth0-react';

// internal components
import LoginButton from '../auth/LoginButton';


export default function NavBarUser() {
  
    // Auth0
    const { isAuthenticated, logout, user } = useAuth0();
    // Navigate
    const navigate = useNavigate();
    
  // Navigation items
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    const handleProfileLink = () => {
        setAnchorElUser(null);
        navigate("/profile");
    }

    const handleLogoutLink = () => {
        setAnchorElUser(null);
        logout()
    }
    
  if(isAuthenticated) {
    return (
        <div>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="profile" src={user?.picture} />
            </IconButton>
            </Tooltip>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
                <MenuItem key="Profile" onClick={handleProfileLink}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key="Logout" onClick={handleLogoutLink}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </div>)
  } else {
    return (
        <div>
            <Tooltip title="Open settings">
                <LoginButton />
            </Tooltip>
        </div>)
  }
}
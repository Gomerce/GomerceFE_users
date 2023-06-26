import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material'
import SearchInput from '../SearchInput'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { useNavigate } from 'react-router-dom'
import { customAppBarStyle, StyledButtonGroup, toolBarStyles } from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import MenuSearchInput from '../MobileSearchInput'
import { useAuth0 } from '@auth0/auth0-react'

const PrimarySearchAppBar = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const accountMenuOpen = Boolean(anchorEl)
  const matchesLaptop = useMediaQuery(theme.breakpoints.down('laptop_1024'))
  const matchesMobileLarge = useMediaQuery(theme.breakpoints.up('tablet_650'))
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0()

  console.log(isAuthenticated, isLoading, user)

  const handleAccountMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleAccountMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="sticky" sx={customAppBarStyle}>
      <Toolbar sx={toolBarStyles}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          {matchesLaptop && (
            <MenuIcon color="black" sx={{ marginRight: '8px', cursor: 'pointer' }} />
          )}
          <Typography
            variant="h6"
            onClick={() => navigate('/')}
            sx={{
              color: '#1F2839',
              fontWeight: '700',
              fontSize: '20px'
            }}
          >
            Gomerce
          </Typography>
        </Box>

        {matchesMobileLarge && <SearchInput />}
        <StyledButtonGroup>
          {!matchesLaptop ? (
            <>
              <Button variant="outlined" startIcon={<FavoriteBorderIcon />}>
                Wishlist
              </Button>
              <Button
                variant="outlined"
                startIcon={<Person3OutlinedIcon />}
                id="account-menu-button"
                aria-controls={accountMenuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={accountMenuOpen ? 'true' : undefined}
                onClick={handleAccountMenuClick}
              >
                Account
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={accountMenuOpen}
                onClose={handleAccountMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'account-menu-button'
                }}
              >
                <Box sx={{ textAlign: 'center', marginBottom: '.5rem' }}>
                  {isAuthenticated ? (
                    <Typography>Auth</Typography>
                  ) : (
                    <Button variant="contained" onClick={() => loginWithRedirect()}>
                      Sign In
                    </Button>
                  )}
                </Box>
                <Divider />
                <MenuItem onClick={handleAccountMenuClose}>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>My account</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleAccountMenuClose}>
                  <ListItemIcon>
                    <ListAltIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Orders</ListItemText>
                </MenuItem>
                <Divider />
                <Box sx={{ textAlign: 'center', marginBottom: '.25rem' }}>
                  <Button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  >
                    logout
                  </Button>
                </Box>
              </Menu>
              <Button variant="outlined" startIcon={<ShoppingCartOutlinedIcon />}>
                Cart
              </Button>
            </>
          ) : (
            <>
              <IconButton>
                <Person3OutlinedIcon />
              </IconButton>
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </>
          )}
        </StyledButtonGroup>
      </Toolbar>
      {!matchesMobileLarge && <MenuSearchInput />}
    </AppBar>
  )
}

export default PrimarySearchAppBar

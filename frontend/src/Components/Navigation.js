import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Container } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Fetch from './Fetch';
import { isUserAuth } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(isUserAuth(false));
  };

  return (
  // <div className={classes.root}>

    <>
      <Container fixed>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Learn to Learn</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">My Acc</Button>
          </Box>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Link to="/">
              <MenuItem onClick={handleClose}>Main</MenuItem>
            </Link>
            <Link to="/testform/company">
              <MenuItem onClick={handleClose}>Company</MenuItem>
            </Link>
            <Link to="/testform/user">
              <MenuItem onClick={handleClose}>Users</MenuItem>
            </Link>
            {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          </Menu>
          <Button onClick={logout} color="secondary" variant="contained">Logout</Button>
        </Toolbar>
      </Container>

      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Learn to Learn App.
          </Typography>
         <SimpleTabs />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    */}
    </>
  );
}

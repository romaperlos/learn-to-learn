import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Route } from 'react-router-dom';
import { Grid, ThemeProvider } from '@material-ui/core';
import Company from './Fetches/Company';
import Content from './Fetches/Content';
import Directory from './Fetches/Directory';
import User from './Fetches/User';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // flexGrow: 0,
      display: 'block',
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  mainGrid: {
    width: 500,
    padding: 10,
  },
  superHeight: {
    height: 500,
    backgroundColor: 'red',
  },
}));

// const expTheme: {

// }

export default function Fetch() {
  const classes = useStyles();

  return (
  // <div className="d-flex align-items-center justify-content-center vh-100">
  // <ThemeProvider theme={themeExp}>
    <Grid
      container
      spacing={3}
      justify="center"
      alignItems="center"
      className={classes.mainGrid}
    >
      <Grid item xs={12}>
        <Link to="/testform/company">
          <Button variant="contained" color="primary">
            Company
          </Button>
        </Link>
        <Link to="/testform/content">
          <Button variant="contained" color="primary">
            Content
          </Button>
        </Link>
        <Link to="/testform/directory">
          <Button variant="contained" color="primary">
            Directory
          </Button>
        </Link>
        <Link to="/testform/user">
          <Button variant="contained" color="primary">
            User
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Route path="/testform/company">
          <Company />
        </Route>
        <Route path="/testform/content">
          <Content />
        </Route>
        <Route path="/testform/directory">
          <Directory />
        </Route>
        <Route path="/testform/user">
          <User />
        </Route>
      </Grid>
    </Grid>
  // </ThemeProvider>
  // </div>
  );
}

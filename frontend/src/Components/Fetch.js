import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Company from './Fetches/Company';
import Content from './Fetches/Content';
import Directory from './Fetches/Directory';
import User from './Fetches/User';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // flexGrow: 0,
      // display: 'block',
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  mainGrid: {
    width: 500,
    padding: 10,
  },
}));

export default function Fetch() {
  const [input, setInput] = useState({
    title: '',
  });

  const inputsChange = ({ target: { value, name } }) => {
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };

  const classes = useStyles();
  const fetchSomething = async (e) => {
    e.preventDefault();
    const res = await fetch('/directory', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log('ok');
  };

  return (
  // <div className="d-flex align-items-center justify-content-center vh-100">
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
  // </div>
  );
}

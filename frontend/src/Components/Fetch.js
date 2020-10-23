import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Company from './Fetches/Company';
import Content from './Fetches/Content';
import Directory from './Fetches/Directory';
import User from './Fetches/User';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // flexGrow: 0,
      // display: 'block',
      margin: theme.spacing(2),
      // width: '25ch',
    },
  },
  mainGrid: {
    // width: 500,
    padding: 10,
  },
  // superHeight: {
  //   height: 500,
  //   backgroundColor: 'red',
  // },
}));

export default function Fetch() {
  const classes = useStyles();

  return (
    <>
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
    </>

  );
}

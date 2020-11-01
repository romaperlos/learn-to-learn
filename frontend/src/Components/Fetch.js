import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import Company from './Fetches/Company';
import Content from './Fetches/Content';
import Directory from './Fetches/Directory';
import User from './Fetches/User';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  mainGrid: {
    padding: 10,
  },
}));

export default function Fetch() {
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

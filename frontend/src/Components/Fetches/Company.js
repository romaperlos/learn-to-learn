import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../Fetch';

export default function Company() {
  const [input, setInput] = useState({
    companyName: '',
    description: '',
    logoUrl: '',
    user: '',
  });

  const inputsChange = ({ target: { value, name } }) => {
    console.log(input, '<<<< first input');
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
    setInput({
      companyName: '',
      description: '',
      logoUrl: '',
      user: '',
    });
    return res;
    // console.log('ok');
  };
  console.log(classes.bigPadding, '<<< classes');
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        className="p-5"
        // className={classes.root.bigPadding}
      >
        <Grid item xs>
          <h3>Company</h3>
          <form onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} label="Company name" name="companyName" value={input.companyName} />
            <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
            <TextField onChange={inputsChange} label="logoUrl" name="logoUrl" value={input.logoUrl} />
            <TextField onChange={inputsChange} label="User" name="user" value={input.user} />
            <Button type="submit" variant="contained">Seed!</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

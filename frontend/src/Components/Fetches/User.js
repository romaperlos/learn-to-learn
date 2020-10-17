import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // flexGrow: 0,
      // display: 'block',
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
}));

export default function User() {
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
    <div className="d-flex align-items-center justify-content-center">
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        className="p-5"
      >
        <Grid item xs>
          <h3>User</h3>
          <form onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} id="standard-basic" label="Name" name="name" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Last name" name="lastname" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Email" name="email" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Company" name="company" value={input.title} />
            <Button type="submit" variant="contained">Seed!</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

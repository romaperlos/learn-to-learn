import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { useStyles } from '../Fetch';
import { setError } from '../../redux/actions';

export default function User() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  const inputsChange = ({ target: { value, name } }) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const classes = useStyles();
  const fetchSomething = async (e) => {
    e.preventDefault();
    const res = await fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify(input.email),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      // console.log('ok');
      return dispatch(setError(res));
    }
    return setInput({
      name: '',
      lastname: '',
      email: '',
      password: '',
    });
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
            <TextField onChange={inputsChange} id="standard-basic" label="Name" name="name" value={input.name} />
            <TextField onChange={inputsChange} id="standard-basic" label="Last name" name="lastname" value={input.lastname} />
            <TextField onChange={inputsChange} id="standard-basic" label="Email" name="email" value={input.email} />
            <TextField onChange={inputsChange} id="standard-basic" label="Password" name="password" value={input.password} />
            <Button type="submit" variant="contained">Seed!</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

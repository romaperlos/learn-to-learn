import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CirclePicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { useStyles } from '../Fetch';
import { setThemeAction } from '../../redux/actions';

export default function Company() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    companyName: '',
    description: '',
    logoUrl: '',
  });

  const inputsChange = ({ target: { value, name } }) => {
    console.log(input, '<<<< first input');
    setInput({
      ...input,
      [name]: value,
    });
  };

  const classes = useStyles();
  const fetchSomething = async (e) => {
    e.preventDefault();
    const res = await fetch('/company', {
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
    });
    return res;
  };

  const colorChange = (color, event) => {
    dispatch(setThemeAction({ primary: color.hex }));
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
          <h3>Company</h3>
          <form onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} label="Company name" name="companyName" value={input.companyName} />
            <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
            <TextField onChange={inputsChange} label="logoUrl" name="logoUrl" value={input.logoUrl} />
            <Button type="submit" color="primary" variant="contained">Seed!</Button>
          </form>
          <CirclePicker onChangeComplete={colorChange} />
        </Grid>
      </Grid>
    </div>
  );
}

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CirclePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControlLabel, FormGroup, Switch, Typography,
} from '@material-ui/core';
import { useStyles } from '../Fetch';
import { setThemeAction } from '../../redux/actions';

export default function Company() {
  const dispatch = useDispatch();
  const colorRedux = useSelector((state) => state.theme);
  const userCompany = useSelector((state) => state.user.company.company);
  console.log(userCompany);
  console.log(userCompany.companyName);
  const [input, setInput] = useState({
    companyName: userCompany.companyName,
    description: userCompany.description,
    logoUrl: userCompany.logoUrl,
  });

  const inputsChange = ({ target: { value, name } }) => {
    console.log(input, '<<<< first input');
    setInput({
      ...input,
      [name]: value,
    });
  };
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
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

  const colorChange = async (color, event) => {
    dispatch(setThemeAction({ primary: color.hex }));
    const res = await fetch('/company', {
      method: 'PATCH',
      body: JSON.stringify({ companyId: userCompany._id, mainColor: color.hex }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
  };
  const colorChangeSecond = async (color, event) => {
    dispatch(setThemeAction({ secondary: color.hex }));
    const res = await fetch('/company', {
      method: 'PATCH',
      body: JSON.stringify({ companyId: userCompany._id, secondColor: color.hex }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        justify="center"
        // alignItems="center"
      >
        <Grid item xs={12}>
          <h3>Company</h3>
          <FormGroup onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} label="Company name" name="companyName" value={input.companyName} />
            <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
            <TextField onChange={inputsChange} label="logoUrl" name="logoUrl" value={input.logoUrl} />
            <Button type="submit" color="primary" variant="outlined">Get color from Logo</Button>
            <FormControlLabel
              control={<Switch checked={checked} onChange={toggleChecked} />}
              label="White font for mobile app"
            />
            <Button type="submit" color="secondary" variant="contained">Confirm</Button>
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" className="mb-2">Main theme color</Typography>
          <CirclePicker onChangeComplete={colorChange} />
        </Grid>
        {/* <Grid item xs={6} /> */}
        <Grid item xs={6}>
          <Typography variant="h5" className="mb-2">Second color</Typography>
          <CirclePicker onChangeComplete={colorChangeSecond} />
        </Grid>
      </Grid>
    </>
  );
}

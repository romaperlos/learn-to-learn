import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CirclePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControlLabel, FormGroup, Switch, Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { setThemeAction, updateCompany } from '../../redux/actions';
import { useStyles } from '../Fetch';

export default function Company() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const colorRedux = useSelector((state) => state.theme);
  const userCompany = useSelector((state) => state.user.company.company);
  const [input, setInput] = useState({
    companyName: userCompany.companyName,
    description: userCompany.description,
    logoUrl: userCompany.logoUrl,
  });

  const inputsChange = ({ target: { value, name } }) => {
    console.log(input, '<<<< first input');
    setInput({
      ...input,
      companyId: userCompany._id,
      [name]: value,
    });
  };
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const classes = useStyles();
  const fetchSomething = async (e) => {
    console.log('yo');
    e.preventDefault();
    const res = await fetch('/company', {
      method: 'PATCH',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // setInput({
    //   companyName: '',
    //   description: '',
    //   logoUrl: '',
    // });
    dispatch(updateCompany(input));
    setOpen(true);
    return res;
  };

  const colorChange = async (color, event) => {
    dispatch(setThemeAction({ primary: color.hex }));
    await fetch('/company', {
      method: 'PATCH',
      body: JSON.stringify({ companyId: userCompany._id, mainColor: color.hex }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // const data = await res.json();
  };
  const colorChangeSecond = async (color, event) => {
    dispatch(setThemeAction({ secondary: color.hex }));
    await fetch('/company', {
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
          <FormGroup className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} label="Company name" name="companyName" value={input.companyName} />
            <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
            <TextField onChange={inputsChange} label="logoUrl" name="logoUrl" value={input.logoUrl} />
            <Button type="submit" color="primary" variant="outlined">Get color from Logo</Button>
            <FormControlLabel
              control={<Switch checked={checked} onChange={toggleChecked} />}
              label="White font for mobile app"
            />
            <Button onClick={fetchSomething} type="submit" color="secondary" variant="contained">Confirm</Button>
          </FormGroup>
          <Collapse in={open}>
            <Alert
              action={(
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
          )}
            >
              All right!
            </Alert>
          </Collapse>
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

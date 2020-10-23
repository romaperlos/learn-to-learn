import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import {
  FormControlLabel, FormGroup, Switch, Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { setError } from '../../redux/actions';
import { useStyles } from '../Fetch';

export default function User() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    lastname: '',
    email: '',
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
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      // console.log('ok');
      setOpen(true);
      // dispatch(setError(res));
    }
    return setInput({
      name: '',
      lastname: '',
      email: '',
    });
  };

  return (

    <>
      <Grid
        container
        spacing={3}
        justify="center"
      >
        <Grid item xs={12}>
          <h3>Company</h3>
          <FormGroup className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} id="standard-basic" label="Name" name="name" value={input.name} />
            <TextField onChange={inputsChange} id="standard-basic" label="Last name" name="lastname" value={input.lastname} />
            <TextField onChange={inputsChange} id="standard-basic" label="Email" name="email" value={input.email} />
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
      </Grid>
    </>

  // <div className="d-flex align-items-center justify-content-center">
  //   <Grid
  //     container
  //     spacing={3}
  //     justify="center"
  //     alignItems="center"
  //     className="p-5"
  //   >
  //     <Grid item xs>
  //       <h3>User</h3>
  //       <form onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
  //         <TextField onChange={inputsChange} id="standard-basic" label="Name" name="name" value={input.name} />
  //         <TextField onChange={inputsChange} id="standard-basic" label="Last name" name="lastname" value={input.lastname} />
  //         <TextField onChange={inputsChange} id="standard-basic" label="Email" name="email" value={input.email} />
  //         <Button type="submit" variant="contained">Seed!</Button>
  //       </form>
  //     </Grid>
  //   </Grid>
  // </div>
  );
}

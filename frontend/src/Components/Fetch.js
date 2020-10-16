import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      display: 'block',
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Fetch() {
  const [input, setInput] = useState();

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
    console.log('ok');
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap vh-100">
      <form onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
        <TextField onChange={inputsChange} id="standard-basic" label="Standard" name="title" />
        <TextField onChange={inputsChange} id="standard-basic" label="Standard" name="description" />
        <Button type="submit" variant="contained">Default</Button>
      </form>
    </div>
  );
}

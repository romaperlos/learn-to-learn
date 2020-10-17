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

export default function Directory() {
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
          <h3>Directory</h3>
          <form onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} id="standard-basic" label="Title" name="title" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Description" name="description" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Parent" name="parrent" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Content" name="content" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Company" name="company" value={input.title} />
            <Button type="submit" variant="contained">Seed!</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

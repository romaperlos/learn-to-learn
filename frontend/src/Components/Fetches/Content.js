import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../Fetch';

export default function Content() {
  const [input, setInput] = useState({
    title: '',
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
    const res = await fetch('/directory', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
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
          <h3>Content</h3>
          <form onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} id="standard-basic" label="Title" name="title" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Description" name="description" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Item" name="item" value={input.title} />
            <TextField onChange={inputsChange} id="standard-basic" label="Directory" name="directory" value={input.title} />
            <Button type="submit" variant="contained">Seed!</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

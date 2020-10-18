import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../Fetch';

import { addDirectoryAction } from '../../redux/actions';

export default function Directory() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: '',
    description: '',
    parent: '',
    content: '',
    company: '',
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
    dispatch(addDirectoryAction(input));
    setInput({
      title: '',
      description: '',
      parent: '',
      content: '',
      company: '',
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
          <h3>Directory</h3>
          <form onSubmit={fetchSomething} className={classes.root} noValidate autoComplete="off">
            <TextField onChange={inputsChange} label="Title" name="title" value={input.title} />
            <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
            <TextField onChange={inputsChange} label="Parent" name="parent" value={input.parent} />
            <TextField onChange={inputsChange} label="Content" name="content" value={input.content} />
            <TextField onChange={inputsChange} label="Company" name="company" value={input.company} />
            <Button type="submit" variant="contained">Seed!</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

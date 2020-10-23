import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addDirectoryAction } from '../../redux/actions';
import { useStyles } from '../Fetch';

function CreateDirectory(props) {
  const currentDirectory = useSelector((state) => state.currentDirectory.id);
  console.log(currentDirectory, ' <<<< CUR ON CREATE PAGE');
  const { setAnchorEl } = props;
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: '',
    description: '',
    parent: currentDirectory,
  });

  const classes = useStyles();

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(input, ' <<<<< INPUT!');
    dispatch(addDirectoryAction(input));
    setInput({
      title: '',
      description: '',
    });
    setAnchorEl(null);
  };

  const inputsChange = ({ target: { value, name } }) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={submitForm} className={classes.root} noValidate autoComplete="off">
        <h5>Add new directory</h5>
        <TextField onChange={inputsChange} label="Title" name="title" value={input.title} />
        <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
        <Button type="submit" variant="contained" color="primary">Ok!</Button>
      </form>

    </>
  );
}

export default CreateDirectory;

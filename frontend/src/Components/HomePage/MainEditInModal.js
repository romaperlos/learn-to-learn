import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editDirectory } from '../../redux/actions';

function MainEditInModal(props) {
  const { title, description, setAnchorEl, id } = props;
  const dispatch = useDispatch();
  // const directories = useSelector((state) => state.directories);
  const [input, setInput] = useState({
    id,
    title,
    description,
  });

  const inputsChange = ({ target: { value, name } }) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const fetchSomething = async (e) => {
    e.preventDefault();
    console.log('fetch');
    await fetch('/directory', {
      method: 'PATCH',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('after dispatch');
    dispatch(editDirectory(input));
    setAnchorEl(null);
  };

  return (
    <form onSubmit={fetchSomething} noValidate autoComplete="off" className="p-5">
      <TextField onChange={inputsChange} label="Title" name="title" value={input.title} />
      <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
      <Button type="submit" variant="contained">Edit!</Button>
    </form>
  );
}

export default MainEditInModal;

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editDirectory } from '../../redux/actions';

function MainEditInModal(props) {
  const currentDirectory = useSelector((state) => state.currentDirectory.id);
  const {
    title, description, setAnchorEl, id,
  } = props;
  const dispatch = useDispatch();
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
    await fetch('/directory', {
      method: 'PATCH',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(editDirectory(input));
    setAnchorEl(null);
  };

  return (
    <form onSubmit={fetchSomething} noValidate autoComplete="off" className="p-3">
      <TextField onChange={inputsChange} label="Title" name="title" value={input.title} />
      <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
      <div className="mt-3 text-center">
        <Button type="submit" variant="contained" color="primary">Edit!</Button>
      </div>
    </form>
  );
}

export default MainEditInModal;

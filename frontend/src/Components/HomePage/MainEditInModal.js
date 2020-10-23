import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { editDirectory } from '../../redux/actions';

function MainEditInModal(props) {
  const {
    title, description, setAnchorEl, id,
  } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  const changeImg = (e) => {
    setSelectedFile({
      selectedFile: e.target.files[0],
      loaded: 0,
    });
  };
  const submitFormImg = async (e) => {
    // console.log(selectedFile);
    e.preventDefault();
    const data = new FormData();
    data.append('directoryId', id);
    data.append('file', selectedFile.selectedFile);
    console.log('>>>>>', data);

    const res = await axios.post('/upload/directory', data, { // receive two parameter endpoint url ,form data
    });
    console.log(res);
  };
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
    <form onSubmit={(e) => { fetchSomething(e); submitFormImg(e); }} noValidate autoComplete="off" className="p-3">
      <TextField onChange={inputsChange} label="Title" name="title" value={input.title} />
      <TextField onChange={inputsChange} label="Description" name="description" value={input.description} />
      <TextField onChange={changeImg} type="file" label="Upload image" name="file" />
      <div className="mt-3 text-center">
        <Button type="submit" variant="contained" color="primary">Edit!</Button>
      </div>
    </form>
  );
}

export default MainEditInModal;

import React, { useState } from 'react';
import axios from 'axios';

function SendFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeHandler = (event) => {
    setSelectedFile({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  const onClickHandler = async (e) => {
    console.log('selectedFile', selectedFile);
    e.preventDefault();
    const data = new FormData();
    data.append('file', selectedFile.selectedFile);
    await axios.post('/upload/logo', data, { // receive two parameter endpoint url ,form data
    });
  };

  return (
    <>
      <form onSubmit={onClickHandler}>
        <input type="file" name="file" onChange={onChangeHandler} />
        <input type="submit" value="Go" />
      </form>
    </>
  );
}

export default SendFile;

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
    // console.log(selectedFile);
    e.preventDefault();
    const data = new FormData();
    data.append('file', selectedFile);
    // console.log('>>>>>',data);

    const res = await fetch('/upload', {
      method: 'POST',
      body: data
    })
    // const res = await axios.post('/company/upload', data, { // receive two parameter endpoint url ,form data
    // });
    console.log('1', res);
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

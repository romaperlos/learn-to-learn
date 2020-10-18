import { LOADING_TEST, GET_TEST_TEXT } from './actionTypes';

export const loadingTest = { type: LOADING_TEST };

export const getTestText = () => async function (dispatch) {
  dispatch(loadingTest);
  console.log(process.env);
  // const resp = await fetch('http://127.0.0.1:3001/directory');
  const resp = await fetch('http://192.168.1.179:3001/directory');
  console.log(resp.status);
  const result = await resp.json();
  console.log(result);
  return dispatch({ type: GET_TEST_TEXT, payload: result.directory[0].description });
};

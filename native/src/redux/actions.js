import { LOADING_TEST, GET_TEST_TEXT } from './actionTypes';

export const loadingTest = { type: LOADING_TEST };

export const getTestText = () => async function (dispatch) {
  dispatch(loadingTest);
  console.log(loadingTest)
  const resp = await fetch('/directory');
  console.log(resp.status);
  const result = await resp.json();
  console.log(result);
  return dispatch({ type: GET_TEST_TEXT, payload: result.directory[0].title });
};

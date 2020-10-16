import { LOADING_TEST, GET_TEST_TEXT } from './actionTypes';

export const loadingTest = { type: LOADING_TEST }

export const getTestText = () => {
  return async function (dispatch) {
    dispatch(loadingTest)
    const resp = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
    const result = await resp.json();
    return dispatch({ type: GET_TEST_TEXT, payload: result[0].url })
  };
}

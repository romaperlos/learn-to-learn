/* eslint-disable func-names */
import { LOADING_DIR, GET_DIRECTORIES } from './actionTypes';

export const loadingDir = { type: LOADING_DIR };

export const getDirectories = () => async function (dispatch) {
  dispatch(loadingDir);
  const resp = await fetch('http://192.168.1.140:3001/directory');
  const result = await resp.json();
  console.log(result);
  return dispatch({ type: GET_DIRECTORIES, payload: result.directory });
};

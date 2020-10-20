/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
import { LOADING_DIR, GET_DIRECTORIES, LOADING_LOGIN, HANDLER_LOGIN, ERROR_LOGIN, START_BREAD_CRUMBS } from './actionTypes';

export const loadingDir = { type: LOADING_DIR };

export const getDirectories = () => async function (dispatch) {
  dispatch(loadingDir);
  const resp = await fetch('http://192.168.1.140:3001/native/directory');
  const result = await resp.json();
  return dispatch({ type: GET_DIRECTORIES, payload: result.directory });
};

export const loadingLogin = { type: LOADING_LOGIN };

export const handlerLogin = (user) => async function (dispatch) {
  dispatch(loadingLogin);
  const resp = await fetch('http://192.168.1.140:3001/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  });
  if (resp.status === 200) {
    return dispatch({ type: HANDLER_LOGIN });
  }
  return dispatch({ type: ERROR_LOGIN });
};

export const startBreadCrumbs = (directory) => {
  return ({ type: START_BREAD_CRUMBS, payload: directory });
};

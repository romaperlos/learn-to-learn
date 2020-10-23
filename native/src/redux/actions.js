/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
import {
  LOADING_DIR,
  GET_DIRECTORIES,
  LOADING_LOGIN,
  HANDLER_LOGIN,
  HANDLER_LOGOUT,
  ERROR_LOGIN,
  START_BREAD_CRUMBS,
  ADD_BREAD_CRUMBS,
  DELETE_BREAD_CRUMBS,
  GET_CONTENT,
} from './actionTypes';

export const loadingDir = { type: LOADING_DIR };

export const getDirectories = () => async function (dispatch) {
  dispatch(loadingDir);
  const resp = await fetch('http://192.168.1.140:3001/native/directory');
  const result = await resp.json();
  return dispatch({ type: GET_DIRECTORIES, payload: result.directory });
};

export const getContent = () => async function (dispatch) {
  const resp = await fetch('http://192.168.1.140:3001/native/content');
  const result = await resp.json();
  return dispatch({ type: GET_CONTENT, payload: result.content });
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
    const result = await resp.json();
    console.log('thunk>>>>>>', result);
    return dispatch({ type: HANDLER_LOGIN, payload: result.company });
  }
  return dispatch({ type: ERROR_LOGIN });
};

export const handlerLogout = () => {
  return ({ type: HANDLER_LOGOUT });
};

export const startBreadCrumbs = (directory) => {
  return ({ type: START_BREAD_CRUMBS, payload: directory });
};

export const addBreadCrumbs = (subDirectory) => {
  return ({ type: ADD_BREAD_CRUMBS, payload: subDirectory });
};

export const deleteBreadCrumbs = (newBreadCrumbs) => {
  return ({ type: DELETE_BREAD_CRUMBS, payload: newBreadCrumbs });
};

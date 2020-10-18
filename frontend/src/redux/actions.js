import {
  ADD_DIRECTORY, CREATE_DIRECTORY, CREATE_USER, GET_ERROR,
} from './actionTypes';

export const createUser = (user) => ({ type: CREATE_USER, payload: user });

export const setError = (message) => ({ type: GET_ERROR, payload: message });

export const createDirectoryAction = (directory) => ({
  type: CREATE_DIRECTORY,
  payload: directory,
});

export const addDirectoryAction = (item) => ({ type: ADD_DIRECTORY, payload: item });

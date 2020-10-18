import {
  ADD_DIRECTORY, CREATE_DIRECTORY, CREATE_USER, GET_DIRECTORIES, GET_ERROR, SET_DIRECTORIES,
} from './actionTypes';

export const createUser = (user) => ({ type: CREATE_USER, payload: user });

export const setError = (message) => ({ type: GET_ERROR, payload: message });

export const createDirectoryAction = (directory) => ({
  type: CREATE_DIRECTORY,
  payload: directory,
});

export const setdirectoriesAction = (directories) => ({
  type: SET_DIRECTORIES,
  payload: directories,
});

export const getDirectoriesAction = { type: GET_DIRECTORIES };

export const addDirectoryAction = (directory) => ({ type: ADD_DIRECTORY, payload: directory });

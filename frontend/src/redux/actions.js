import {
  ADD_DIRECTORY, CREATE_DIRECTORY, CREATE_USER, EDIT_DIRECTORY, GET_CURRENT_DIRECTORIES, GET_DIRECTORIES, GET_ERROR, SET_DIRECTORIES, SET_CURRENT_DIRECTORY, DELETE_DIRECTORY, TRY_DELETE_ITEM, ADD_BREADCRUMB_LINK, DELETE_BREADCRUMB_LINK, SET_ISLASTDIR,
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

export const getDirectoriesAction = (directory = false) => (
  { type: GET_DIRECTORIES, payload: directory }
);
export const getCurrentDirectoriesAction = (parrentId) => (
  { type: GET_CURRENT_DIRECTORIES, payload: parrentId }
);

export const setCurrentDirectoryAction = (id) => ({ type: SET_CURRENT_DIRECTORY, payload: id });

export const addDirectoryAction = (directory) => ({ type: ADD_DIRECTORY, payload: directory });

export const editDirectory = (item) => ({ type: EDIT_DIRECTORY, payload: item });

export const tryDeleteItemAction = (id) => ({ type: TRY_DELETE_ITEM, payload: id });

export const deleteDirectoryAction = (id) => ({ type: DELETE_DIRECTORY, payload: id });

export const addBreadcrumbsLinkAction = (obj) => ({ type: ADD_BREADCRUMB_LINK, payload: obj });
export const deleteBreadcrumbsLinkAction = (id) => ({ type: DELETE_BREADCRUMB_LINK, payload: id });

export const setIsLastDirAction = (boolean) => ({ type: SET_ISLASTDIR, payload: boolean });

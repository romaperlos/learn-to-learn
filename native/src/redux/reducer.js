/* eslint-disable import/prefer-default-export */
import {
  LOADING_DIR, GET_DIRECTORIES, LOADING_LOGIN, HANDLER_LOGIN, ERROR_LOGIN, START_BREAD_CRUMBS, ADD_BREAD_CRUMBS, DELETE_BREAD_CRUMBS,
} from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_DIR:
      return {
        ...state,
        loadingTest: true,
      };

    case GET_DIRECTORIES:
      return {
        ...state,
        loadingTest: false,
        directories: action.payload,
      };

    case LOADING_LOGIN:
      return {
        ...state,
        loadingLogin: true,
      };

    case ERROR_LOGIN:
      return {
        ...state,
        errorLogin: true,
      };

    case HANDLER_LOGIN:
      return {
        ...state,
        loadingLogin: false,
        errorLogin: false,
        loginUser: true,
      };

    case START_BREAD_CRUMBS:
      return {
        ...state,
        subs: [
          action.payload,
        ],
      };

    case ADD_BREAD_CRUMBS:
      return {
        ...state,
        subs: [
          ...state.subs,
          action.payload,
        ],
      };

    case DELETE_BREAD_CRUMBS:
      return {
        ...state,
        subs: action.payload,
      };

    default:
      return state;
  }
};

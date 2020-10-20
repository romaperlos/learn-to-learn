/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const initialState = {
  directories: null,
  loadingTest: false,
  loginUser: false,
  loadingLogin: false,
  errorLogin: false,
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));

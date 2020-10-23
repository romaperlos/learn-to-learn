/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const initialState = {
  directories: null,
  content: null,
  loadingDir: false,
  loginUser: false,
  loadingLogin: false,
  errorLogin: false,
  subs: [],
  companyInfo: {
    mainColor: '#000',
    mainFontColor: '#000',
  },
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));

/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const initialState = { directories: null, loadingTest: false };

export const store = createStore(reducer, initialState, applyMiddleware(thunk));

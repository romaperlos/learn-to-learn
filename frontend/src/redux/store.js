import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import breadcrumbsReducer from './reducers/breadCrumbsLinks';
import directoryReducer from './reducers/directory';
import errorReducer from './reducers/error';
import setDirectoryReducer from './reducers/setDirectory';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const preloadedState = window.localStorage.getItem('redux') ?? '{}';
console.log(JSON.parse(preloadedState));

const store = createStore(combineReducers({
  directories: directoryReducer,
  error: errorReducer,
  currentDirectory: setDirectoryReducer,
  breadcrumbs: breadcrumbsReducer,
}),
JSON.parse(preloadedState),
composeWithDevTools(
  applyMiddleware(
    sagaMiddleware,
  ),
));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export default store;

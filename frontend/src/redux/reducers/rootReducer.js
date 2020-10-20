import { combineReducers } from 'redux';
import directory from './directory';
import setDirectoryReducer from './setDirectory';

const reducer = combineReducers({
  directory,
  setDirectoryReducer,
});

export default reducer;

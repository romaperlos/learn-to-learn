import { combineReducers } from 'redux';
import directory from './directory';
import setDirectoryReducer from './setDirectory';
import breadcrumbsReducer from './breadCrumbsLinks';

const reducer = combineReducers({
  directory,
  setDirectoryReducer,
  breadcrumbsReducer,
});

export default reducer;

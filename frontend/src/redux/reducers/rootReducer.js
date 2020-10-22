import { combineReducers } from 'redux';
import directory from './directory';
import setDirectoryReducer from './setDirectory';
import breadcrumbsReducer from './breadCrumbsLinks';
// import setContentReducer from './setContent';

const reducer = combineReducers({
  directory,
  setDirectoryReducer,
  breadcrumbsReducer,
  // setContentReducer,
});

export default reducer;

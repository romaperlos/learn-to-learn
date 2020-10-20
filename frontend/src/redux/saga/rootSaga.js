import { all } from 'redux-saga/effects';

import createDirectorySaga from './directory/createDirectorySaga';
import deleteDirectoryWatcher from './directory/deleteDirectorySaga';
import getDirectoriesWatcher from './directory/getDerictoriesSaga';

export default function* () {
  yield all([
    createDirectorySaga(),
    getDirectoriesWatcher(),
    deleteDirectoryWatcher(),
  ]);
}

import { all } from 'redux-saga/effects';

import createDirectorySaga from './directory/createDirectorySaga';
import getDirectoriesWatcher from './directory/getDerictoriesSaga';

export default function* () {
  yield all([
    createDirectorySaga(),
    getDirectoriesWatcher(),
  ]);
}

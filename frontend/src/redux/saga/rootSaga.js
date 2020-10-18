import { all } from 'redux-saga/effects';

import directorSaga from './directorySaga';

export default function* () {
  yield all([
    directorSaga(),
  ]);
}

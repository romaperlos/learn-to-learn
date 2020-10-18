import { all } from 'redux-saga/effects';

import directory from './directory';

export default function* () {
  yield all([
    directory(),
  ]);
}

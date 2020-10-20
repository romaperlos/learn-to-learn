import { takeEvery, put, call } from 'redux-saga/effects';
import { ADD_DIRECTORY } from '../../actionTypes';
import { createDirectoryAction, setError } from '../../actions';

const createDirectoryFetch = async (directory) => {
  try {
    const res = await fetch('/directory', {
      method: 'POST',
      body: JSON.stringify(directory),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    const result = {
      res,
      data,
    };
    return result;
  } catch (error) {
    return error;
  }
};

function* createDirectoryWorker(action) {
  const answer = yield call(createDirectoryFetch, action.payload);
  if (answer.res.ok) {
    yield put(createDirectoryAction(answer.data));
  } else {
    yield put(setError(answer));
  }
}

export default function* watchDirectoryCreate() {
  yield takeEvery(ADD_DIRECTORY, createDirectoryWorker);
}

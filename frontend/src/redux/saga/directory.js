import { takeEvery, put, call } from 'redux-saga/effects';
import { ADD_DIRECTORY, CREATE_DIRECTORY, GET_ERROR } from '../actionTypes';
import { createDirectoryAction, setError } from '../actions';

const createDirectoryFetch = async (directory) => {
  try {
    const res = await fetch('/directory', {
      method: 'POST',
      body: JSON.stringify(directory),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

function* createDirectoryWorker(action) {
  const answer = yield call(createDirectoryFetch, action.payload);
  if (answer.ok) {
    yield put(createDirectoryAction(action.payload));
  } else {
    yield put(setError(answer));
  }
}

export default function* watchDirectoryCreate() {
  yield takeEvery(ADD_DIRECTORY, createDirectoryWorker);
}

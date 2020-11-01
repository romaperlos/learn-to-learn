import { takeEvery, put, call } from 'redux-saga/effects';
import { TRY_DELETE_ITEM } from '../../actionTypes';
import { deleteDirectoryAction, setError } from '../../actions';

const deleteDirectoryFetch = async (id) => {
  try {
    const res = await fetch('/directory', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

function* deleteDirectoryWorker(action) {
  const answer = yield call(deleteDirectoryFetch, action.payload);
  if (answer.ok) {
    yield put(deleteDirectoryAction(action.payload));
  } else {
    yield put(setError(answer));
  }
}

export default function* deleteDirectoryWatcher() {
  yield takeEvery(TRY_DELETE_ITEM, deleteDirectoryWorker);
}

import { takeEvery, call, put } from 'redux-saga/effects';
import { setdirectoriesAction } from '../../actions';
import { GET_CURRENT_DIRECTORIES, GET_DIRECTORIES } from '../../actionTypes';

const getDirectories = async (id) => {
  const res = await fetch(`/directory/${id}`);
  const data = await res.json();
  console.log(data.directory, '   <<<<< data');
  return data.directory;
};

function* getCurrentDirectoriesWorker(action) {
  const directories = yield call(getDirectories, action.payload);
  yield put(setdirectoriesAction(directories));
}

export default function* getDirectoriesWatcher() {
  yield takeEvery(GET_CURRENT_DIRECTORIES, getCurrentDirectoriesWorker);
}

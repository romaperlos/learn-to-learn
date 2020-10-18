import { takeEvery, call, put } from 'redux-saga/effects';
import { setdirectoriesAction } from '../../actions';
import { GET_DIRECTORIES } from '../../actionTypes';

const getDirectories = async () => {
  const res = await fetch('/directory');
  const data = await res.json();
  console.log(data.directory, '   <<<<< data');
  return data.directory;
};

function* getDirectoriesWorker() {
  const directories = yield call(getDirectories);
  yield put(setdirectoriesAction(directories));
}

export default function* getDirectoriesWatcher() {
  yield takeEvery(GET_DIRECTORIES, getDirectoriesWorker);
}

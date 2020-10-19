import { takeEvery, call, put } from 'redux-saga/effects';
import { setdirectoriesAction } from '../../actions';
import { GET_DIRECTORIES } from '../../actionTypes';

const getCurrentDirectories = async (id) => {
  console.log(id, ' <<<< id in saga');
  const res = await fetch(`/directory/${id}`);
  const data = await res.json();
  console.log(data, '   <<<<< data in async');
  return data;
};
const getDirectories = async () => {
  const res = await fetch('/directory');
  const data = await res.json();
  console.log(data.directory, '   <<<<< data');
  return data.directory;
};

function* getDirectoriesWorker(action) {
  let directories;
  if (action.payload) {
    directories = yield call(getCurrentDirectories, action.payload);
  } else {
    directories = yield call(getDirectories);
  }
  yield put(setdirectoriesAction(directories));
}

export default function* getDirectoriesWatcher() {
  yield takeEvery(GET_DIRECTORIES, getDirectoriesWorker);
}

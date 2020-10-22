import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_CONTENT_CATEGORY } from '../../actionTypes';
import { setContentsCategoryAction } from '../../actions';

const getContentCategoryFetch = async (id) => {
  const res = await fetch(`/content/${id}`);
  const data = await res.json();
  console.log(data, '  <<<<<< DATA IN SAGA');
  return data;
};

function* getContentCategoryWorker(action) {
  const contentsArr = yield call(getContentCategoryFetch, action.payload);
  yield put(setContentsCategoryAction(contentsArr));
}

export default function* getContentCategoryWatcher() {
  yield takeEvery(GET_CONTENT_CATEGORY, getContentCategoryWorker);
}

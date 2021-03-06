import {all} from 'redux-saga/effects';
import demoSagas from '../view/Demo/saga';

function initSaga(sagas: any) {
  const content = [];
  for (let i in sagas) {
    content.push(sagas[i]());
  }
  return content;
}

export default function* rootSaga() {
  yield all([...initSaga(demoSagas)]);
}

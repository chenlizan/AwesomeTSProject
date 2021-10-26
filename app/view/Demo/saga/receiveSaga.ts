import {takeEvery, put} from 'redux-saga/effects';
import Actions from '../action';

function* process(action: any) {
  try {
    yield put(Actions.receive(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export default function* receiveSaga() {
  yield takeEvery(Actions.send().type, process);
}

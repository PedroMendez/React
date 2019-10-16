import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* addCaregiver() {
  yield takeEvery(actions.ADD_CAREGIVER, function*() {});
}
export function* editCaregiver() {
  yield takeEvery(actions.EDIT_CAREGIVER, function*() {});
}
export function* deleteCaregiver() {
  yield takeEvery(actions.DELETE_CAREGIVER, function*() {});
}
export default function* rootSaga() {
  yield all([fork(addCaregiver), fork(editCaregiver), fork(deleteCaregiver)]);
}

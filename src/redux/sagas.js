import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import calendarSagas from './calendar/saga';
import contactSagas from './contacts/saga';
import caregiversSagas from './caregivers/saga';
import mailSagas from './mail/saga';
import notesSagas from './notes/saga';
import todosSagas from './todos/saga';
import devSagas from '../customApp/redux/sagas';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    calendarSagas(),
    contactSagas(),
    caregiversSagas(),
    mailSagas(),
    notesSagas(),
    todosSagas(),
    devSagas()
  ]);
}

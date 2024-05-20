//In this file we merge all the Sagas
import { all, fork } from 'redux-saga/effects';
import * as DashboardSaga from './dashboardSaga';

export default function* rootSaga() {
    var allSagas = Object.assign(DashboardSaga);

    yield all([...Object.values(allSagas)].map(fork));
}

import { all, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ActionType } from './constants';

function* ageUpAsync() {
   yield delay(1000);
   yield put({ type: ActionType.AGE_UP_ASYNC, payload: 1 });
}

function* ageDownAsync() {
   yield delay(4000);
   yield put({ type: ActionType.AGE_DOWN_ASYNC, payload: 1 });
}

function* watchAgeUp() {
   yield takeEvery(ActionType.AGE_UP, ageUpAsync);
}

function* watchAgeDown() {
   yield takeLatest(ActionType.AGE_DOWN, ageDownAsync);
}

export default function* rootSaga() {
   yield all([watchAgeUp(), watchAgeDown()]);
}

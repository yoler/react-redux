import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

export function* helloSaga() {
   console.log('hello saga')
}

export function* incrementAsync() {
   yield delay(1000)
   yield put({type: 'increase2'})
}

export function* watchIncrementAsync() {
    yield takeEvery('incrementAsync', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}

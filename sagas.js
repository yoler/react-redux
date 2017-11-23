import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

export function* helloSaga() {
   console.log('hello saga')
}

export function* getData() {
    let res = yield fetch('https://api.github.com/user')
    console.log(res)
    yield put({type: 'increase3'})
}

export function* incrementAsync() {
    yield delay(1000)
    yield put({type: 'increase2'})
}

// export function* watchGetData() {
//     yield takeEvery('getData', getData)
// }
//
// export function* watchIncrementAsync() {
//     yield takeEvery('incrementAsync', incrementAsync)
// }

export default function* rootSaga() {
  // yield all([
  //   helloSaga(),
  //   watchGetData(),
  //   watchIncrementAsync()
  // ])
  yield takeEvery('getData', getData)
  yield takeEvery('incrementAsync', incrementAsync)
}

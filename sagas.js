import { delay } from 'redux-saga'
import { put, takeEvery, all, call, select} from 'redux-saga/effects'

function* helloSaga() {
   console.log('hello saga')
}

let getCart = state => state.count

function* getData(action) {
    let state = yield select(getCart)
    console.log(action, state)
    let res = yield call(fetch, 'https://api.github.com/user')
    console.log(res)
    yield put({type: 'increase3'})
}

function* incrementAsync() {
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

export default function* rootSaga(getState) {
  // yield all([
  //   helloSaga(),
  //   watchGetData(),
  //   watchIncrementAsync()
  // ])
  yield takeEvery('getData', getData)
  yield takeEvery('incrementAsync', incrementAsync)
}


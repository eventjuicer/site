import {delay} from 'redux-saga'
import { all, call, put, take, fork, select, takeEvery, takeLatest, throttle} from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch'


import {
  SNACKBAR_SHOW,
  CART_ITEM_ADD,
  RESOURCE_FETCH_REQUESTED,

} from '../../components/redux/types'

import {resourceFetchSuccess, resourceFetchError} from '../../components/redux/actions'



/*
const url = `${config.api_public}/participants-by-code`;
const {response, error} = yield call(getJson, url);
if (!error){
 yield put(participantsFetched(response.data))
 console.log("handleParticipantsFetch OK");
} else {
 console.log("handleParticipantsFetch ERROR", error);
}
*/

/*function * runClockSaga () {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield call(delay, 1000)
  }


  function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * rootSaga () {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  ])
}


}*/

function* handleFetchRequests(actionData) {

  const url = `https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/formdata`;
  const response = yield call(fetch, url);
  const data = yield call([response, response.json]);

  if(response.ok && response.status >= 200 && "data" in data)
  {
    yield put(resourceFetchSuccess('formdata', data.data));
  }
  else
  {
    yield put(resourceFetchError('formdata', ''));
  }
}

const handleLogoutFn = function* handleLogout(payload)
{
  alert("test");
}


const rootSaga = function * root() {
  let sagaIndex = [
         //takeEvery(SNACKBAR_SHOW, handleLogoutFn),
        takeEvery(CART_ITEM_ADD, handleLogoutFn),
        takeEvery(RESOURCE_FETCH_REQUESTED, handleFetchRequests)
  ];

  yield all(sagaIndex);
};

export default rootSaga;

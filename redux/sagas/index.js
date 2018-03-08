

import {delay} from 'redux-saga'
import { all, call, put, take, fork, select, cancel, takeEvery, takeLatest, throttle} from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch'

import _keyBy from 'lodash/keyBy'

import {
  SNACKBAR_SHOW,

  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  CART_RESET,

  RESOURCE_FETCH_REQUESTED,

} from '../../components/redux/types'

import {

  resourceFetchSuccess,
  resourceFetchError,
  boothSelect,
  boothUnselect,
  boothsReset

} from '../../components/redux/actions'

import * as Selectors from './selectors'

function* handleFetchRequests(actionData) {

  const url = `https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/${actionData.resource}`;
  const response = yield call(fetch, url);
  const data = yield call([response, response.json]);

  if(response.ok && response.status >= 200 && "data" in data)
  {
    if(actionData.keyBy)
    {
      yield put(resourceFetchSuccess(actionData.resource, _keyBy(data.data, "id")));
    }
    else
    {
      yield put(resourceFetchSuccess(actionData.resource, data.data));
    }

  }
  else
  {
    yield put(resourceFetchError(actionData.resource, response.status))
  }
}

function* updateDialogForQuickCheckout(actionData)
{
  yield cancel()
}

function* selectBoothWhenCartItemAdded(actionData){
  if("formdata" in actionData && "id" in actionData.formdata)
  {
    yield put(boothSelect(actionData.formdata.id));
  }
  yield cancel()
}

function* unSelectBoothWhenCartItemRemoved(actionData){
  console.log(actionData)
  if("formdata" in actionData && "id" in actionData.formdata)
  {
    yield put(boothUnselect(actionData.formdata.id));
  }
  yield cancel()
}

function* unSelectAllBooths()
{
    yield put(boothsReset());
}



const rootSaga = function * root() {
  let sagaIndex = [
         //takeEvery(SNACKBAR_SHOW, handleLogoutFn),
      takeEvery(CART_ITEM_ADD, selectBoothWhenCartItemAdded),
      takeEvery(CART_ITEM_ADD, updateDialogForQuickCheckout),
      takeEvery(CART_ITEM_REMOVE, unSelectBoothWhenCartItemRemoved),
      takeEvery(CART_RESET, unSelectAllBooths),
      takeEvery(RESOURCE_FETCH_REQUESTED, handleFetchRequests)
  ];

  yield all(sagaIndex);
};

export default rootSaga;






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

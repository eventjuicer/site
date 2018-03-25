

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
  RESOURCE_FETCH_ERROR

} from '../../components/redux/types'

import {

  resourceFetchSuccess,
  resourceFetchError,
  boothSelect,
  boothUnselect,
  boothsReset,
  snackbarShow

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
  //console.log(actionData)
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

function* handleFetchErrors(actionData)
{
  yield put(snackbarShow(actionData.payload));
}


const rootSaga = function * root() {
  let sagaIndex = [
         //takeEvery(SNACKBAR_SHOW, handleLogoutFn),
      takeEvery(CART_ITEM_ADD, selectBoothWhenCartItemAdded),
      takeEvery(CART_ITEM_ADD, updateDialogForQuickCheckout),
      takeEvery(CART_ITEM_REMOVE, unSelectBoothWhenCartItemRemoved),
      takeEvery(CART_RESET, unSelectAllBooths),
      takeEvery(RESOURCE_FETCH_REQUESTED, handleFetchRequests),
      takeEvery(RESOURCE_FETCH_ERROR, handleFetchErrors)
  ];

  yield all(sagaIndex);
};

export default rootSaga;

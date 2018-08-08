import * as Types from './types';

import { parseUrlVals } from '../../helpers';

export function roleSelect(role) {
  return {
    type: Types.ROLE_SELECT,
    role: role
  };
}

export function roleReset() {
  return {
    type: Types.ROLE_RESET
  };
}

export function faqToggle(labels = [], state = false) {
  return {
    type: Types.FAQ_TOGGLE,
    labels: labels,
    state: state
  };
}

export function faqUrl(url) {
  return {
    type: Types.FAQ_URL,
    labels: parseUrlVals(url)
  };
}

export function resourceFetchRequest(resource) {
  return {
    type: Types.RESOURCE_FETCH_REQUESTED,
    resource: resource
  };
}

export function resourceFetchSuccess(resource, data) {
  return {
    type: Types.RESOURCE_FETCH_SUCCESS,
    resource: resource,
    data: data
  };
}

export function resourceFetchSuccessMeta(meta) {
  return {
    type: Types.RESOURCE_FETCH_SUCCESS_META,
    meta: meta
  };
}


export function resourceFetchError(resource, error) {
  return {
    type: Types.RESOURCE_FETCH_ERROR,
    resource: resource,
    error: error
  };
}

export function snackbarShow(payload) {
  return {
    type: Types.SNACKBAR_SHOW,
    payload: payload
  };
}

export function snackbarHide() {
  return {
    type: Types.SNACKBAR_HIDE
  };
}

export function drawerShow() {
  return {
    type: Types.DRAWER_SHOW
  };
}

export function drawerHide() {
  return {
    type: Types.DRAWER_HIDE
  };
}

export function dialogShow(payload = {}) {
  return {
    type: Types.DIALOG_SHOW,
    payload: payload
  };
}

export function dialogModify(name, value) {
  return {
    type: Types.DIALOG_MODIFY,
    payload: payload
  };
}

export function dialogHide() {
  return {
    type: Types.DIALOG_HIDE
  };
}

export function boothSelect(boothId) {
  return {
    type: Types.BOOTH_SELECT,
    payload: boothId
  };
}

export function boothUnselect(boothId) {
  return {
    type: Types.BOOTH_UNSELECT,
    payload: boothId
  };
}

export function boothsReset() {
  return {
    type: Types.BOOTHS_RESET
  };
}

export function cartItemAdd(ticketId, quantity, formdata = {}) {
  return {
    type: Types.CART_ITEM_ADD,
    ticketId: ticketId,
    quantity: quantity,
    formdata: formdata
  };
}

export function cartItemRemove(ticketId, formdata) {
  return {
    type: Types.CART_ITEM_REMOVE,
    ticketId: ticketId,
    formdata: formdata
  };
}

export function cartReset() {
  return {
    type: Types.CART_RESET
  };
}

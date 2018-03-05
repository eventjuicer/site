
import {


  RESOURCE_FETCH_REQUESTED,
  RESOURCE_FETCH_START,
  RESOURCE_FETCH_SUCCESS,
  RESOURCE_FETCH_ERROR,
  RESOURCE_FETCH_END,



  SNACKBAR_SHOW,
  SNACKBAR_HIDE,

  DRAWER_SHOW,
  DRAWER_HIDE,

  DIALOG_SHOW,
  DIALOG_HIDE,

  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  CART_RESET,

  BOOTH_SELECT,
  BOOTH_UNSELECT

} from './types'



export function resourceFetchRequest(resource)
{
  return {
		type: RESOURCE_FETCH_REQUESTED,
		resource : resource
	}
}

export function resourceFetchSuccess(resource, data)
{
  return {
		type: RESOURCE_FETCH_SUCCESS,
    resource : resource,
		data : data
	}
}

export function resourceFetchError(resource, error)
{
  return {
		type: RESOURCE_FETCH_ERROR,
    resource : resource,
		error : error
	}
}

export function snackbarShow(payload)
{
  return {
		type: SNACKBAR_SHOW,
		payload : payload
	}
}

export function snackbarHide()
{
  return {
    type: SNACKBAR_HIDE
  }
}



export function drawerShow()
{
  return {
		type: DRAWER_SHOW
	}
}

export function drawerHide()
{
  return {
    type: DRAWER_HIDE
  }
}



export function dialogShow(payload)
{
  return {
		type: DIALOG_SHOW,
		payload : payload
	}
}

export function dialogHide()
{
  return {
    type: DIALOG_HIDE
  }
}




export function boothSelect(boothId)
{
  return {
		type: BOOTH_SELECT,
		payload : boothId
	}
}


export function boothUnselect(boothId)
{
  return {
		type: BOOTH_UNSELECT,
		payload : boothId
	}
}




export function cartItemAdd(ticketId, quantity)
{
  return {
    type : CART_ITEM_ADD,
    ticketId : ticketId,
    quantity : quantity
  }
}

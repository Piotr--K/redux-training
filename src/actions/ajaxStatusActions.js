import * as types from './actionTypes';

export function beginAjaxCall() {
  return {type: types.BEGING_AJAX_CALL};
}

export function ajaxCallError() {
  return {type: types.AJAX_CALL_ERROR};
}

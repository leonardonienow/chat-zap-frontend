import * as types from "./contact.types";

export function getSelectedContact() {
  return {
    type: types.GET_SELECTED_CONTACT
  };
}

export function setSelectedContact(payload: any) {
  return {
    type: types.SET_SELECTED_CONTACT,
    payload,
  };
}

export function addMessage(payload: any) {
  return {
    type: types.ADD_MESSAGE,
    payload,
  };
}

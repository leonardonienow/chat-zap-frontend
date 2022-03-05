import * as types from "./auth.types";

export function login(payload: any) {
  return {
    type: types.LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

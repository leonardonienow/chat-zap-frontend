import * as types from "./auth.types";
import { User, Login } from "../../../domain/entity/auth/models";

const INITIAL_STATE : Login = {
  isAuthenticated: false,
  user: null,
  authenticationToken: "",
};

export default function (state: Login = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        authenticationToken: action.payload.authenticationToken,
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        authenticationToken: "",
      };
    default:
      return state;
  }
}

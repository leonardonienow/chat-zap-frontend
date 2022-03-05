import * as types from "./search.types";

export type SearchState = {
  search: string;
};

const INITIAL_STATE = {
  search: "",
};

export default function (state: SearchState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}

import * as types from "./search.types";

export function search(payload: any) {
  return {
    type: types.SEARCH,
    payload,
  };
}

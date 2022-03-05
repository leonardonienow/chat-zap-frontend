import { Contact, Message } from "../../../domain/entity/contact";
import * as types from "./contact.types";

export type ContactState = {
  contact: Contact | null;
};

const INITIAL_STATE = {
  contact: null,
};

export default function (state: ContactState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.GET_SELECTED_CONTACT:
      return {
        ...state,
      };
    case types.SET_SELECTED_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case types.ADD_MESSAGE:
      const message: Message = {
        text: action.payload,
        time: '2020-01-01',
        from: 'me',
      }
      console.log(message, state)
      return {
        ...state,
        contact: {
          ...state.contact,
          messages: [...state.contact!.messages, message],
        },
      };
      break;
    default:
      return state;
  }
}

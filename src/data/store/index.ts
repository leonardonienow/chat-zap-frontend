import { createStore, combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import contactReducer from "./contact/contact.reducer";
import contactSearchReducer from "./contactSearch/search.reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  auth: authReducer,
  contactSearch: contactSearchReducer,
  contact: contactReducer,
});

export default createStore(
  rootReducer,
  devToolsEnhancer()
);

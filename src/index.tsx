import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./presentation/pages/main";
import store from "./data/store";
import "./index.css";
import "./presentation/styles/colors.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

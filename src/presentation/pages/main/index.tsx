import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Login from "../login";
import Chat from "../chat";
import Register from "../register";

const Main = () => {
  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.auth.isAuthenticated
  );

  return <div className="App">{isAuthenticated ? <Chat /> : <Register />}</div>;
};

export default Main;

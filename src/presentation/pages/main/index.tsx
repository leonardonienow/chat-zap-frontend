import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Login from "../login";
import Chat from "../chat";

const Main = () => {
  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.auth.isAuthenticated
  );

  return <div className="App">{isAuthenticated ? <Chat /> : <Login />}</div>;
};

export default Main;

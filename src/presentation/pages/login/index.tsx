import React from "react";
import { useDispatch } from "react-redux";
import * as authActions from "../../../data/store/auth/auth.action";
import AuthAPI from "../../../data/auth/AuthAPI";
import { Storage } from "../../../data/storage";
import styles from "./styles.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const authAPI = new AuthAPI();
  const storage = new Storage();

  React.useEffect(() => {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    storage.get("email").then((email) => {
      if (email) {
        emailInput.value = email;
        const rememberMeInput = document.getElementById(
          "rememberMe"
        ) as HTMLInputElement;
        rememberMeInput.checked = true;
      }
    });
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const result = await authAPI.login(email.value, password.value);

    dispatch(authActions.login(result));
  };

  const handleRememberMe = (e: any) => {
    const { checked } = e.target;
    const user = document.getElementById("email") as HTMLInputElement;

    if (checked) {
      storage.set("email", user.value);
    } else {
      storage.delete("email");
    }
  };

  return (
    <form onSubmit={handleLogin} className={styles.container}>
      <h1>ChatZap</h1>
      <input id="email" type="email" placeholder="Usuário" />
      <input id="password" type="password" placeholder="Senha" />

      <label>
        <input
          id="rememberMe"
          className={styles.checkbox}
          type="checkbox"
          onChange={handleRememberMe}
        />
        Lembrar-me
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;

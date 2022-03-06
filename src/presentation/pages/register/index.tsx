import React from "react";
import { useDispatch } from "react-redux";
import * as authActions from "../../../data/store/auth/auth.action";
import AuthAPI from "../../../data/auth/AuthAPI";
import styles from "./styles.module.scss";

const Register = () => {
  // const dispatch = useDispatch();
  // const authAPI = new AuthAPI();
  const [profileImg, setProfileImg] = React.useState<string>(
    "https://apsec.iafor.org/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg"
  );

  const handleRegister = async (e: any) => {
    e.preventDefault();
    // const { email, password } = e.target.elements;

    // const result = await authAPI.Register(email.value, password.value);

    // dispatch(authActions.Register(result));
  };

  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result as string);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <form onSubmit={handleRegister} className={styles.container}>
      <h1>Bem-Vindo (a)</h1>
      <img
        src={profileImg}
        alt=""
        onClick={() => {
          document.getElementById("selectedFile")?.click();
        }}
      />
      <input
        type="file"
        id="selectedFile"
        accept="image/*"
        style={{ display: "none" }}
        onChange={imageHandler}
      />

      <input id="name" type="name" placeholder="Nome" />
      <input id="email" type="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Senha" />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Register;

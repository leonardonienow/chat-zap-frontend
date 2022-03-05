import React from "react";
import styles from "./styles.module.scss";
import { Message } from "../../../domain/entity/contact";

const Text = ({ text = "", time = "", from = "me" }: Message) => {
  return (
    <div
      className={
        from == "me" ? styles.container__me : styles.container__contact
      }
    >
      <div className={styles.bottom__bubble} />
      {text}
    </div>
  );
};

export default Text;

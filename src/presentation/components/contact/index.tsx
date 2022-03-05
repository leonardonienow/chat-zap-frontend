import React from "react";
import styles from "./styles.module.scss";
import { Contact } from "../../../domain/entity/contact";
import * as contactActions from "../../../data/store/contact/contact.action";
import { useDispatch } from "react-redux";

type ContactProps = {
  contact: Contact;
};

const ContactComponent = ({ contact }: ContactProps) => {
  const dispatch = useDispatch();

  const handleSelectContact = (e: any) => {
    dispatch(contactActions.setSelectedContact(contact));
  };

  return (
    <div className={styles.container} onClick={handleSelectContact}>
      <img src={contact.avatar} alt="" />
      <div className={styles.container__description}>
        <span>{contact.name}</span>
        <div className={styles.container__status}>
          <div
            className={`${styles.status} ${
              contact.status == "online" ? styles.green : styles.orange
            }`}
          />
          <span className={styles.status__text}>{contact.status_text}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;

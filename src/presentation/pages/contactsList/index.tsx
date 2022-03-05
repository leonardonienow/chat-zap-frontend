import React from "react";
import styles from "./styles.module.scss";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import ContactComponent from "../../components/contact";
import Search from "../../components/search";
import { ContactMock } from "../../../data/mocks";

const ContactsList = () => {
  const contacts = ContactMock;
  
  const searchContact = useSelector(
    (state: RootStateOrAny) => state.contactSearch.search
  );

  const contactsFilter = (contact: string) => {
    return contact.toLowerCase().includes(searchContact.toLowerCase());
  };

  return (
    <div className={styles.container}>
    <Search />
    {contacts
      .filter((contact) => contactsFilter(contact.name))
      .map((contact, index) => {
        return <ContactComponent key={index} contact={contact} />;
      })}
  </div>
  );
};

export default ContactsList;

import React from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import Text from "../../components/text";
import styles from "./styles.module.scss";
import { Message } from "../../../domain/entity/contact";
import * as contactActions from "../../../data/store/contact/contact.action";
import ContactsList from "../contactsList";
import { useFocus } from "../../hooks/useFocus";

const Chat = () => {
  const [inputText, setInputText] = React.useState("");
  const [inputRef, setInputFocus] = useFocus();
  const dispatch = useDispatch();

  const selectedContact = useSelector(
    (state: RootStateOrAny) => state.contact.contact
  );

  React.useEffect(() => {
    setInputFocus();
  }, [setInputFocus]);

  return (
    <div className={styles.container}>
      <ContactsList />
      <div className={styles.chat__container}>
        {!selectedContact ? (
          <div />
        ) : (
          <>
            <div className={styles.container_header}>
              <img src={selectedContact?.avatar} alt="" />
              <span className={styles.titulo}>
                <strong>Conversa com {selectedContact?.name}</strong>
              </span>
            </div>
            <div className={styles.container__messages}>
              {selectedContact?.messages.map((message: Message) => (
                <Text
                  text={message.text}
                  from={message.from}
                  time={message.from}
                />
              ))}
            </div>
            <div className={styles.container__input}>
              <input
                autoFocus
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                type="textarea"
                placeholder="Escreva sua mensagem"
                ref={inputRef}
              />
              <button
                onClick={() => {
                  dispatch(contactActions.addMessage(inputText));
                  setInputText("");
                  setInputFocus();
                }}
              >
                ENVIAR
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;

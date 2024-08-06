"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./TicketChatPage.module.css";

const TicketChatPage = ({ initMessages, chatRefrence, hashed_id }) => {
  const side = {
    CLIENT: "client",
    SERVER: "server",
  };
  const [messages, setMessages] = useState(initMessages);
  const [text, setText] = useState({
    id: uuid(),
    text: "",
    side: side.SERVER,
  });
  const changeText = (e) => {
    setText({ ...text, text: e.target.value });
  };
  const sendHandler = async () => {
    const res = await fetch(`${process.env.BASE_URL}/admin/ticketAnswer.php`, {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        hashed_id,
        chatRefrence,
        ticketAnswer: text,
      }),
    });
    const data = await res.json();
    if (data.status === "success") {
      setMessages([...messages, text]);
      setText("");
    }
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.chat}>
        <div className={styles.chatDisplay}>
          {messages.map((msg) => {
            return (
              <div
                key={msg.id}
                className={` ${styles.msgRow} ${
                  msg.side === side.CLIENT
                    ? styles.msgRowClient
                    : styles.msgRowServer
                } `}
              >
                <div
                  className={`${styles.msg} ${
                    msg.side === side.CLIENT
                      ? styles.msgClient
                      : styles.msgServer
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.chatInput}>
          <textarea
            // className="w-full h-full resize-none rounded-xl p-1 bg-slate-200"
            value={text.text}
            onChange={changeText}
          />
        </div>
      </div>
      <div className={styles.action}>
        <button
          //   className=" bg-klight py-1 px-6 rounded-2xl"
          onClick={sendHandler}
        >
          ارسال
        </button>
      </div>
    </div>
  );
};

export default TicketChatPage;

"use client";
import styles from "./Chat.module.css";
import { useEffect, useRef, useState } from "react";
import { DateObject } from "react-multi-date-picker";
import { v4 as uuid } from "uuid";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { toast } from "react-toastify";

const Chat = ({ type, id, chatID, data }) => {
  const sendRef = useRef();
  const initialState = [
    { id: uuid(), side: "server", text: "سلام چطوری میتونم کمکت کنم؟" },
  ];
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState(data || initialState);
  const handleSendwithEnter = (event) => {
    if (event.key === "Enter") {
      sendRef.current.click();
    }
  };
  const send = async () => {
    if (!type) {
      toast.error("موضوع تیکت خود را انتخاب کنید");
      return;
    }
    setMessages([
      ...messages,
      { id: uuid(), side: "client", text: msg, date: +new Date() },
    ]);
    setMsg("");

    const res = await fetch(`${process.env.BASE_URL}/emp/supportAPI.php`, {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        id: id,
        type: type,
        text: msg,
        chatID: chatID.chat_id,
        date: +new Date(),
      }),
    });
    const data = await res.json();
    // console.log(data);
  };
  useEffect(() => {
    // console.log(messages);
  }, [messages]);
  return (
    <div className={styles.container}>
      <section className={styles.subContainer}>
        <div className={styles.messages}>
          {messages.map((item) => {
            const itemDate = new DateObject({
              date: item.date,
              calendar: persian,
              locale: persian_fa,
            });
            // console.log(itemDate);
            return (
              <div
                key={item.id}
                className={
                  item.side === "server"
                    ? styles.serverWraper
                    : styles.clientWraper
                }
              >
                <div className={styles.date}>
                  {itemDate.format("YYYY/MM/DD HH:mm")}
                </div>
                <div
                  className={
                    item.side === "server" ? styles.serverMsg : styles.clientMsg
                  }
                >
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.control}>
        <div className={styles.input}>
          <input
            type="text"
            name="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="پیام خود را بنویسید..."
            onKeyDown={handleSendwithEnter}
          />
        </div>
        <div className={styles.button}>
          <button onClick={send} ref={sendRef}>
            ارسال پیام
          </button>
        </div>
      </section>
    </div>
  );
};

export default Chat;

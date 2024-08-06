"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "./AuthModal.module.css";
import kelaasorLogo from "/public/Vector.png";
import {
  hideModal,
  showCodeInput,
} from "@/redux/features/auth-modal/AuthModalSlice";
import { useState } from "react";
import OtpTimer from "./OtpTimer";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";

const AuthModal = () => {
  // const timerSeconds = 120;
  const [timerRunning, setTimerRunning] = useState(false);
  // const [timer, setTimer] = useState(timerSeconds);
  const [isExpired, setIsExpired] = useState(false);

  const { isShow, isNumInput, isCodeInput } = useSelector(
    (state) => state.authModal
  );
  const dispatch = useDispatch();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const repeatSendRequest = async () => {
    const bodyContent = {
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
    };
    const res = await fetch(`${process.env.BASE_URL}/profile/register.php`, {
      method: "POST",
      body: JSON.stringify({ ...bodyContent, phone }),
    });
    const data = await res.json();
    if (data.statusCode === 200) {
      setTimerRunning(true);
      setIsExpired(false);
    }
  };
  const sendRequest = async () => {
    const bodyContent = {
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
    };
    if (isNumInput) {
      const res = await fetch(`${process.env.BASE_URL}/profile/register.php`, {
        method: "POST",
        body: JSON.stringify({ ...bodyContent, phone }),
      });
      const data = await res.json();
      console.log(data);
      if (data.statusCode === 200) {
        setTimerRunning(true);
        dispatch(showCodeInput());
      }
      return;
    }
    if (isCodeInput) {
      console.log("object");
      const res = await fetch(`${process.env.BASE_URL}/profile/login.php`, {
        method: "POST",
        body: JSON.stringify({ ...bodyContent, phone, otp }),
      });
      const data = await res.json();
      // console.log(data);
      if (data.statusCode === 200) {
        setCookie("id", data.id, { maxAge: 60 * 60 * 24, path: "/" });
        setOtp("");
        setPhone("");
        setIsExpired(false);
        setTimerRunning(false);
        dispatch(hideModal());
        // data.roll.toString() === "1" ? router.replace("/user") : null;
        // data.roll.toString() === "3" ? router.replace("/employer") : null;
        // data.roll.toString() === "2" ? router.replace("/admin") : null;
      } else if (data.statusCode === 100) {
        // setLoading(false);

        toast.error("شماره موبایل یا رمز صحیح نیست");
      }

      return;
    }
  };

  return (
    <div
      className={`${styles.container} ${
        isShow ? styles.containerShow : styles.containerHide
      }`}
    >
      <main className={styles.modal}>
        <span onClick={() => dispatch(hideModal())}>X</span>
        <div>
          <Image src={kelaasorLogo} alt="kelaasor logo" />
        </div>
        <div className={styles.content}>
          <p>
            {isNumInput ? "شماره تلفن خود" : ""}
            {isCodeInput ? " کد ارسال شده" : ""} را وارد کنید
          </p>
          <div>
            <input
              type="number"
              value={isNumInput ? phone : otp}
              onChange={(e) =>
                isNumInput ? setPhone(e.target.value) : setOtp(e.target.value)
              }
            />
          </div>
          {timerRunning ? (
            <OtpTimer
              setTimerRunning={setTimerRunning}
              setIsExpired={setIsExpired}
            />
          ) : null}

          <div className={styles.action}>
            <button onClick={sendRequest} disabled={isExpired}>
              {isNumInput ? "ارسال کد" : ""}
              {isCodeInput ? "ثبت کد" : ""}
            </button>
            {isExpired ? (
              <button onClick={repeatSendRequest}>ارسال مجدد کد</button>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthModal;

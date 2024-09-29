"use client";
import { useState } from "react";
import Calls from "./calls/Calls";
import { toast } from "react-toastify";
import styles from "./BootcampUser.module.css";
import BootCancel from "./BootCancel";
import { CircleX } from "lucide-react";

const BootcampUser = ({ user, hashed_id }) => {
  // console.log(user);
  const {
    id,
    name,
    phone,
    discount,
    date,
    bootcampTitle,
    result,
    callResult,
    calls,
    transactionId,
  } = user;
  const [userState, setUserState] = useState(user);
  const [userInfo, setUserInfo] = useState({
    callResult: callResult ? callResult : "در انتظار بررسی",
    calls: calls ? calls : [],
  });

  const [isModalShow, setIsModalShow] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submit = async () => {
    const res = await fetch(
      `${process.env.BASE_URL}/admin/updateBootcampCalls.php`,
      {
        method: "POST",
        body: JSON.stringify({
          API_KEY: process.env.API_KEY,
          Content_Type: process.env.Content_Type,
          hashed_id,
          userId: id,
          ...userInfo,
        }),
      }
    );
    const data = await res.json();
    if (data.toString() === "200") {
      toast.success("با موفقیت ثبت شد");
      setIsModalShow(false);
      setUserState({ ...userState, callResult: userInfo.callResult });
    }
    // console.log("response update lead: ", data);
  };
  return (
    <>
      <div
        className={styles.container + ""}
        onClick={() => setIsModalShow(true)}
      >
        <div>
          <h6>{id}</h6>
        </div>
        <div>
          <h6>{name}</h6>
        </div>
        <div>
          <h6>{phone}</h6>
        </div>
        <div>
          <h6>{new Date(+date * 1000).toLocaleDateString("fa-IR")}</h6>
        </div>
        <div>
          <h6>{discount}</h6>
        </div>
        <div>
          <h6>{bootcampTitle}</h6>
        </div>
        <div>
          <h6>{result}</h6>
        </div>
        <div>
          <h6>{userState.callResult}</h6>
        </div>
        <div>
          <h6>{userState.transactionId}</h6>
        </div>
        <div>
          <BootCancel tid={transactionId} />
        </div>
      </div>
      <div
        className="fixed top-0 left-0 bg-primary-20 w-full h-full bg-opacity-50 p-12"
        style={{ display: isModalShow ? "flex" : "none" }}
      >
        <div className="bg-white relative max-w-[600px] mx-auto w-full p-2 rounded-xl shadow-xl">
          <CircleX
            onClick={() => setIsModalShow(false)}
            size={20}
            className="absolute top-2 left-2"
          />
          <Calls userInfo={userInfo} setUserInfo={setUserInfo} />
          <div className={styles.callResult}>
            <label className="text-primary-20 px-2" htmlFor="callResult" >
              نتیجه :
            </label>
            <select
              className="w-10/12 mx-auto p-2"
              type="text"
              name="callResult"
              value={userInfo.callResult}
              onChange={changeHandler}
            >
              <option value={"انصراف"}>انصراف</option>
              <option value={"نیاز به پیگیری"}>نیاز به پیگیری</option>
              <option value={"ثبت نام"}>ثبت نام</option>
              <option value={"بررسی نشده"}>بررسی نشده</option>
              <option value={"پرداخت نکرده"}>پرداخت نکرده</option>
              <option value={"بی پاسخ"}>بی پاسخ</option>
            </select>
          </div>
          <div className={styles.controls}>
            <button
              className="w-full bg-primary-30 hover:text-primary-base text-white font-medium"
              onClick={submit}
            >
              ثبت تغییرات
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootcampUser;

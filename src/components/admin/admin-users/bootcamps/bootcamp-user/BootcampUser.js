"use client";
import { useState } from "react";
import Calls from "./calls/Calls";
import { toast } from "react-toastify";
import styles from "./BootcampUser.module.css";
import BootCancel from "./BootCancel";
import { CircleX, Loader2 } from "lucide-react";
import { changeEligibleState } from "@/requests/admin/actions/ChangeEligibleState";
import { revalidatePath } from "next/cache";

const BootcampUser = ({ user, hashed_id }) => {
  console.log(hashed_id);

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
    kelaasor_eligible,
  } = user;
  const [userState, setUserState] = useState(user);
  const [userInfo, setUserInfo] = useState({
    callResult: callResult ? callResult : "در انتظار بررسی",
    calls: calls ? calls : [],
  });

  const [isModalShow, setIsModalShow] = useState(false);
  const [loadingEligible, setLoadingEligible] = useState(false);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const changeEligibleStateFc = async () => {
    setLoadingEligible(true);
    const state = await changeEligibleState(
      hashed_id,
      bootcampTitle,
      kelaasor_eligible,
      phone
    );

    if (state) {
      setLoadingEligible(false);
    }
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
      <div className="w-full flex items-center justify-between text-sm p-2 hover:bg-opacity-30 hover:bg-secondary-base ml-5 relative transition-colors duration-300">
        <div className="w-fit flex items-center justify-start">{id}</div>
        <div className="w-1/12 flex items-center justify-start ">{name}</div>
        <div className="w-1/12 flex items-center justify-start ">{phone}</div>
        <div className="w-1/12 flex items-center justify-start ">
          {new Date(+date * 1000).toLocaleDateString("fa-IR")}
        </div>
        <div className="w-1/12 flex items-center justify-start ">
          {!discount ? "بدون تخفیف" : discount}
        </div>
        <div className="w-1/12 flex items-center justify-start ">
          {bootcampTitle}
        </div>
        <div className="w-1/12 flex items-center justify-start ">{result}</div>
        <div
          onClick={() => setIsModalShow(true)}
          className="w-1/12 flex items-center justify-start cursor-pointer underline underline-offset-8 "
        >
          {userState.callResult}
        </div>
        <div className="w-2/12 flex items-center justify-start ">
          {transactionId}
        </div>
        <div className="w-1/12 flex items-center justify-start ">
          <button
            onClick={changeEligibleStateFc}
            className={` ${loadingEligible ? "bg-light-3 text-light-1 p-2 rounded-full" : kelaasor_eligible ? "bg-success text-success-light hover:bg-success-light hover:text-success" : "bg-red-500 hover:bg-red-700 text-white"} font-medium rounded-md py-1 px-2 transition-colors duration-300 w-8/12 text-center `}
          >
            {loadingEligible ? (
              <Loader2 size={24} className="animate-spin" />
            ) : kelaasor_eligible === 0 ? (
              "غیرمجاز"
            ) : (
              "مجاز"
            )}
          </button>
        </div>
        <div className="w-1/12 flex items-center justify-start ">
          <BootCancel tid={userState.transactionId} />{" "}
        </div>
      </div>
      <div
        className="fixed top-0 left-0 bg-primary-20 w-full h-full bg-opacity-50 p-12 z-30"
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
            <label className="text-primary-20 px-2" htmlFor="callResult">
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
            <div className="absolute bottom-5 left-0 flex items-center justify-center w-full">
              <button
                className="w-10/12 bg-primary-30 hover:text-primary-base text-white font-medium"
                onClick={submit}
              >
                ثبت تغییرات
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootcampUser;

"use client";
import { changeEligibleState } from "@/requests/AdminActions/actions";
import { bootcampUser } from "@/types/bootcampUser";
import { LoaderCircle } from "lucide-react";
import React, { useCallback, useState } from "react";
import Modal from "../layout/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import Calls from "./Calls";
import { useRouter } from "next/navigation";
import SnapModal from "../layout/Modal/SnapModal";

const UserInfo: React.FC<{ user: bootcampUser; hashedId: string }> = ({
  user,
  hashedId,
}) => {
  const [loadingEligible, setLoadingEligible] = useState(false);
  const [modalVis, setModalVis] = useState(false);
  const [snappPayModal, setSnappPayModal] = useState(false);

  const router = useRouter();

  const openUserInfoPageHandler = useCallback(() => {
    router.push(`/admin/users/${user.name}`);
  }, [router, user]);

  const modalVisToggler = useCallback(() => {
    setModalVis((prevState) => {
      if (prevState) {
        document.body.style.overflow = "unset";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !prevState;
    });
  }, []);

  const openSnappModalHandler = useCallback(() => {
    setSnappPayModal((prevState) => !prevState);
  }, []);

  const changeEligibleStateHandler = async () => {
    setLoadingEligible(true);
    const result = await changeEligibleState(
      hashedId,
      user.bootcampTitle,
      user.kelaasor_eligible,
      user.phone
    );

    if (result) {
      setLoadingEligible(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {snappPayModal && (
          <SnapModal tid={user.transactionId} onClose={openSnappModalHandler} />
        )}
        {modalVis && (
          <Modal modalToggle={modalVisToggler}>
            <Calls
              hashedId={hashedId}
              userId={user.id}
              callResult={user.callResult}
              calls={user.calls}
            />
          </Modal>
        )}
      </AnimatePresence>
      <div
        className="flex group items-center justify-between w-full gap-2 p-1 mb-2 transition-colors duration-300 rounded-md odd:bg-white hover:bg-primary-base hover:bg-opacity-25 even:bg-light-4"
        key={user.id}
      >
        <span className="p-2 text-xs font-medium w-fit">{user.id}</span>
        <span
          onClick={openUserInfoPageHandler}
          className="w-2/12 p-2 group-hover:text-primary-base transition-colors duration-300 cursor-pointer text-sm font-medium text-start hover:underline hover:underline-offset-8"
        >
          {user.name}
        </span>
        <span className="w-1/12 p-2 text-xs font-medium">{user.phone}</span>
        <span className="flex items-center justify-center w-1/12 p-2 text-xs font-medium text-center">
          {new Date(+user.date * 1000).toLocaleDateString("fa-IR")}
        </span>
        <span className="w-1/12 p-2 text-xs font-medium">
          {user.discount ? user.discount : "بدون تخفیف"}
        </span>
        <span
          onClick={modalVisToggler}
          className="w-1/12 p-2 text-[10px] font-medium underline underline-offset-8"
        >
          {user.callResult}
        </span>
        <span className="p-2 text-xs font-medium text-center w-fit">
          {user.result}
        </span>
        <span className="w-3/12 p-2 text-xs font-medium text-center">
          {user.transactionId}
        </span>
        <span className="flex items-center justify-center w-1/12 p-2 text-xs font-medium">
          <button
            onClick={changeEligibleStateHandler}
            className={`${loadingEligible ? "bg-light-3 text-light-1" : user.kelaasor_eligible === 0 ? "bg-red-500 text-white" : "bg-success hover:bg-green-800 text-white"} rounded-sm p-1`}
          >
            {loadingEligible ? (
              <LoaderCircle className="animate-spin" size={20} />
            ) : user.kelaasor_eligible === 0 ? (
              "غیرمجاز"
            ) : (
              "مجاز"
            )}
          </button>
        </span>
        <span
          onClick={openSnappModalHandler}
          className="flex items-center justify-center w-1/12 p-2 text-xs font-medium"
        >
          <button>لغو</button>
        </span>
      </div>
    </>
  );
};

export default UserInfo;

"use client";
import React, { useCallback, useEffect, useState } from "react";
import WheelAuthModal from "./WheelAuthModal";
import { AnimatePresence } from "framer-motion";
import WheelSpin from "./WheelSpin";
import WheelForm from "./WheelForm";
import WheelOtp from "./WheelOtp";

const WheelContainer: React.FC<{
  discount: string | undefined;
  ocompleteOtp: string | undefined;
}> = ({ discount, ocompleteOtp }) => {
  const [authModalVis, setaAuthModalVis] = useState(false);
  useEffect(() => {
    if (discount && !ocompleteOtp) {
      setaAuthModalVis(true);
    }
  }, [discount, ocompleteOtp]);
  const authModalToggler = useCallback(() => {
    setaAuthModalVis((prevState) => !prevState);
  }, []);

  return (
    <>
      <AnimatePresence>
        {authModalVis && (
          <WheelAuthModal onCloseModal={authModalToggler}>
            {!discount ? <WheelForm /> : <WheelOtp />}
          </WheelAuthModal>
        )}
      </AnimatePresence>
      <div className="relative">
        <div
          onClick={authModalToggler}
          className={`absolute z-[201] top-0 left-0 w-full h-full ${discount && ocompleteOtp && "hidden"}`}
        ></div>
        <WheelSpin discount={discount} />
      </div>
    </>
  );
};

export default WheelContainer;
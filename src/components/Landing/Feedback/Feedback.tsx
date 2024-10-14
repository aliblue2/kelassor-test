"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import FeedbackCarousel from "./FeedbackCarousel";
import React from "react";

//Feedback component
const Feedback: React.FC<{ heading?: boolean }> = ({ heading = true }) => {
  return (
    <div className="container relative z-20 gap-10 -mt-16 flex flex-col">
      {heading && (
        <CustomHeading side="left" circle>
          <h2>نظر همراهان و دانشجویان کلاسور</h2>
        </CustomHeading>
      )}
      <FeedbackCarousel />
    </div>
  );
};

export default Feedback;

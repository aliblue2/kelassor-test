"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import FeedbackCarousel from "./FeedbackCarousel";

//Feedback component
const Feedback = () => {
  return (
    <div className="container gap-10 flex flex-col">
      <CustomHeading side="left" circle>
        <h2>نظر همراهان و دانشجویان کلاسور</h2>
      </CustomHeading>
      <FeedbackCarousel />
    </div>
  );
};

export default Feedback;

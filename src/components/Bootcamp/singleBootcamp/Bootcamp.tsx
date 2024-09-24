"use client";

import { bootcamp } from "@/types/bootcamp";
import BootcampHero from "./BootcampHero";
import BootcampIntroduction from "./BootcampIntroduction";
import BootcampTeachers from "./BootcampTeachers";
import BootcampFeatures from "./BootcampFeatures";
import BootcampTechnologies from "./BootcampTechnologies";
import BootcampSyllabus from "./BootcampSyllabus/BootcampSyllabus";
import BootcampSignupSteps from "./BootcampSignupSteps";
import BootcampSignupPlan from "./BootcampSignupPlan";
import BootcampPaymentMethod from "./BootcampPaymentMethod";
import BootcampYouShouldKnow from "./BootcampYouShouldKnow";
import BootcampCertificate from "./BootcampCertificate";
import BootcampSupport from "./BootcampSupport";
import BootcampConsult from "./BootcampConsult";
import { useRef } from "react";
import BootcampJumplist from "./BootcampJumplist";
import BootcampKelaasorSupporter from "./BootcampKelaasorSupporter";

//Bootcamp component
type BootcampProps = {
  data: bootcamp;
};
const Bootcamp = ({ data }: BootcampProps) => {
  const section = useRef<(HTMLDivElement | null)[]>([]);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !section.current.includes(el)) {
      section.current.push(el);
    }
  };
  return (
    <div className="container flex flex-col gap-10 md:gap-20 ">
      <BootcampHero
        image={data.logo_banner}
        title1={data.main_title}
        title2={data.second_title}
        capacity={data.capacity}
        full_capacity={data.full_capacity}
        active={data.status === "active"}
      />
      <BootcampJumplist sections={section} />
      <BootcampIntroduction
        ref={addToRefs}
        pictures={data.pictures}
        content={data.intro}
        title={data.header_title}
      />
      <BootcampTeachers ref={addToRefs} teachers={data.teachers} />
      <BootcampFeatures ref={addToRefs} />
      <BootcampKelaasorSupporter logos={data.sponsers} />
      <BootcampSyllabus data={data.contents} ref={addToRefs} />
      <BootcampTechnologies logos={data.tech_logo} />
      <BootcampSignupSteps active={data.status === "active"} duration={data.length} date={data.start} ref={addToRefs} />
      <BootcampSignupPlan prices={data.price} />
      <BootcampPaymentMethod price={data.price[0]}/>
      <BootcampYouShouldKnow ref={addToRefs} />
      <BootcampCertificate />
      <BootcampSupport />
      <BootcampConsult />
    </div>
  );
};

export default Bootcamp;

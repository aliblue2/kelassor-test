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

//Bootcamp component
type BootcampProps = {
  data: bootcamp;
};
const Bootcamp = ({ data }: BootcampProps) => {
  console.log(222, data);
  return (
    <div className="container flex flex-col gap-10">
      <BootcampHero
        image={data.logo_banner}
        title1={data.main_title}
        title2={data.second_title}
        capacity={data.capacity}
        full_capacity={data.full_capacity}
      />
      <BootcampIntroduction pictures={data.pictures} content={data.intro} title={data.header_title} />
      <BootcampTeachers teachers={data.teachers} />
      <BootcampFeatures />
      <BootcampTechnologies logos={data.tech_logo} />
      <BootcampSyllabus data={data.contents} />
      <BootcampSignupSteps />
      <BootcampSignupPlan />
      <BootcampPaymentMethod />
      <BootcampYouShouldKnow />
      <BootcampCertificate />
      <BootcampSupport />
      <BootcampConsult />
    </div>
  );
};

export default Bootcamp;

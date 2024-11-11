"use client";

import Supporter from "@/components/Landing/Supporter/Supporter";

type BootcampKelaasorSupporterProps = {
  logos: { sponser_link: string }[];
};

const BootcampKelaasorSupporter = ({
  logos,
}: BootcampKelaasorSupporterProps) => {
  console.log(logos);

  const emptyItemActive = logos.find((item) => item.sponser_link === "");

  return (
    <>{emptyItemActive ? null : <Supporter images={logos.slice(0, 4)} />}</>
  );
};

export default BootcampKelaasorSupporter;

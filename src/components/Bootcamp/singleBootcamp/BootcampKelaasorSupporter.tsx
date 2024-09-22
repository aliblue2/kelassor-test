"use client";

import Supporter from "@/components/Landing/Supporter/Supporter";

type BootcampKelaasorSupporterProps = {
  logos: {sponser_link: string}[];
};

const BootcampKelaasorSupporter = ({ logos }: BootcampKelaasorSupporterProps) => {
  return <Supporter images={logos.slice(0, 4  )} />;
};

export default BootcampKelaasorSupporter;
"use client";

import InfiniteScroll from "@/components/Landing/Companies/InfiniteScroll";

//BootcampTechnologies component
type BootcampTechnologiesProps = {
  logos: string[];
};
const BootcampTechnologies = ({ logos }: BootcampTechnologiesProps) => {
  return <InfiniteScroll images={logos} />;
};

export default BootcampTechnologies;

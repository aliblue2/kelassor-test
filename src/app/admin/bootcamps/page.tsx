import GridBootcapms from "@/components/Admin/bootcamps/GridBootcapms";
import { getBootcamps } from "@/requests/getBootcamps";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  const { bootcamps } = await getBootcamps();

  return (
    <div>
      <GridBootcapms bootcampsData={bootcamps} />
    </div>
  );
};

export default Page;

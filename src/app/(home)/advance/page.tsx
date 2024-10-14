import MainLanding from "@/components/Advance/MainLanding";
import { getWorkShops } from "@/requests/work-shop/getWorkShops";
import { NextPage } from "next";

const Page: NextPage = async () => {
  const workshops = await getWorkShops();
  const workshopsArray = [{ ...workshops }];
  return (
    <>
      <MainLanding workshops={workshopsArray} />
    </>
  );
};

export default Page;

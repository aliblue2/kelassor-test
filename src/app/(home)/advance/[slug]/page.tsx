import Landing from "@/components/Advance/Landing";
import { getWorkShopInfo } from "@/requests/work-shop/getWorkShop";
import { getWorkShops } from "@/requests/work-shop/getWorkShops";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface Props {}

const Page: NextPage<{ params: Params }> = async ({ params }) => {
  const WorkShopInfo = await getWorkShopInfo(params.slug);
  const workshops = await getWorkShops();
  const workshopsArray = [{ ...workshops }];
  return (
    <div className="max-w-[1100px] mx-auto w-full">
      <Landing workshopInfo={WorkShopInfo} recomWorkshops={workshopsArray}  />
    </div>
  );
};

export default Page;

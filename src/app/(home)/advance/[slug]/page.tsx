import Landing from "@/components/Advance/Landing";
import { getWorkShopInfo } from "@/requests/work-shop/getWorkShop";
import { getWorkShops } from "@/requests/work-shop/getWorkShops";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { cookies } from "next/headers";


const Page: NextPage<{ params: Params }> = async ({ params }) => {
  const WorkShopInfo = await getWorkShopInfo(params.slug);
  const hashedId = cookies().get("session_id")?.value;
  const workshops = await getWorkShops();
  return (
    <div className="max-w-[1100px] mx-auto w-full">
      <Landing hashedId={hashedId} workshopInfo={WorkShopInfo} recomWorkshops={workshops}  />
    </div>
  );
};

export default Page;

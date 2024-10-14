import Landing from "@/components/Advance/Landing";
import { getWorkShopInfo } from "@/requests/work-shop/getWorkShop";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface Props {}

const Page: NextPage<{ params: Params }> = async ({ params }) => {
  const WorkShopInfo = await getWorkShopInfo(params.slug);

  return (
    <div className="max-w-[1100px] mx-auto w-full">
      <Landing workshopInfo={WorkShopInfo} />
    </div>
  );
};

export default Page;

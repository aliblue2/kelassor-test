import ActiveAdvances from "@/components/user-panel/Advance/ActiveAdvances";
import PassedAdvances from "@/components/user-panel/Advance/PassedAdvances";
import RecomAdvances from "@/components/user-panel/Advance/RecomAdvances";
import { getPanelWorkshopsSessions } from "@/requests/user-panel/advance/getPanelAdvanceSessions";
import { getWorkShops } from "@/requests/work-shop/getWorkShops";
import { NextPage } from "next";
import { cookies } from "next/headers";

interface Props {}

const Page: NextPage<Props> =async({}) => {
  const hashedId = cookies().get("session_id")!.value
  const workshops = await getWorkShops();
  const sessions = await getPanelWorkshopsSessions(hashedId)

    

  return (
    <div className="w-full">
      <ActiveAdvances sessions={sessions} hashedId={hashedId}/>
      <PassedAdvances sessions={sessions} />
      <RecomAdvances workshops={workshops} />
    </div>
  );
};

export default Page;

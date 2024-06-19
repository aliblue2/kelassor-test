import Bootcamp from "@/components/Bootcamp/singleBootcamp/Bootcamp";
import { getBootcamp } from "@/requests/getBootcamp";

//page component
const page = async ({ params }: { params: { bootcamp: string } }) => {
  const { bootcamp } = params;
  const data = await getBootcamp({ bootcamp: bootcamp });
  return <Bootcamp data={data} />;
};

export default page;

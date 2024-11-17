import Bootcamps from "@/components/Bootcamp/Bootcamps";
import { getBootcamps } from "@/requests/getBootcamps";

//page component
const page = async () => {
  const bootcamps = await getBootcamps();
  return <Bootcamps data={bootcamps} />;
};

export default page;

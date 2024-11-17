import Bootcamp from "@/components/Bootcamp/singleBootcamp/Bootcamp";
import { getBootcamp } from "@/requests/getBootcamp";
import { getBootcamps } from "@/requests/getBootcamps";
import { bootcampSimple } from "@/types/bootcamp";
import { notFound } from "next/navigation";

//page component
export async function generateStaticParams() {
  const  bootcamps : bootcampSimple[]  = await getBootcamps();

  return bootcamps.map((item) => ({
    bootcamp: item.url,
  }));
}
const page = async ({ params }: { params: { bootcamp: string } }) => {
  const { bootcamp } = params;
  try {
    const data = await getBootcamp({ bootcamp: bootcamp });
    return <Bootcamp data={data} />;
  } catch (e) {
    notFound();
  }
};

export default page;

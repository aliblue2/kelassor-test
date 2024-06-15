import { getBootcamp } from "@/requests/getBootcamp";

//page component
const page = async ({ params }: { params: { bootcamp: string } }) => {
  const { bootcamp } = params;
  const res = await getBootcamp({ bootcamp: bootcamp });
  console.log(res);
  return <div>hi</div>;
};

export default page;

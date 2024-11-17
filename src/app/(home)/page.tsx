import Landing from "@/components/Landing/Landing";
import { getBootcamps } from "@/requests/getBootcamps";

const Home = async () => {
  const  bootcamps  = await getBootcamps();
  return <Landing bootcamps={bootcamps}  />;
};

export default Home;

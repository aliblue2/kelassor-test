import { getBootcamps } from "@/requests/getBootcamps";
import NavBarUi from "./NavBarUi";
//NavBarData component
const NavBar = async () => {
  ////////////////////////////////////////////////////////////
  const { bootcamps } = await getBootcamps();
  ////////////////////////////////////////////////////////////
  // delete bellow uncomment above
  ////////////////////////////////////////////////////////////
  // const bootcamps: bootcampSimple[] = [
  //   { url: "", logo: "", status: "active", header_title: "bc1", logo_banner:"" },
  //   { url: "", logo: "", status: "active", header_title: "bc2", logo_banner:"" },
  //   { url: "", logo: "", status: "active", header_title: "bc3", logo_banner:"" },
  //   { url: "", logo: "", status: "active", header_title: "bc4", logo_banner:"" },
  //   { url: "", logo: "", status: "active", header_title: "bc5", logo_banner:"" },
  //   { url: "", logo: "", status: "active", header_title: "bc6", logo_banner:"" },
  // ];
  ////////////////////////////////////////////////////////////
  return <NavBarUi bootcamps={bootcamps} />;
};

export default NavBar;

"use client";
import Nav from "./Nav/Nav";
import CustomButton from "@/components/Ui/CustomButton";
import { bootcamp } from "@/types/bootcamp";

//NavBar component
type NavBarProps = { bootcamps: bootcamp[] };
const NavBar = ({ bootcamps }: NavBarProps) => {
  return (
    <div className="h-[60px] border-b grid grid-cols-[1fr_8fr_1fr] ">
      <div className="flex items-center justify-center">
        <CustomButton //todo
        >
          todo
        </CustomButton>
      </div>
      <div className="md:block hidden">
        <Nav bootcamps={bootcamps} />
      </div>
      <div //todo get svg logo
        className="p-2 h-full"
      >
        LOGO
      </div>
    </div>
  );
};

export default NavBar;

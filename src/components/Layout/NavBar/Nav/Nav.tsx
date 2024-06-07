">puse client";
import NavButton from "./NavButton";
import { useEffect, useRef } from "react";
import NavDropdown from "./NavDropdown";
import { usePathname } from "next/navigation";
import { bootcamp } from "@/types/bootcamp";
import NavDropdownItem from "./NavDropdownItem";
import { AboutusIcon, CallusIcon, RulesIcon } from "@/components/Ui/Icons";

//Nav component
type NavProps = { bootcamps: bootcamp[] };
const Nav = ({ bootcamps }: NavProps) => {
  //pathname
  const location = usePathname();
  //ref to indicator that moves under nav
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  //move indicator
  useEffect(() => {
    //get first
    const path = location.split("/");
    if (!indicatorRef.current) return;
    if (path[1] === "") indicatorRef.current.style.right = `${0 * (112 + 8)}px`;
    if (path[1] === "bootcamp")
      indicatorRef.current.style.right = `${1 * (112 + 8)}px`;
    if (path[1] === "blog")
      indicatorRef.current.style.right = `${2 * (112 + 8)}px`;
    if (path[1] === "contact-us")
      indicatorRef.current.style.right = `${3 * (112 + 8)}px`;
  }, [location]);

  return (
    <div className="flex flex-col items-center h-full font-bold">
      {/*Nav links********************************************************************************/}
      <div className="flex relative h-full top-1 gap-2 px-2 [&>*]:w-28">
        <NavButton to="/">خانه</NavButton>

        <NavDropdown title="بوتکمپ‌ها">
          {bootcamps.map((bc: bootcamp, index: number) =>
            bc.status !== "notactive" ? (
              <NavDropdownItem key={index} to={`/bootcamp/${bc.url}`}>
                {bc.header_title}
              </NavDropdownItem>
            ) : null
          )}
        </NavDropdown>

        <NavButton to="/blog">بلاگ</NavButton>

        <NavDropdown title="ارتباط با ما">
          <NavDropdownItem to="">
            <span>درباره ما</span>
            <AboutusIcon />
          </NavDropdownItem>
          <NavDropdownItem to="">
            <span>تماس با ما</span>
            <CallusIcon />
          </NavDropdownItem>
          <NavDropdownItem to="">
            <span>قوانین و مقررات</span>
            <RulesIcon />
          </NavDropdownItem>
        </NavDropdown>
      </div>

      {/*Sliding indicator*****************************************************************************
       *                      nav item count                                                          *
       *                      ^                                                                       */}
      <div className="w-[calc(4*(8px+112px)+8px)] h-1 relative z-10 ">
        <span
          ref={indicatorRef}
          className="absolute right-0 mx-2 w-28 h-full duration-200 bg-primary-base"
        />
      </div>
    </div>
  );
};

export default Nav;

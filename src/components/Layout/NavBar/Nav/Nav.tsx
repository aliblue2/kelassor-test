"use client";
import NavButton from "./NavButton";
import { useEffect, useRef } from "react";
import NavDropdown from "./NavDropdown";
import { usePathname } from "next/navigation";
import { bootcampSimple } from "@/types/bootcamp";
import NavDropdownItem from "./NavDropdownItem";
import { AboutusIcon, CallusIcon, RulesIcon } from "@/components/Ui/Icons";

//Nav component
type NavProps = { bootcamps: bootcampSimple[] };
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
    indicatorRef.current.style.opacity = "100%";
    if (path[1] === "") indicatorRef.current.style.right = `${0 * (112 + 8)}px`;
    else if (path[1] === "bootcamp")
      indicatorRef.current.style.right = `${1 * (112 + 8)}px`;
    // else if (path[1] === "blog") indicatorRef.current.style.right = `${2 * (112 + 8)}px`;
    else if (path[1] === "about-us")
      indicatorRef.current.style.right = `${2 * (112 + 8)}px`;
    else indicatorRef.current.style.opacity = "0";
  }, [location]);

  return (
    <div className="flex flex-col items-center h-full font-bold">
      {/*Nav links********************************************************************************/}
      <div className="flex relative h-full top-1 gap-2 px-2 [&>*]:w-28">
        <NavButton to="/">خانه</NavButton>

        <NavDropdown title="بوتکمپ‌ها">
          <NavDropdownItem to={`/bootcamp`}>همه‌ی بوتکمپ‌ها</NavDropdownItem>
          {bootcamps.map((bc: bootcampSimple, index: number) =>
            bc.status === "active" ? (
              <NavDropdownItem key={index} to={`/bootcamp/${bc.url}`}>
                {bc.header_title}
              </NavDropdownItem>
            ) : null
          )}
        </NavDropdown>

        {/*todo:
        <NavButton to="/blog">بلاگ</NavButton>
        */}

        <NavDropdown title="ارتباط با ما">
          <NavDropdownItem to="/about-us">
            <span>درباره ما</span>
            <AboutusIcon />
          </NavDropdownItem>

          <NavDropdownItem to="/about-us/contact-us">
            <span>تماس با ما</span>
            <CallusIcon />
          </NavDropdownItem>

          <NavDropdownItem to="/about-us/user-agreements">
            <span>قوانین و مقررات</span>
            <RulesIcon />
          </NavDropdownItem>
        </NavDropdown>
      </div>

      {/*Sliding indicator*****************************************************************************
       *                      nav item count                                                          *
       *                      ^                                                                       */}
      <div className="w-[calc(3*(8px+112px)+8px)] h-1 relative z-30 ">
        <span
          ref={indicatorRef}
          className="absolute right-0 mx-2 w-28 h-full duration-200 bg-primary-base"
        />
      </div>
    </div>
  );
};

export default Nav;

import NavButton from "./NavButton";
import NavDropdown from "./NavDropdown";
import { bootcampSimple } from "@/types/bootcamp";
import NavDropdownItem from "./NavDropdownItem";
import { AboutusIcon, CallusIcon, RulesIcon } from "@/components/Ui/Icons";
import Image from "next/image";
import { WorkShopMain } from "@/types/Workshop";

type NavProps = { bootcamps: bootcampSimple[]; workshops: WorkShopMain[] };
const Nav = ({ bootcamps, workshops }: NavProps) => {
  return (
    <div className="flex flex-col items-center h-full font-bold">
      <div className="flex relative h-full top-1 gap-2 px-2 [&>*]:w-28">
        <NavButton to="/">خانه</NavButton>

        <NavDropdown title="بوتکمپ‌ها" to={"/bootcamp"}>
          <NavDropdownItem to={`/bootcamp`}>همه‌ی بوتکمپ‌ها</NavDropdownItem>
          {bootcamps.map((bc: bootcampSimple, index: number) =>
            bc.status !== "notactive" ? (
              <NavDropdownItem key={index} to={`/bootcamp/${bc.url}`}>
                {bc.header_title}{" "}
                <Image
                  src={bc.logo}
                  height={20}
                  width={20}
                  alt={bc.header_title}
                />
              </NavDropdownItem>
            ) : null
          )}
        </NavDropdown>

        {workshops.length > 0 && (
          <NavDropdown to="/advance" title="advance">
            <NavDropdownItem to="/advance">همه کارگاه‌ها</NavDropdownItem>
            {workshops.map((item) =>
              item.status !== "notactive" ? (
                <NavDropdownItem key={item.url} to={`/advance/${item.url}`}>
                  {item.header_title}{" "}
                  <Image
                    src={item.logo}
                    height={20}
                    width={20}
                    alt={item.header_title}
                  />
                </NavDropdownItem>
              ) : null
            )}
          </NavDropdown>
        )}
        <NavButton to="/blog">بلاگ</NavButton>

        <NavDropdown title="ارتباط با ما" to="/about-us">
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
    </div>
  );
};

export default Nav;

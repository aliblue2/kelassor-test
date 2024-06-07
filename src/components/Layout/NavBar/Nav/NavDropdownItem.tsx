import Link from "next/link";
import { ReactNode } from "react";

//NavDropdownItem component
type NavDropdownItemProps = {
  to: string;
  children: ReactNode;
};
const NavDropdownItem = ({ to, children }: NavDropdownItemProps) => {
  return (
    <Link
      className="py-2 leading-8 text-ellipsis flex items-center justify-between line-clamp-1 hover:text-primary-base"
      href={{
        pathname: to,
      }}
    >
      {children}
    </Link>
  );
};

export default NavDropdownItem;

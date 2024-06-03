import Link from "next/link";

//NavDropdownItem component
type NavDropdownItemProps = {
  to: string;
  title: string;
};
const NavDropdownItem = ({ to, title }: NavDropdownItemProps) => {
  return (
    <Link
      className="py-2 leading-8 text-ellipsis line-clamp-1 hover:text-primary-base"
      href={{
        pathname: to,
      }}
    >
      {title}
    </Link>
  );
};

export default NavDropdownItem;
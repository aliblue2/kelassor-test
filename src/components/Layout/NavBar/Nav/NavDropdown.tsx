"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

//NavDropdown component
type NavDropdownProps = { children: ReactNode; title: string; to: string };
const NavDropdown = ({ children, title, to }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  return (
    <button
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative z-20 flex flex-col items-center justify-evenly"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="flex items-center justify-between w-full px-2">
        {title}
        <ChevronDownIcon size={16} />
      </span>
      {pathName.startsWith(to) && (
        <motion.span
          layoutId="activePath"
          className="absolute left-0 w-full h-1 bottom-1 rounded-xl bg-primary-base"
        />
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute bg-background self-start font-normal min-w-[250%] divide-y overflow-hidden flex flex-col justify-start top-full rounded-b-md px-2 border-secondary-base duration-200 ${
              isOpen ? "border" : null
            } border-t-background`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default NavDropdown;

"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { ReactNode, useState } from "react";

//NavDropdown component
type NavDropdownProps = { children: ReactNode; title: string };
const NavDropdown = ({ children, title }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="flex flex-col border-b-4 border-b-background relative z-20 justify-center items-center"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="flex gap-2 justify-center items-center">
        {title}
        <ChevronDownIcon size={16}/>
      </span>
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

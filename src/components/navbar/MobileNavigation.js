import NavLinks from "./NavLinks";
import "/github/portfolio/src/css/Header.css";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRight
      className="Hamburger"
      size={30}
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  const closeIcon = (
    <CgClose
      className="Hamburger"
      size={30}
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <nav className="MobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;

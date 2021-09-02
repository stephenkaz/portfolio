import NavLinks from "./NavLinks";
import "../css/Header.css";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { motion } from "framer-motion";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

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
    <motion.nav
      initial={animateFrom}
      animate={animateTo}
      transition={{ ease: "easeIn", delay: 0.7 }}
      className="MobileNavigation"
    >
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </motion.nav>
  );
};

export default MobileNavigation;

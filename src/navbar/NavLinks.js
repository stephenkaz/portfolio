import "../css/Header.css";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.7 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#work">Work</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#contact" className="contact-btn">
          Contact
        </a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;

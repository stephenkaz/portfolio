import "./css/Header.css";
import MobileNavigation from "./navbar/MobileNavigation";
import Navigation from "./navbar/Navigation";
import { motion } from "framer-motion";

const Header = () => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className="Navbar">
      <motion.div
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        className="logo"
      >
        <a href="/">StephenKDesign</a>
      </motion.div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Header;

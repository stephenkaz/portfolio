import "./css/Header.css";
import MobileNavigation from "./navbar/MobileNavigation";
import Navigation from "./navbar/Navigation";

const Header = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="/">StephenKDesign</a>
      </div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Header;

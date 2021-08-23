import "../css/Header.css";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">StephenKDesign</a>
      </div>

      <ul className="nav__links">
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact" className="contact-btn">
            Contact
          </a>
        </li>
      </ul>

      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Header;

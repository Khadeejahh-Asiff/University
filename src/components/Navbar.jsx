import logo from "../assests/logo.png";
import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import MenuIcon from "../assests/menu-icon.png";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });
  }, []);

  const [Menu, SetMenu] = useState(false);
  const toggle = () => {
    Menu ? SetMenu(false) : SetMenu(true);
  };

  return (
    <nav className={`container ${scroll ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={Menu ? "" : "hide-menu"}>
        <li>
          <Link to="Hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Courses" smooth={true} offset={-260} duration={500}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="AboutUs" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="Gallery" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="Testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="ContactUs"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={MenuIcon} alt="Menu Icon" className="Menu" onClick={toggle} />
    </nav>
  );
}

export default Navbar;

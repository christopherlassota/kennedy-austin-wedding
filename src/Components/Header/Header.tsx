import { useState } from "react";
import "./Header.scss";
import { Link as Scroll } from "react-scroll";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false); // Start closing animation
      setTimeout(() => setShouldRender(false), 300); // Hide after animation completes
    } else {
      setShouldRender(true); // Render first
      setTimeout(() => setMenuOpen(true), 10); // Small delay to trigger transition
    }
  };

  return (
    <section className="header">
      <h4 className="header__altlogo">
        <Scroll to="hero" spy={true} smooth={true} duration={700}>
          Kennedy & Austin
        </Scroll>
      </h4>
      <Scroll to="hero" spy={true} smooth={true} duration={700}>
      <div className="header__logo">
        <h2 className="header__logo-text-1">K</h2>
        <h2 className="header__logo-text-2">A</h2>
      </div>
          </Scroll>
      <div className="header__menu" onClick={toggleMenu}>
        <Menu />
      </div>
      <ul className="header__nav">
        <li className="header__nav-item">
            
            <Scroll to="hero" spy={true} smooth={true} duration={700}>
            Home
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll to="story" spy={true} smooth={true} offset={-75} duration={700}>
            Our Story
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="ceremony"
            spy={true}
            smooth={true}
            offset={-125}
            duration={700}
          >
            Ceremony
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="reception"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            Reception
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="dresscode"
            spy={true}
            smooth={true}
            offset={-75}
            duration={700}
          >
            Dress Code
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="accommodation"
            spy={true}
            smooth={true}
            offset={-125}
            duration={700}
          >
            Accommodations
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="registry"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Gifts
          </Scroll>
        </li>
        {/* <li className="header__nav-item header__nav-item--highlight">
          <Scroll
            to="rsvp"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Reply
          </Scroll>
        </li> */}
      </ul>
      {shouldRender && (
        <section
          className={`sidebar ${menuOpen ? "sidebar--active" : ""}`}
          style={{ display: shouldRender ? "flex" : "none" }}
        >
          <div className="sidebar__toggle" onClick={toggleMenu}>
            <X />
          </div>
          <ul className="sidebar__nav">
            <li className="header__nav-item">
              <Scroll
                to="hero"
                spy={true}
                smooth={true}
                duration={700}
                onClick={toggleMenu}
              >
                Home
              </Scroll>
            </li>
            <li className="header__nav-item">
              <Scroll
                to="story"
                spy={true}
                smooth={true}
                duration={700}
                onClick={toggleMenu}
              >
                Our Story
              </Scroll>
            </li>
            <li className="header__nav-item">
              <Scroll
                to="ceremony"
                spy={true}
                smooth={true}
                offset={-125}
                duration={700}
                onClick={toggleMenu}
              >
                Ceremony
              </Scroll>
            </li>
            <li className="header__nav-item">
              <Scroll
                to="reception"
                spy={true}
                smooth={true}
                offset={-50}
                duration={700}
                onClick={toggleMenu}
              >
                Reception
              </Scroll>
            </li>
            <li className="header__nav-item">
              <Scroll
                to="dresscode"
                spy={true}
                smooth={true}
                offset={-125}
                duration={700}
                onClick={toggleMenu}
              >
                Dress Code
              </Scroll>
            </li>
            <li className="header__nav-item">
              <Scroll
                to="accommodation"
                spy={true}
                smooth={true}
                offset={-125}
                duration={700}
                onClick={toggleMenu}
              >
                Accommodations
              </Scroll>
            </li>
            <li className="header__nav-item">
              <Scroll
                to="registry"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                onClick={toggleMenu}
              >
                Gifts
              </Scroll>
            </li>
            {/* <li className="header__nav-item header__nav-item--highlight">
              <Scroll
                to="rsvp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
                onClick={toggleMenu}
              >
                Reply
              </Scroll>
            </li> */}
          </ul>
        </section>
      )}
    </section>
  );
};

export default Header;

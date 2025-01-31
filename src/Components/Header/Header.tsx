import "./Header.scss";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <section className="header">
      <div className="header__menu"></div>
      <div className="header__logo">
        <h2 className="header__logo-text">KA</h2>
      </div>
      <button className="header__rsvp">RSVP</button>
      <ul className="header__nav">
        <li className="header__nav-item">
          <Scroll
            to="hero"
            spy={true}
            smooth={true}
            offset={-200}
            duration={700}
          >
            Home
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="story"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            Our Story
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="venue"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            Venue
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="itinerary"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            Itinierary
          </Scroll>
        </li>
        <li className="header__nav-item">
          <Scroll
            to="registry"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            Registry
          </Scroll>
        </li>
        <li className="header__nav-item header__nav-item--highlight">
          <Scroll
            to="rsvp"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            RSVP
          </Scroll>
        </li>
      </ul>
    </section>
  );
};

export default Header;

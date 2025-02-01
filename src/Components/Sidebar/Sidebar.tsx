import "./Sidebar.scss";
import { Link as Scroll } from "react-scroll";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <ul className="sidebar__nav">
          <Scroll
            to="hero"
            spy={true}
            smooth={true}
            duration={700}
          >
        <li className="header__nav-item">
            Home
        </li>
          </Scroll>
          <Scroll
            to="story"
            spy={true}
            smooth={true}
            duration={700}
          >
        <li className="header__nav-item">
            Our Story
        </li>
          </Scroll>
          <Scroll
            to="venue"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
        <li className="header__nav-item">
            Venue
        </li>
          </Scroll>
          <Scroll
            to="itinerary"
            spy={true}
            smooth={true}
            offset={-125}
            duration={700}
          >
        <li className="header__nav-item">
            Itinierary
        </li>
          </Scroll>
          <Scroll
            to="registry"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
        <li className="header__nav-item">
            Registry
        </li>
          </Scroll>
          <Scroll
            to="rsvp"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
        <li className="header__nav-item header__nav-item--highlight">
            RSVP
        </li>
          </Scroll>
      </ul>
    </section>
  );
};

export default Sidebar;

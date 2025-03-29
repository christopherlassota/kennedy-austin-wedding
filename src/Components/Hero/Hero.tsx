import "./Hero.scss";
import { Link as Scroll } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <article className="hero__invitation">
        <h1 className="hero__title">Kennedy and Austin</h1>
        <h3 className="hero__date">Saturday the 30th of August, 2025</h3>
      </article>
      <a href="" className="hero__anchor">
        {/* <button className="hero__rsvp"> */}
          <Scroll
            to="rsvp"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            {/* RSVP */}
          </Scroll>
        {/* </button> */}
      </a>
    </section>
  );
};

export default Hero;

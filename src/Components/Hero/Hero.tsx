import "./Hero.scss";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <article className="hero__invitation">
        <h1 className="hero__title">Kennedy and Austin</h1>
        <h3 className="hero__date">08. 30. 2025</h3>
      </article>
        {/* <button className="hero__rsvp"> */}
          <Link
            to="rsvp"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            {/* RSVP */}
          </Link>
        {/* </button> */}
    </section>
  );
};

export default Hero;

import "./Footer.scss";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  return (
    <section className="footer">
      <Scroll to="hero" spy={true} smooth={true} duration={700}>
        <div className="footer__logo">
          <h2 className="footer__logo-text-1">K</h2>
          <h2 className="footer__logo-text-2">A</h2>
        </div>
      </Scroll>
    </section>
  );
};

export default Footer;

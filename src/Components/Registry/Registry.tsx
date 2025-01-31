import Blossom from "../../Iconography/Blossom/Blossom";
import Dune from "../../Iconography/Dune/Dune";
import Minty from "../../Iconography/Minty/Minty";
import Terra from "../../Iconography/Terra/Terra";
import "./Registry.scss";

const Registry = () => {
  return (
    <section className="registry" id="registry">
      <h2 className="registry__title">Registry</h2>
      <article className="registry__content">
        <article className="registry__logos">
          <div className="registry__logos-left">
            <Minty />
            <Terra />
          </div>
          <div className="registry__logos-right">
            <Dune />
            <Blossom />
          </div>
        </article>
        <p className="registry__text">
          Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi.
          Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu
          euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
          adipiscing sem.
        </p>
      </article>
    </section>
  );
};

export default Registry;

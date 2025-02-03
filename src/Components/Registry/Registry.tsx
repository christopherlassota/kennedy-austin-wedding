import "./Registry.scss";

const Registry = () => {
  return (
    <section className="registry" id="registry">
      <h2 className="registry__title">Registry</h2>
      <article className="registry__content">
        <a
          href="https://www.myregistry.com/wedding-registry/kennedy-laing-and-austin-bercier-chestermere-ab/4449897"
          target="_blank"
          rel="noopener noreferrer"
          className="registry__anchor"
        >
          <img
            className="registry__logo"
            src="/src/assets/images/registrylogo.png"
          />
        </a>
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

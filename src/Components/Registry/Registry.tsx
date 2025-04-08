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
            src="/assets/images/registrylogo.png"
          />
        </a>
        <p className="registry__text">
          Your presence at our wedding is the greatest gift we could ask for, and we are so excited to celebrate this momentous occasion with you. If you wish to honor us with a gift, we have a registry with items that would help us as we embark on this new chapter together.
        </p>
      </article>
      <a
        href="https://www.myregistry.com/wedding-registry/kennedy-laing-and-austin-bercier-chestermere-ab/4449897" 
        target="_blank"
        rel="noopener noreferrer"
        className="registry__button-anchor"
      >
        <button className="registry__button">View Registry</button>
      </a>
    </section>
  );
};

export default Registry;

import FlowerVine from "../../Iconography/FlowerVine/FlowerVine";
import "./Venue.scss";

const Venue = () => {
  return (
    <section className="venue">
      <article className="venue__content">
        <div className="venue__title-image">
          <article className="venue__name">
            <h3 className="venue__subtitle">The Venue</h3>
            <h2 className="venue__title">The Fairmont Palliser</h2>
          </article>
          <div className="venue__image-stack">
            <div className="venue__image1"></div>
            <div className="venue__image2"></div>
            <div className="venue__image3"></div>
          </div>
        </div>
        <ul className="venue__text">
          <li className="venue__item">
            <h4 className="venue__header">Venue Map</h4>
            <p className="venue__paragraph">
              Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
              aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
              quam diam felis, fringilla varius.
            </p>
            <div className="venue__button-container">
              <button className="venue__button">Map of Venue</button>
            </div>
          </li>
          <li className="venue__item">
            <h4 className="venue__header">Hotels</h4>
            <p className="venue__paragraph">
              Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
              aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
              quam diam felis, fringilla varius.
            </p>
            <div className="venue__button-container">
              <button className="venue__button">View Hotels</button>
            </div>
          </li>
          <li className="venue__item">
            <h4 className="venue__header">Places we Love</h4>
            <p className="venue__paragraph">
              Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
              aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
              quam diam felis, fringilla varius.
            </p>
            <div className="venue__button-container">
              <button className="venue__button">See our Favorites</button>
            </div>
          </li>
        </ul>
      </article>
      <article className="venue__flowervine">
        <FlowerVine />
      </article>
    </section>
  );
};

export default Venue;

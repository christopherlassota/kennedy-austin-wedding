import "./DressCode.scss";

const DressCode = () => {
  return (
    <section className="dresscode" id="dresscode">
      <h2 className="dresscode__title">Dress Code</h2>
      <div className="dresscode__learnmore">
        <div className="dresscode__image"></div>
        <div className="dresscode__right">
          <div className="dresscode__content">
            <p className="dresscode__paragraph">
              Our dress code is{" "}
              Black Tie Optional —
              which means you’re welcome to dress to the nines, but it’s not
              required.
            </p>
            <p className="dresscode__paragraph dresscode__paragraph--specific">
              For Men: A tuxedo is
              welcome, though a dark suit and tie are entirely appropriate.
            </p>
            <p className="dresscode__paragraph dresscode__paragraph--specific">
              For Women: A floor-length
              gown or a formal cocktail dress is recommended.
            </p>
            <p className="dresscode__paragraph">
              We kindly ask that guests dress in elegant attire in keeping
              with the occasion.
            </p>
          </div>
          <a
            href="https://www.marthastewart.com/7912329/what-it-really-means-to-plan-black-tie-wedding"
            className="dresscode__anchor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="dresscode__button">Learn More</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DressCode;

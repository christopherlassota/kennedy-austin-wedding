import "./Accommodation.scss";

const Accommodation = () => {
  return (
    <section className="accommodation">
      <h2 className="accommodation__title">Accomodation</h2>
      <article className="accommodation__content">
        <p className="accommodation__text">
          If you choose to stay at the Fairmont Palliser Hotel the night of our
          wedding, please call 1-800-441-1414 to make your reservation and
          reference our code KENNE0825 for a reduced rate. Alternatively you may
          use this like to make your reservation:
          https://book.passkey.com/go/KENNE0825
        </p>
        <div className="accommodation__discount-card">
          <div className="accommodation__discount-content">
            <h3 className="accommodation__discount-title">
              -- Fairmont Palliser Discount Code --
            </h3>
            <p className="accommodation__discount-text">KENNE0825</p>
          </div>
        </div>
      </article>
      <a
        href="https://book.passkey.com/go/KENNE0825"
        className="accommodation__button-anchor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="accommodation__button">Book a Room</button>
      </a>
    </section>
  );
};

export default Accommodation;

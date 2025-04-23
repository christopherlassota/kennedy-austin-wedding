import "./Accommodation.scss";

const Accommodation = () => {
  return (
    <section className="accommodation">
      <h2 className="accommodation__title">Accommodations</h2>
      <article className="accommodation__content">
        <p className="accommodation__text">
          If you choose to stay at the Fairmont Palliser Hotel the night of our
          wedding, please use the following link to book your reservation for a reduced rate:
          https://book.passkey.com/go/KENNE0825. Alternatively, you may call 1-800-441-1414 and reference our group code KENNE0825 to reveive a reduced rate.
        </p>
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

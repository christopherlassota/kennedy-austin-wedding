import "./Accommodation.scss";

const Accommodation = () => {
  return (
    <section className="accommodation">
      <h2 className="accommodation__title">Accommodations</h2>
      <article className="accommodation__content">
        <p className="accommodation__text">
        A preferred room rate is available for our guests at the Fairmont Palliser Hotel. To reserve, please visit: https://book.passkey.com/go/KENNE0825, or call 1-800-441-1414 and reference group code KENNE0825.
        </p>
        
      </article>
      <a href="https://book.passkey.com/go/KENNE0825" className="accommodation__button-anchor" target="_blank"
            rel="noopener noreferrer">
        <button className="accommodation__button">Book a Room</button>
      </a>
    </section>
  );
};

export default Accommodation;

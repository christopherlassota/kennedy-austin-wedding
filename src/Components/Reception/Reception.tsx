import "./Reception.scss";

const Reception = () => {
  return (
    <section className="reception">
      <div className="reception__title-box">
        <h3 className="reception__subtitle">Venue</h3>
        <h2 className="reception__title">Fairmont Palliser</h2>
      </div>
      <div className="reception__content">
        <div className="reception__image"></div>
        <h4 className="reception__address">
          133 9 Ave SW, Calgary, AB T2P 2M3, Canada
        </h4>
        <div className="reception__details">
          <p className="reception__time">2pm</p>
          <p className="reception__paragraph">
            The chapel doors shall graciously open at ten minutes to five
            o’clock in the afternoon, welcoming esteemed guests to take their
            seats. The ceremony shall commence forthwith at a quarter past five,
            with all due reverence and punctuality. For our cherished guests
            arriving from afar, conveyance shall be provided from St. James
            Chapel to the reception, ensuring a seamless and comfortable passage
            to the evening’s merriment.
          </p>
        </div>
        <a href="#" className="reception__anchor">
          <button className="reception__button">Map</button>
        </a>
      </div>
    </section>
  );
};

export default Reception;

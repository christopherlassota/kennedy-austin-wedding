import "./Reception.scss";

const Reception = () => {
  return (
    <section className="reception" id="reception">
      <div className="reception__title-box">
        <h3 className="reception__subtitle">Venue</h3>
        <h2 className="reception__title">Fairmont Palliser</h2>
      </div>
      <div className="reception__content">
        <div className="reception__image"></div>
        <h4 className="reception__address">
        Fairmont Palliser, 133 9 Ave SW, Calgary, AB T2P 2M3, Canada        </h4>
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
        <a
          href="https://www.google.com/maps/place/Fairmont+Palliser/@51.0443336,-114.0649606,17z/data=!4m9!3m8!1s0x53716ffd78047d7b:0x49555d612c5cb685!5m2!4m1!1i2!8m2!3d51.0443336!4d-114.0649606!16zL20vMDZsaG10?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
          className="reception__anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="reception__button">Map</button>
        </a>
      </div>
    </section>
  );
};

export default Reception;

import './Ceremony.scss'

const Ceremony = () => {
    return (
        <section className="ceremony">
          <div className="ceremony__title-box">
            <h3 className="ceremony__subtitle">Venue</h3>
            <h2 className="ceremony__title">Fairmont Palliser</h2>
          </div>
          <div className="ceremony__content">
            <div className="ceremony__image"></div>
            <h4 className="ceremony__address">
              133 9 Ave SW, Calgary, AB T2P 2M3, Canada
            </h4>
            <div className="ceremony__details">
              <p className="ceremony__time">2pm</p>
              <p className="ceremony__paragraph">
                The chapel doors shall graciously open at ten minutes to five
                o’clock in the afternoon, welcoming esteemed guests to take their
                seats. The ceremony shall commence forthwith at a quarter past five,
                with all due reverence and punctuality. For our cherished guests
                arriving from afar, conveyance shall be provided from St. James
                Chapel to the ceremony, ensuring a seamless and comfortable passage
                to the evening’s merriment.
              </p>
            </div>
            <a href="#" className="ceremony__anchor">
              <button className="ceremony__button">Map</button>
            </a>
          </div>
        </section>
      );
}

export default Ceremony;
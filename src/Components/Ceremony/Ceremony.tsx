import './Ceremony.scss'

const Ceremony = () => {
    return (
        <section className="ceremony" id="ceremony">
          <div className="ceremony__title-box">
            <h3 className="ceremony__subtitle">Venue</h3>
            <h2 className="ceremony__title">St. Mary's Cathe</h2>
          </div>
          <div className="ceremony__content">
            <div className="ceremony__image"></div>
            <h4 className="ceremony__address">
            St. Mary's Cathedral, 219 18 Ave SW, Calgary, AB T2S 0C2, Canada
            </h4>
            <div className="ceremony__details">
              <p className="ceremony__time">5pm</p>
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
            <a
              href="https://www.google.com/maps/place/St.+Mary's+Cathedral/@51.0367937,-114.0661322,17z/data=!3m1!4b1!4m6!3m5!1s0x5371701b6df8b8a1:0xcefba7fc795b726b!8m2!3d51.0367937!4d-114.0661322!16s%2Fm%2F0ds0mjh?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
              className="ceremony__anchor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ceremony__button">Map</button>
            </a>
          </div>
        </section>
      );
}

export default Ceremony;
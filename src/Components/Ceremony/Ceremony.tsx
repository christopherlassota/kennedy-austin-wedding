import './Ceremony.scss'

const Ceremony = () => {
    return (
        <section className="ceremony" id="ceremony">
          <div className="ceremony__title-box">
            <h3 className="ceremony__subtitle">Venue</h3>
            <h2 className="ceremony__title">St. James Chapel</h2>
          </div>
          <div className="ceremony__content">
            <div className="ceremony__image"></div>
            <h4 className="ceremony__address">
            5504 20 St SW, Calgary, AB T3E 1R2, Canada
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
            <a
              href="https://www.google.com/maps/place/St+James+Catholic+Church/@51.0047621,-114.1788263,12z/data=!4m10!1m2!2m1!1sst.james+chapel+calgary!3m6!1s0x537171bbaee70b13:0x5f297ed5ed4bad53!8m2!3d51.0047621!4d-114.1087885!15sChdzdC5qYW1lcyBjaGFwZWwgY2FsZ2FyeVoZIhdzdCBqYW1lcyBjaGFwZWwgY2FsZ2FyeZIBD2NhdGhvbGljX2NodXJjaJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSU01UUkVkR2RuUlJBQuABAPoBBAgAEEI!16s%2Fg%2F1hc20y2tk?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
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
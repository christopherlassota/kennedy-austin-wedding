import './Ceremony.scss'

const Ceremony = () => {
    return (
        <section className="ceremony" id="ceremony">
          <div className="ceremony__title-box">
            <h2 className="ceremony__title">Ceremony</h2>
          </div>
          <div className="ceremony__content">
            <div className="ceremony__image"></div>
            <h3 className="ceremony__venue">St. Mary's Cathedral</h3>
            <p className="ceremony__address">
            5504 20 St SW, Calgary, Alberta
            </p>
            <div className="ceremony__details">
              <p className="ceremony__time">2pm</p>
              <p className="ceremony__paragraph">
              We joyfully request the honour of your presence at the celebration of our marriage on Saturday, the thirtieth of August, two thousand twenty-five, at two o’clock in the afternoon at St. Mary’s Cathedral.
              </p>
              <p className="ceremony__paragraph">
              The ceremony will be a Catholic Mass and is expected to last approximately one hour. We kindly ask that guests arrive fifteen to thirty minutes prior to the start time to allow for seating and to ensure a prompt beginning.
              </p>
            </div>
            <a href="https://www.google.com/maps/place/St+James+Catholic+Church/@51.0047621,-114.1788263,12z/data=!4m10!1m2!2m1!1sst.james+chapel+calgary!3m6!1s0x537171bbaee70b13:0x5f297ed5ed4bad53!8m2!3d51.0047621!4d-114.1087885!15sChdzdC5qYW1lcyBjaGFwZWwgY2FsZ2FyeVoZIhdzdCBqYW1lcyBjaGFwZWwgY2FsZ2FyeZIBD2NhdGhvbGljX2NodXJjaJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSU01UUkVkR2RuUlJBQuABAPoBBAgAEEI!16s%2Fg%2F1hc20y2tk?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" className="ceremony__anchor">
              <button className="ceremony__button">Map</button>
            </a>
          </div>
        </section>
      );
}

export default Ceremony;
import "./Ceremony.scss";

const Ceremony = () => {
  return (
    <section className="ceremony" id="ceremony">
      <div className="ceremony__title-box">
        <h2 className="ceremony__title">Ceremony</h2>
      </div>
      <div className="ceremony__content">
        <div className="ceremony__image"></div>
        <h3 className="ceremony__venue">St. Mary's Cathedral</h3>
        <p className="ceremony__address">219 18 Avenue Southwest</p>
        <p className="ceremony__address">Calgary, Alberta</p>
        <div className="ceremony__details">
          <p className="ceremony__time">2pm</p>
          <p className="ceremony__paragraph">
            We joyfully request the honour of your presence at the celebration
            of our marriage on Saturday, the thirtieth of August, two thousand
            twenty-five, at two o’clock in the afternoon at St. Mary’s
            Cathedral.
          </p>
          <p className="ceremony__paragraph">
            The ceremony will be a Catholic Mass and is expected to last
            approximately one hour. We kindly ask that guests arrive fifteen to
            thirty minutes prior to the start time to allow for seating and to
            ensure a prompt beginning.
          </p>
        </div>
        <a
          href="https://www.google.com/maps/place/St.+Mary's+Cathedral/@51.036797,-114.0710031,17z/data=!3m1!4b1!4m6!3m5!1s0x5371701b6df8b8a1:0xcefba7fc795b726b!8m2!3d51.0367937!4d-114.0661322!16s%2Fm%2F0ds0mjh?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D"
          className="ceremony__anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ceremony__button">Map</button>
        </a>
      </div>
    </section>
  );
};

export default Ceremony;

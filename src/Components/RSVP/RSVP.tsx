import "./RSVP.scss";

const RSVP = () => {
  return (
    <section className="rsvp">
      <h2 className="rsvp__title">RSVP</h2>
      <p className="rsvp__description">
        Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut
        in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu
        euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
        adipiscing sem.
      </p>
      <form className="rsvp__form">
        <div className="rsvp__group">
        <div className="rsvp__field">
          <label htmlFor="" className="rsvp__label">
            First Name
          </label>
          <input type="text" className="rsvp__input" />
        </div>
        <div className="rsvp__field">
          <label htmlFor="" className="rsvp__label">
            Last Name
          </label>
          <input type="text" className="rsvp__input" />
        </div>
        </div>
        <div className="rsvp__field">
          <label htmlFor="" className="rsvp__label">
            Email Address
          </label>
          <input type="text" className="rsvp__input" />
        </div>
        <fieldset className="rsvp__fieldset">
          <legend className="rsvp__legend">Attendance</legend>
            {/* Radio Option 1 */}
            <div className="rsvp__option">
              <input
                type="radio"
                id="rsvpAccept"
                name="rsvpAttendance"
                className="rsvp__radio"
                value="accept"
              />
              <label htmlFor="rsvpAccept" className="rsvp__label">
                <span className="rsvp__text">Accept with pleasure</span>
              </label>
            </div>
            {/* Radio Option 2 */}
            <div className="rsvp__option">
              <input
                type="radio"
                id="rsvpDecline"
                name="rsvpAttendance"
                className="rsvp__radio"
                value="decline"
              />
              <label htmlFor="rsvpDecline" className="rsvp__label">
                <span className="rsvp__text">Decline with regret</span>
              </label>
            </div>
        </fieldset>
        <div className="rsvp__field">
          <label htmlFor="" className="rsvp__label">
            Dietary Restrictions
          </label>
          <input type="text" className="rsvp__input" />
        </div>
        <button className="rsvp__button">Submit</button>
      </form>
    </section>
  );
};

export default RSVP;

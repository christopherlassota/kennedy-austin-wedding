import "./Itinerary.scss";

const Itinerary = () => {
  return (
    <section className="itinerary" id="itinerary">
      <h2 className="itinerary__title">Itinerary</h2>
      <ul className="itinerary__date-list">
        <li className="itinerary__dates itinerary__dates--selected">
          Friday, July 11
        </li>
        <li className="itinerary__dates">Saturday, July 12</li>
        <li className="itinerary__dates">Sunday, July 13</li>
      </ul>
      <ul className="itinerary__date-selector">
        <li className="itinerary__selection">Previous</li>
        <li className="itinerary__selection itinerary__selection--selected ">
          Friday, July 11
        </li>
        <li className="itinerary__selection">Next</li>
      </ul>
      <article className="itinerary__schedule">
        <div className="itinerary__timeslot">
          <h4 className="itinerary__time">10am</h4>
          <ul className="itinerary__event-list">
            <li className="itinerary__event">
              <h3 className="itinerary__event-title">Item Title</h3>
              <p className="itinerary__description">
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </p>
            </li>
          </ul>
        </div>
        <div className="itinerary__timeslot">
          <h4 className="itinerary__time">12pm</h4>
          <ul className="itinerary__event-list">
            <li className="itinerary__event">
              <h3 className="itinerary__event-title">Item Title</h3>
              <p className="itinerary__description">
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </p>
            </li>
            <li className="itinerary__event">
              <h3 className="itinerary__event-title">Item Title</h3>
              <p className="itinerary__description">
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Itinerary;

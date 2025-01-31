import { useState } from "react";
import axios from "axios";
import "./RSVP.scss";

const RSVP = () => {
  const [rsvpValues, setRsvpValues] = useState({
    guest_firstname: "",
    guest_lastname: "",
    guest_email: "",
    rsvp: "",
    dietary_restrictions: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setRsvpValues({
      ...rsvpValues,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return (
      rsvpValues.guest_firstname.trim() !== "" &&
      rsvpValues.guest_lastname.trim() !== "" &&
      rsvpValues.rsvp.trim() !== ""
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let response = await axios.put(
        "http://localhost:8080/guestlist",
        rsvpValues
      );
      console.log("RSVP submitted successfully", response.data);
      setRsvpValues({
        guest_firstname: "",
        guest_lastname: "",
        guest_email: "",
        rsvp: "",
        dietary_restrictions: "",
      });
    } catch (error) {
      console.log("Error submitting RSVP", error);
    }
  };

  return (
    <section className="rsvp" id="rsvp">
      <h2 className="rsvp__title">RSVP</h2>
      <p className="rsvp__description">
        Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut
        in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu
        euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
        adipiscing sem.
      </p>
      <form onSubmit={handleSubmit} className="rsvp__form">
        <div className="rsvp__group">
          <div className="rsvp__field">
            <label htmlFor="" className="rsvp__label">
              First Name
            </label>
            <input
              type="text"
              id="guest_firstname"
              name="guest_firstname"
              className="rsvp__input"
              value={rsvpValues.guest_firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className="rsvp__field">
            <label htmlFor="" className="rsvp__label">
              Last Name
            </label>
            <input
              type="text"
              id="guest_lastname"
              name="guest_lastname"
              value={rsvpValues.guest_lastname}
              onChange={handleInputChange}
              className="rsvp__input"
            />
          </div>
        </div>
        <div className="rsvp__field">
          <label htmlFor="" className="rsvp__label">
            Email Address
          </label>
          <input
            type="text"
            id="guest_email"
            name="guest_email"
            value={rsvpValues.guest_email}
            onChange={handleInputChange}
            className="rsvp__input"
          />
        </div>
        <fieldset className="rsvp__fieldset">
          <legend className="rsvp__legend">Attendance</legend>
          {/* Radio Option 1 */}
            <label htmlFor="rsvpAccept" className="rsvp__option">
            <input
              type="radio"
              id="rsvpAccept"
              name="rsvp"
              className="rsvp__radio"
              value="accept"
              checked={rsvpValues.rsvp === "accept"}
              onChange={handleInputChange}
            />
              <span className="rsvp__text">Accept with pleasure</span>
            </label>
          {/* Radio Option 2 */}
          <label htmlFor="rsvpDecline" className="rsvp__option">
            <input
              type="radio"
              id="rsvpDecline"
              name="rsvp"
              className="rsvp__radio"
              value="decline"
              checked={rsvpValues.rsvp === "decline"}
              onChange={handleInputChange}
            />
              <span className="rsvp__text">Decline with regret</span>
            </label>
        </fieldset>
        <div className="rsvp__field">
          <label htmlFor="" className="rsvp__label">
            Dietary Restrictions
          </label>
          <input
            type="text"
            name="dietary_restrictions"
            id="dietary_restrictions"
            value={rsvpValues.dietary_restrictions}
            onChange={handleInputChange}
            className="rsvp__input"
          />
        </div>
        <button disabled={!isFormValid()} className="rsvp__button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default RSVP;

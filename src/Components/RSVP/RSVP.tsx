import { useState } from "react";
import axios from "axios";
import "./RSVP.scss";

const RSVP = () => {
  const [rsvpValues, setRsvpValues] = useState({
    guest_firstname: "",
    guest_lastname: "",
    contact_email: "",
    rsvp: "",
    dietary_restrictions: "",
  });

  const [errors, setErrors] = useState({
    guest_firstname: "",
    guest_lastname: "",
    contact_email: "",
    rsvp: "",
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

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      guest_firstname: "",
      guest_lastname: "",
      contact_email: "",
      rsvp: "",
    };
    if (!rsvpValues.guest_firstname.trim()) {
      newErrors.guest_firstname = "First Name is Required *";
      isValid = false;
    }
    if (!rsvpValues.guest_lastname.trim()) {
      newErrors.guest_lastname = "Last Name is Required *";
      isValid = false;
    }
    if (!rsvpValues.contact_email.trim()) {
      newErrors.contact_email = "Email Address is Required *";
      isValid = false;
    }
    if (!rsvpValues.rsvp.trim()) {
      newErrors.rsvp = "Please Select an Option *";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    toggleConfirmationModal();
    try {
      let response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/rsvp`,
        rsvpValues
      );
      console.log("RSVP submitted successfully", response.data);
      setRsvpValues({
        guest_firstname: "",
        guest_lastname: "",
        contact_email: "",
        rsvp: "",
        dietary_restrictions: "",
      });
      setErrors({
        guest_firstname: "",
        guest_lastname: "",
        contact_email: "",
        rsvp: "",
      });
    } catch (error) {
      console.log("Error submitting RSVP", error);
    }
  };

  const [confirmationModal, setConfirmationModal] = useState(false);
  const [renderConfirmation, setRenderConfirmation] = useState(false);

  const toggleConfirmationModal = () => {
    if (confirmationModal) {
      setConfirmationModal(false); // Start closing animation
      setTimeout(() => setRenderConfirmation(false), 300); // Hide after animation completes
    } else {
      setRenderConfirmation(true); // Render first
      setTimeout(() => setConfirmationModal(true), 10); // Small delay to trigger transition
    }
  };

  return (
    <section className="rsvp" id="rsvp">
      <h2 className="rsvp__title">RSVP</h2>
      <p className="rsvp__description">
        Your esteemed response is graciously requested no later than Wednesday,
        the thirtieth of July, two thousand and twenty-five.
      </p>
      <div className="rsvp__render">
        <form onSubmit={handleSubmit} className="rsvp__form">
          <p className="rsvp__instructions">
            PLEASE RESPOND FOR EACH GUEST INVITED
          </p>
          <div className="rsvp__group">
            <div className="rsvp__field">
              <label htmlFor="guest_firstname" className="rsvp__label">
                {errors.guest_firstname ? (
                  <p className="rsvp__error">{errors.guest_firstname}</p>
                ) : (
                  <p>
                    First Name <span className="rsvp__span">*</span>
                  </p>
                )}
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
              <label htmlFor="guest_lastname" className="rsvp__label">
                {errors.guest_lastname ? (
                  <p className="rsvp__error">{errors.guest_lastname}</p>
                ) : (
                  <p>
                    Last Name <span className="rsvp__span">*</span>
                  </p>
                )}
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
            <label htmlFor="contact_email" className="rsvp__label">
              {errors.contact_email ? (
                <p className="rsvp__error">{errors.contact_email}</p>
              ) : (
                <p>
                  Email Address <span className="rsvp__span">*</span>
                </p>
              )}
            </label>
            <input
              type="text"
              id="contact_email"
              name="contact_email"
              value={rsvpValues.contact_email}
              onChange={handleInputChange}
              className="rsvp__input"
            />
          </div>
          <fieldset className="rsvp__fieldset">
            <legend className="rsvp__legend">
              {errors.rsvp ? (
                <p className="rsvp__error">{errors.rsvp}</p>
              ) : (
                <p>
                  Attendance <span className="rsvp__span">*</span>
                </p>
              )}
            </legend>
            {/* Radio Option 1 */}
            <label htmlFor="rsvpAccept" className="rsvp__option">
              <input
                type="radio"
                id="rsvpAccept"
                name="rsvp"
                className="rsvp__radio"
                value="confirmed"
                checked={rsvpValues.rsvp === "confirmed"}
                onChange={handleInputChange}
              />
              <span className="rsvp__text">Accepts with pleasure</span>
            </label>
            {/* Radio Option 2 */}
            <label htmlFor="rsvpDecline" className="rsvp__option">
              <input
                type="radio"
                id="rsvpDecline"
                name="rsvp"
                className="rsvp__radio"
                value="declined"
                checked={rsvpValues.rsvp === "declined"}
                onChange={handleInputChange}
              />
              <span className="rsvp__text">Declines with regret</span>
            </label>
          </fieldset>
          <div className="rsvp__field">
            <label htmlFor="dietary_restrictions" className="rsvp__label">
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
          <button className="rsvp__button">Submit</button>
        </form>
        {renderConfirmation && (
          <article
            className={`rsvp__confirmation ${
              confirmationModal ? "rsvp__confirmation--open" : ""
            }`}
            style={{ display: renderConfirmation ? "flex" : "flex" }}
          >
            <div className="thank-you">
              <h2 className="thank-you__title">Thank You</h2>
              <p className="thank-you__message">
                YOUR RSVP HAS BEEN SUCCESSFULLY RECIEVED
              </p>
              <p className="thank-you__message">
                We deeply appreciate your response and eagerly anticipate the
                joy of your presence as we celebrate this momentous occasion
                together.
              </p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default RSVP;

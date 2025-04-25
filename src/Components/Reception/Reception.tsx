import "./Reception.scss";

const Reception = () => {
  return (
    <section className="reception" id="reception">
      <div className="reception__title-box">
        <h2 className="reception__title">Reception</h2>
      </div>
      <div className="reception__content">
        <div className="reception__image"></div>
        <h3 className="ceremony__venue">Fairmont Palliser Hotel</h3>
        <p className="reception__address">
          133 9 Avenue Southwest
        </p>
        <p className="reception__address">Calgary, Alberta</p>
        <div className="reception__details">
        <h3 className="ceremony__venue">Banff Room</h3>
          <p className="reception__time">5pm</p>
          <p className="reception__paragraph">
          In honour of our union, we kindly invite you to join us for an evening of celebration at the Fairmont Palliser Hotel, in the Banff Room, following the ceremony.
          </p>
          <p className="reception__paragraph">
          The festivities will begin with a cocktail hour at five o’clock, followed by a formal dinner at six o’clock, and dancing as the celebration continues into the evening.
          </p>
        </div>
        <a href="https://www.google.com/maps/place/Fairmont+Palliser/@51.0443336,-114.0649606,17z/data=!4m9!3m8!1s0x53716ffd78047d7b:0x49555d612c5cb685!5m2!4m1!1i2!8m2!3d51.0443336!4d-114.0649606!16zL20vMDZsaG10?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" className="reception__anchor" target="_blank"
            rel="noopener noreferrer">
          <button className="reception__button">Map</button>
        </a>
      </div>
    </section>
  );
};

export default Reception;

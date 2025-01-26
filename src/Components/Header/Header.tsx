import './Header.scss';

const Header = () => {
    return (
    <section className="header">
        <div className="header__menu"></div>
        <div className="header__logo">
            <h2 className="header__logo-text">KA</h2>
        </div>
        <button className="header__rsvp">RSVP</button>
        <ul className="header__nav">
            <li className="header__nav-item">Home</li>
            <li className="header__nav-item">Our Story</li>
            <li className="header__nav-item">Venue</li>
            <li className="header__nav-item">Itinierary</li>
            <li className="header__nav-item">Registry</li>
            <li className="header__nav-item header__nav-item--highlight">RSVP</li>
        </ul>
    </section>
)
}

export default Header;
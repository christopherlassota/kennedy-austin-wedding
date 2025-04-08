import './DressCode.scss'

const DressCode = () => {
  return (
    <section className="dresscode" id="dresscode">
        <div className="dresscode__title-box">
            <h2 className="dresscode__title">
                Dress Code
            </h2>
            <p className="dresscode__subtitle">
                <span className='dresscode__span'>Black tie</span> is the chosen dress code for this special occasion, setting the tone for an evening of elegance and sophistication.
            </p>
        </div>
        <div className="dresscode__content">
                <p className="dresscode__list-title">Men</p>
            <ul className="dresscode__list">
                <li className="dresscode__item">A tailored tuxedo or dinner jacket with satin lapels</li>
                <li className="dresscode__item">A crisp white dress shirt</li>
                <li className="dresscode__item">A classic black bow tie</li>
                <li className="dresscode__item">Black dress socks and polished formal shoes</li>
                <li className="dresscode__item">A cummberbun or evening waistcoat for a refined touch</li>
            </ul>
                <p className="dresscode__list-title">Women</p>
            <ul className="dresscode__list">
                <li className="dresscode__item">A floor length evening gown in luxurious fabrics such as silk, velvet, satin or lace</li>
                <li className="dresscode__item">Elegant heels or formal flats</li>
                <li className="dresscode__item">Tasteful accesories, including fine jewelery, a clutch, and an optional wrap or shaw</li>
            </ul>
        </div>
        <div className="dresscode__learnmore">
            <div className="dresscode__image"></div>
            <div className="dresscode__learnmore-right">
            <p className="dresscode__paragraph">Traditionally, a black-tie dress code denotes a formal evening occasion, where men are meant to wear tuxedos and women, floor-length gowns. "The atmosphere is a more formal vibe," says Elaine Swann, an etiquette expert. "When a person calls for black tie, that is the standard they are attempting to create for the attendees."</p>
            <a href="https://www.marthastewart.com/7912329/what-it-really-means-to-plan-black-tie-wedding" className="dresscode__anchor"               target="_blank"
              rel="noopener noreferrer"
>
                <button className="dresscode__button">Learn More</button>
            </a>
            </div>
        </div>
    </section>
  )
}

export default DressCode;
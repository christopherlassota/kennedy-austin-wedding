import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <article className="hero__invitation">
                <h1 className="hero__title">Kennedy and Austin</h1>
                <h3 className="hero__date">May 19, 2025 - Calgary Alberta</h3>
            </article>
            <button className="hero__rsvp">RSVP</button>
        </section>
    )
}

export default Hero
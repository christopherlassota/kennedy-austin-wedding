import ImageSlider from "../ImageSlider/ImageSlider";
import "./Story.scss";

const Story = () => {
  return (
    <section className="story" id="story">
      <div className="story__centerflower">
      </div>
      <div className="story__cornerflowers">
      </div>
      <article className="story__content">
        <h2 className="story__title">Our Story</h2>
        <article className="story__text">
          <p className="story__paragraph">
          Ours is a love that has grown gracefully and devotedly since our earliest years together. We first met in the eighth grade, and by tenth grade, our friendship had blossomed into something more. We have been together since January 5, 2015, and over the past decade, our bond has deepened through shared milestones, enduring love, and unwavering support.
          </p>
          <p className="story__paragraph">
          We graduated high school side by side and went on to pursue our post-secondary studies at the University of Calgary, where we both completed our degrees. Along the way, we have stood by each other through life’s challenges — including moments of personal loss, health struggles, and uncertainty — always with grace and resilience.
          </p>
          <p className="story__paragraph">
          Together, we’ve grown in a shared sense of purpose and faith, drawing strength from values that continue to shape our relationship and future. As we look ahead, we are filled with joy and anticipation for the life we will build — one rooted in love, faith, and family. We dream of creating a home filled with warmth, and one day, welcoming children into our lives.
          </p>
          <p className="story__paragraph">
          We are so grateful to celebrate this next chapter with those dearest to us.
          </p>
        </article>
        <ImageSlider />
      </article>
    </section>
  );
};

export default Story;

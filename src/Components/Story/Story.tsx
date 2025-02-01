import CenterFlower from "../../Iconography/CenterFlower/CenterFlower";
import CornerFlowerLeft from "../../Iconography/CornerFlowers/CornerFlowerLeft";
import CornerFlowerRight from "../../Iconography/CornerFlowers/CornerFlowerRight";
import ImageSlider from "../ImageSlider/ImageSlider";
import "./Story.scss";

const Story = () => {
  return (
    <section className="story" id="story">
      <div className="story__centerflower">
        <CenterFlower />
      </div>
      <div className="story__cornerflowers">
        <CornerFlowerLeft />
        <CornerFlowerRight />
      </div>
      <article className="story__content">
        <h2 className="story__title">Our Story</h2>
        <article className="story__text">
          <p className="story__paragraph">
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
            aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
            quam diam felis, fringilla varius. Quis purus nisl orci eu,
            ultrices.
          </p>
          <p className="story__paragraph">
            Purus pretium egestas ultricies tempus sit elit. Maecenas
            pellentesque sit eros vitae. Maecenas suspendisse tincidunt
            ullamcorper justo neque quis et, laoreet. Vitae lacus, aliquet lorem
            mauris, sit dolor sodales. Nullam quam quis lorem dui tristique
            massa enim.
          </p>
          <p className="story__paragraph">
            Faucibus sed egestas mollis vivamus et sed sed.
          </p>
        </article>
        <ImageSlider />
      </article>
    </section>
  );
};

export default Story;

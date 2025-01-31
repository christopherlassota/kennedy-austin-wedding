import CenterFlower from "../../Iconography/CenterFlower/CenterFlower";
import CornerFlowerBottomLeft from "../../Iconography/CornerFlowers/CornerFlowerBottomLeft";
import CornerFlowerBottomRight from "../../Iconography/CornerFlowers/CornerFlowerBottomRight";
import "./BottomDecoration.scss";

const BottomDecoration = () => {
  return (
    <section className="bottomdecoration">
      <div className="bottomdecoration__centerflower">
        <div className="bottomdecoration__flowerpot">
          <CenterFlower />
        </div>
        <p className="bottomdecoration__signature">
          Website by Christopher Lassota
        </p>
      </div>
      <div className="bottomdecoration__cornerflowers">
        <CornerFlowerBottomLeft />
        <p className="footer__signature">Website by Christopher Lassota</p>
        <CornerFlowerBottomRight />
      </div>
    </section>
  );
};

export default BottomDecoration;

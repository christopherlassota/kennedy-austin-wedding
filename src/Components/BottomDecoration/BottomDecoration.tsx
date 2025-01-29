import CenterFlower from '../../Iconography/CenterFlower/CenterFlower';
import CornerFlowerBottomLeft from '../../Iconography/CornerFlowers/CornerFlowerBottomLeft';
import CornerFlowerBottomRight from '../../Iconography/CornerFlowers/CornerFlowerBottomRight';
import './BottomDecoration.scss'

const BottomDecoration = () => {
    return (
        <section className="bottomdecoration">
        <div className="bottomdecoration__centerflower">
          <CenterFlower />
        </div>
        <div className="bottomdecoration__cornerflowers">
          <CornerFlowerBottomLeft />
          <CornerFlowerBottomRight />
        </div>
      </section>
    )
}

export default BottomDecoration;
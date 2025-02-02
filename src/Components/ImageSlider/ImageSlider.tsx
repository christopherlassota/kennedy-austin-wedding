import "./ImageSlider.scss";
import image1 from "../../assets/images/sandy-millar-8vaQKYnawHw-unsplash.jpg";
import image3 from "../../assets/images/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg";
import image4 from "../../assets/images/photos-by-lanty-O38Id_cyV4M-unsplash.jpg";
import image5 from "../../assets/images/samantha-gades-x40Q9jrEVT0-unsplash.jpg";
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useState } from "react";

const ImageSlider = () => {
  const imagesArray = [image1, image3, image4, image5];
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    if (imageIndex === imagesArray.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const prevImage = () => {
    if (imageIndex === 0) {
      setImageIndex(imagesArray.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <section className="imageslider">
      <div className="imageslider__container">
        {imagesArray.map((url, index) => (
          <img
            key={index}
            src={url}
            className="imageslider__image"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button className="imageslider__button imageslider__button--left" onClick={prevImage}>
        <ChevronLeft className="imageslider__chevron" />
      </button>
      <button className="imageslider__button imageslider__button--right" onClick={nextImage}>
        <ChevronRight className="imageslider__chevron" />
      </button>
    </section>
  );
};

export default ImageSlider;

import "./ImageSlider.scss";
import image1 from "/assets/images/sandy-millar-8vaQKYnawHw-unsplash.jpg";
import image3 from "/assets/images/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg";
import image4 from "/assets/images/photos-by-lanty-O38Id_cyV4M-unsplash.jpg";
import image5 from "/assets/images/samantha-gades-x40Q9jrEVT0-unsplash.jpg";
import { ChevronRight, ChevronLeft, Circle} from "lucide-react";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const imagesArray = [image1, image3, image4, image5];
  const [imageIndex, setImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId: number;

    if (isAutoPlaying) {
      intervalId = window.setInterval(() => {
        nextImage();
      }, 5000); // 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [imageIndex, isAutoPlaying]);

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

  // Pause auto-play when user interacts with controls
  const handleManualControl = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
  };

  useEffect(() => {
    if (!isAutoPlaying) {
      const timeoutId = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000); // Resume auto-play after 10 seconds of inactivity

      return () => clearTimeout(timeoutId);
    }
  }, [isAutoPlaying]);

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
      <button
        className="imageslider__button imageslider__button--left"
        onClick={() => handleManualControl(prevImage)}
      >
        <ChevronLeft className="imageslider__chevron" />
      </button>
      <button
        className="imageslider__button imageslider__button--right"
        onClick={() => handleManualControl(nextImage)}
      >
        <ChevronRight className="imageslider__chevron" />
      </button>
      <div className="imageslider__tracker">
        {imagesArray.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              handleManualControl(() => setImageIndex(index));
            }}
            className="imageslider__selection"
          >
            <Circle className={`imageslider__circle ${index === imageIndex ? 'imageslider__circle--current' : ''}`}/>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;

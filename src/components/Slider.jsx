import React, { useState, useEffect } from 'react';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "//icms-image.slatic.net/images/ims-web/8edba14e-ad2c-48a7-8913-9166c6d07f36.jpg_1200x1200.jpg",
    "//icms-image.slatic.net/images/ims-web/e3d7e325-bef4-4d9b-a9f5-6bcb6a37eba1.png",
    "//icms-image.slatic.net/images/ims-web/c970ecca-f1dd-4ded-af3a-6bdbc569dd05.jpg",
    "//icms-image.slatic.net/images/ims-web/6aab5f5c-3474-4531-9aae-d502bb695f14.jpg",
    "//icms-image.slatic.net/images/ims-web/9efe6670-d083-40a7-86fe-5eb05b7272b0.jpg",
  ];

  useEffect(() => {
    // Automatically advance to the next slide every 2 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Wrap around to the first slide when at the end
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      // Go to the last slide when at the beginning
      setCurrentSlide(images.length - 1);
    }
  };

  return (
    <div className="relative">
      <div className="relative h-56 overflow-hidden  rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={` ${
              currentSlide === index ? 'block opacity-100' : 'hidden opacity-0'
            } transition-all duration-700 ease-linear`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block h-[100%] md:h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-10 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-[#27282b]' : 'bg-gray-300'
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>


    </div>
  );
}

export default Slider;

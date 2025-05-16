import React from "react";
import Slider from "react-slick";

const FeatureSlider = ({ features }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="mb-6 sm:mb-10 px-4">
      <Slider {...settings}>
        {features.map((feature) => (
          <div key={feature._id}>
            <img
              src={feature.image}
              alt="Feature"
              className="w-full h-52 sm:h-72 md:h-80 object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSlider;

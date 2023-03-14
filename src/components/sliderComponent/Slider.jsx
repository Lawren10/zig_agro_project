import React, { useEffect, useState } from "react";
import {
  SliderSection,
  SliderIMage,
} from "../../styledComponents/globalComponents";

let images = ["main.jpg", "slider1.png", "slider2.jpg"];

const Slider = ({ children }) => {
  let [sliderImage, setSliderImage] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (sliderImage === 2) {
        setSliderImage(0);
      } else {
        setSliderImage(sliderImage + 1);
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [sliderImage]);

  return (
    <>
      <SliderSection>
        <SliderIMage src={`/images/${images[sliderImage]}`} />
        {children}
      </SliderSection>
    </>
  );
};

export default Slider;

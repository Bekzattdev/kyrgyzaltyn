import back1 from "../../assets/golden1.jpg"
import back2 from "../../assets/golden2.jpg"
import back3 from "../../assets/golden3.avif"
import back4 from "../../assets/golden5.jpg"

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 15000, easing: (t) => t };

const Background =() => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">{back1}</div>
      <div className="keen-slider__slide number-slide2">{back2}</div>
      <div className="keen-slider__slide number-slide3">{back3}</div>
      <div className="keen-slider__slide number-slide4">{back4}</div>
    </div>
  );
};

export default Background;
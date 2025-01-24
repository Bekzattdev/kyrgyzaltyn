import scss from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { invest } from "../../routes/links";
import { Link } from "react-router-dom";
import ScrollAnimation from "../../ui/Animation/ScrollAnimation";
const Investment = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3.3,
      spacing: 15,
    },
  });
  return (
    <section id={scss.investPage}>
      <div className="container">
        <ScrollAnimation>
          <h1>Инвестиции</h1>
          <div className={scss.content}>
            <div ref={ref} className="keen-slider">
              {invest.map((item, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <Link to={item.link}>
                    <img src={item.title} alt="investment" />
                    <h3>{item.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Investment;

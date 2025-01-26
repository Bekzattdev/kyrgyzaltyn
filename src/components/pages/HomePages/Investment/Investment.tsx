import scss from "./Investment.module.scss"
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import ScrollAnimation from "../../../../ui/Animation/ScrollAnimation";
import { invest } from "../../../../routes/links";
const Investment = () => {

  return (
    <section id={scss.investPage}>
      <div className="container">
        <ScrollAnimation>
          <h1>Инвестиции</h1>
          <div className={scss.content}>
              {invest.map((item, idx) => (
                <div key={idx} className={scss.step}>
                  <Link to={item.link}>
                    <img src={item.title} alt="investment" />
                    <h3>{item.name}</h3>
                    <p>{item.descr}</p>
                  </Link>
                </div>
              ))}
          </div>  
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Investment;

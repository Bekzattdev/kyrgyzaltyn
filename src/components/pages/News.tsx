import scss from "./styles.module.scss";
import { newsArr } from "../../routes/links";
import { Link } from "react-router-dom";
import ScrollAnimation from "../../ui/Animation/ScrollAnimation";
const News = () => {
  return (
    <section id={scss.news}>
      <div className="container">
        <ScrollAnimation>
          <h1>Новости компании</h1>
          <div className={scss.content}>
            {newsArr.map((item, idx) => (
              <Link to={item.link} key={idx}>
                <div className={scss.block}>
                  <img src={item.title} alt="image" />
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default News;

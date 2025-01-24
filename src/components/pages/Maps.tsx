import ScrollAnimation from "../../ui/Animation/ScrollAnimation";
import scss from "./styles.module.scss";

const Maps = () => {
  return (
    <section id={scss.maps}>
      <div className="container">
        <ScrollAnimation>
        <h1>Наше местоположение</h1>
        <div className={scss.content}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56037.92933411218!2d74.59981294452548!3d42.865642743519516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1737695010315!5m2!1sru!2skg"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Maps;

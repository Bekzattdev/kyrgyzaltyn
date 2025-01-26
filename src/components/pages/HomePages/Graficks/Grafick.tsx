import GoldGrafick from "./GoldGrafick";
import SomGrafick from "./SomGrafick";
import scss from "./Graficks.module.scss"
const Grafick = () => {
  return (
    <section id={scss.grafick}>
        <div className="container">
            <div className={scss.content}>
                <div><SomGrafick/></div>
                <div><GoldGrafick/></div>
            </div>
        </div>
    </section>
  );
};

export default Grafick;
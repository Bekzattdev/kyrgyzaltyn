import ScrollAnimation from "../../ui/Animation/ScrollAnimation";
import scss from "./styles.module.scss";
const Achievements = () => {
  return (
    <section id={scss.achiev}>
      <div className={scss.gradientOverlay}></div>
      <div className="container">
        <ScrollAnimation>
          <div className={scss.content}>
            <h1>Наши достижения</h1>
            <hr />
            <div className={scss.archiText}>
              <div className={scss.info}>
                <p>
                  <b>Увеличение численности сотрудников:</b> По состоянию на 31
                  октября 2024 года в компании работало 3424 постоянных
                  сотрудника, <br /> из которых 3408 — граждане Кыргызской
                  Республики <br />
                  <b>Создание рабочих мест:</b> Компания поддержала проект по{" "}
                  <br />
                  созданию 3–5 швейных мини-цехов что обеспечило от 50 до 100
                  новых рабочих мест для женщин и молодежи.
                  <br />
                  <b>Социальные инициативы:</b> «Кумтор» оказала помощь
                  Нижне-Серафимовскому социальному учреждению для пожилых, решив
                  проблемы с водоснабжением и транспортом для пенсионеров.
                </p>
              </div>
              <div className={scss.counts}>
                <div className={scss.start}>
                  <div>
                    <h2>1992</h2>
                    <p>
                      {" "}
                      Kyryzaltyn <br />
                      работает уже 33 лет
                    </p>
                  </div>
                  <div>
                    <h2>100+ </h2>
                    <p>
                      Инжененров <br />и работников компании
                    </p>
                  </div>{" "}
                </div>
                <div className={scss.end}>
                  <div>
                    <h2>100+</h2>
                    <p>
                      {" "}
                      Выполненных <br />
                      проектов
                    </p>
                  </div>{" "}
                  <div>
                    <h2>12</h2>
                    <p>
                      {" "}
                      Международных
                      <br />
                      конференций
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={scss.achievPhoto}>
              <img
                src="https://data.vb.kg/image/big/2016-02-21_15-38-19_757497_w.jpg"
                alt="first"
              />
              <img
                src="https://scontent.ffru7-1.fna.fbcdn.net/v/t39.30808-6/462366963_1097880815676635_5221673133590125102_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rvWf2XIe0dgQ7kNvgEUjYOt&_nc_oc=Adg_ccNpJ6MiKqKlx2xNcTGMXzd545qn3VylM3JK7rI43Kbb5zBsX7Og03_v972dfNo&_nc_zt=23&_nc_ht=scontent.ffru7-1.fna&_nc_gid=AkLWm9isRIH24YR1YiFdP_x&oh=00_AYDXfFyVYAlTPfLpnrs8vn5H_OjxQTs3HALTePJnWkLJZQ&oe=6797CA67"
                alt="second"
              />
              <img
                src="https://scontent.ffru7-1.fna.fbcdn.net/v/t39.30808-6/298367513_3227695780836442_139699597977243364_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Hg2oNiWrq90Q7kNvgFeNGOU&_nc_oc=Adgn8CmBg-CGfgmZLdf3Rad9_XAV1j1rnT0TrWFyDd-5i9syvwm_xeg423wSQtcq-nE&_nc_zt=23&_nc_ht=scontent.ffru7-1.fna&_nc_gid=AFB27pi4TK0D7ndtQrwz2ib&oh=00_AYAdPNgfpZEfbGchmFDDiH_eGvijtTBZ-H9mUqMlXa7xQw&oe=6797E4A4"
                alt="three"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Achievements;

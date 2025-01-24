import scss from "./Layout.module.scss";
import logo from "../../assets/logoKyrgyz.png";
import HomePage from "../pages/HomePage";
import { headLinks } from "../../routes/links";
import { Link } from "react-router-dom";
import linkedin from "../../assets/lin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import mail from "../../assets/mail.svg";
import { useEffect, useState } from "react";

const Layout = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScroll(window.scrollY >= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id={scss.layoutSite}>
      <header
        className={
          headerScroll
            ? `${scss.headerScroll} ${scss.active}`
            : `${scss.headerScroll}`
        }
      >
        <div className="container">
          <div className={scss.content}>
            <img src={logo} alt="logo" />
            <nav>
              {headLinks.map((item, idx) => (
                <div key={idx} className={scss.routes}>
                  <Link to={item.link}>
                    <p>{item.name}</p>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main>
        <HomePage />
      </main>
      <footer id={scss.foot}>
        <div className={scss.content}>
          <div>
            <h4>О НАС</h4>
            <p>Команда</p>
            <p>Новости</p>
            <p>Карьера</p>
          </div>
          <div>
            <h4>ИНВЕСТОРАМ</h4>
            <p>Наши проекты</p>
            <p>Корпоративные презентации</p>
            <p>Законодательства</p>
          </div>
          <div>
            <h4>НАШИ УСЛУГИ</h4>
            <p>Геофизические услуги</p>
            <p>Геологические услуги</p>
            <p>Юридические услуги</p>
          </div>
          <div>
            <h4>КОНТАКТЫ</h4>
            <img src={mail} alt="mail" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        <h3>© 2025. ОАО «Кыргызалтын»</h3>
      </footer>
    </section>
  );
};

export default Layout;

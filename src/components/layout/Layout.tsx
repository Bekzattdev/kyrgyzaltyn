import scss from "./Layout.module.scss";
import logo from "../../assets/logoKyrgyz.png";
import linkedin from "../../assets/lin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import mail from "../../assets/mail.svg";
import { useEffect, useState } from "react";
import { headLinks } from "../../routes/links";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScroll(window.scrollY >= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id={scss.layoutSite}>
      <header>
        <div className="container">
          <div
            className={
              headerScroll
                ? `${scss.content} ${scss.active}`
                : `${scss.content}`
            }
          >
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <nav>
              {headLinks.map((item, idx) => (
                <div
                  key={idx}
                  className={scss.route_wrapper}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link to={item.link} className={scss.route_link}>
                    {item.name}
                  </Link>

                  {hoveredIndex === idx && item.subLinks.length > 0 && (
                    <div className={scss.modali}>
                      <ul>
                        {item.subLinks.map((subLink, subIdx) => (
                          <p key={subIdx}>{subLink}</p>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
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

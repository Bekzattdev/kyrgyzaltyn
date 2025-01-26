import { useEffect, useState } from "react";
import scss from "./Welcome.module.scss"
import vid from "../../../../assets/Market Loop Background Video - High Resolution.mp4"
import rus from "../../.././../assets/rus.png";
import usd from "../../.././../assets/usd.png";
import chy from "../../.././../assets/cny.png";
import kzt from "../../.././../assets/kzt.png";
import eur from "../../.././../assets/eur.png";

type Tdata = {
  flag: string;
  currency: string;
  rateYesterday: number;
  rateToday: number;
};
const Welcome = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchRates = () => {
      const data: Tdata[] = [
        {
          flag: usd,
          currency: "USD",
          rateYesterday: 87.45,
          rateToday: 87.4483,
        },
        {
          flag: eur,
          currency: "EUR",
          rateYesterday: 91.1535,
          rateToday: 90.8938,
        },
        {
          flag: rus,
          currency: "RUB",
          rateYesterday: 0.8807,
          rateToday: 0.8862,
        },
        {
          flag: kzt,
          currency: "KZT",
          rateYesterday: 0.1678,
          rateToday: 0.1674,
        },
        {
          flag: chy,
          currency: "CNY",
          rateYesterday: 12.0198,
          rateToday: 11.9988,
        },
      ];
      setRates(data);
    };

    fetchRates();
  }, []);

  const getDirection = (yesterday: number, today: number) => {
    if (today > yesterday) return "up";
    if (today < yesterday) return "down";
    return "neutral";
  };
  return (
    <section id={scss.welcomePage}>
      <div className={scss.content}>
        <video
          autoPlay={true}
          muted
          controls={0}
          playsinline
          loop
          type="video/mp4"
          src={vid}
        ></video>
        <div className={scss.wellText}>
          <div className={scss.text}>
            <h1>Кыргызалтын</h1>
            <p>
              Крупнейшее отечественное предприятие Кыргызской Республики,
              специализирующееся на освоении месторождений золота, играет
              ключевую роль в развитии экономики страны. Компания обеспечивает
              значительный вклад в национальный ВВП, создаёт рабочие места и
              привлекает инвестиции.
            </p>
            <button>Свяжитесь и нами</button>
          </div>
          <div className={scss.currencyTable}>
            <h2>Курс валют</h2>
            <div className={scss.dates}>
              <span>с 23.01.2025</span>
              <span>по 24.01.2025</span>
            </div>
            <div className={scss.curs}>
              {rates.map(({ flag, currency, rateYesterday, rateToday }) => (
                <div key={currency}>
                  <img src={flag} alt="flag" />
                  <span>{currency}</span>
                  <span>{rateYesterday.toFixed(4)}</span>
                  <span
                    className={scss[getDirection(rateYesterday, rateToday)]}
                  >
                    {rateToday.toFixed(4)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
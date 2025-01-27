import scss from "./Welcome.module.scss";
import { useEffect, useState } from "react";
// import rus from "../../.././../assets/rus.png";
// import usd from "../../.././../assets/usd.png";
// import chy from "../../.././../assets/cny.png";
// import kzt from "../../.././../assets/kzt.png";
// import eur from "../../.././../assets/eur.png";
type TData = {
  weight: string;
  buy: string;
  sell: string;
}[];

const Welcome = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchRates = () => {
      const data: TData = [
        { weight: "1 г.", buy: "9 033.50", sell: "9 160.00" },
        { weight: "2 г.", buy: "16 875.50", sell: "17 095.00" },
        { weight: "5 г.", buy: "40 396.00", sell: "40 880.50" },
        { weight: "10 г.", buy: "79 481.00", sell: "80 355.50" },
        { weight: "20 г.", buy: "158 236.50", sell: "160 610.00" },
        { weight: "31.1035 г.", buy: "245 340.00", sell: "249 020.00" },
        { weight: "50 г.", buy: "393 368.00", sell: "405 169.00" },
        { weight: "100 г.", buy: "784 217.00", sell: "807 743.50" },
        { weight: "1000 г.", buy: "7 984 372.00", sell: "8 104 137.50" },
      ];
      setRates(data);
    };
   
    fetchRates();
  }, []);


  return (
    <section id={scss.welcomePage}>
      <div className={scss.content}>
        <div className={scss.wellText}>
          <div className={scss.text}>
            <h1>
              Золотодобывающая компания <span>Кыргызалтын</span>
            </h1>
            <p>
              Крупнейшее предприятие Кыргызской Республики, специализирующееся
              на освоении месторождений золота, <br /> играет ключевую роль в
              развитии экономики страны. <br /> Компания обеспечивает
              значительный вклад в ВВП, создаёт рабочие места и привлекает
              инвестиции.
            </p>
            <button>Свяжитесь и нами</button>
          </div>
        </div>
        <div className={scss.goldRatesTable}>
          <h4>
            Цены золотых мерных слитков на <span>25.01.2025</span>
          </h4>
          <div className={scss.table}>
            <div className={scss.headerRow}>
              <div>Вес</div>
              <div>Выкуп, с.</div>
              <div>Продажа, с.</div>
            </div>
            {rates.map((rate, idx) => (
              <div key={idx} className={scss.dataRow}>
                <div>
                  <p> {rate.weight}</p>
                </div>
                <div>{rate.buy}</div>
                <div>{rate.sell}</div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Welcome;

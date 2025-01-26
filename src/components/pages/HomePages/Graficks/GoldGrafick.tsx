import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import scss from "./Graficks.module.scss";
import ScrollAnimation from "../../../../ui/Animation/ScrollAnimation";

Chart.register(CategoryScale);

const GoldCompany: React.FC = () => {
  const goldPriceRef = useRef<HTMLCanvasElement | null>(null);
  const goldVolumeRef = useRef<HTMLCanvasElement | null>(null);
  const profitRef = useRef<HTMLCanvasElement | null>(null);
  const investmentRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const charts = [];
    const createChart = (
      ref: React.RefObject<HTMLCanvasElement>,
      label: string,
      data: number[],
      borderColor: string,
      backgroundColor: string
    ) => {
      if (ref.current) {
        const ctx = ref.current.getContext("2d");
        if (ctx) {
          const chartInstance = new Chart(ctx, {
            type: "line",
            data: {
              labels: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь",
              ],
              datasets: [
                {
                  label,
                  data,
                  borderColor,
                  backgroundColor,
                  borderWidth: 2,
                  tension: 0.3,
                  fill: true,
                },
              ],
            },
            options: {
              responsive: true,
            },
          });
          charts.push(chartInstance);
        }
      }
    };

    createChart(
      goldPriceRef,
      "Цена золота (USD)",
      [3900, 3500, 3768, 3234, 3880, 3490, 3830, 4050, 3788, 4300, 4149, 4500],
      "gold",
      "rgba(255, 215, 0, 0.3)"
    );

    createChart(
      goldVolumeRef,
      "Объем добычи золота (тонны)",
      [1.5, 1.8, 1.6, 1.7, 2.0, 2.1, 1.9, 2.3, 2.4, 2.0, 1.8, 2.2],
      "blue",
      "rgba(0, 123, 255, 0.3)"
    );

    createChart(
      profitRef,
      "Прибыль компании (млн USD)",
      [100, 120, 150, 180, 200, 220, 210, 230, 240, 260, 270, 300],
      "green",
      "rgba(0, 255, 0, 0.3)"
    );

    createChart(
      investmentRef,
      "Инвестиции в экологические проекты (тыс. USD)",
      [50, 60, 55, 70, 65, 80, 85, 90, 95, 100, 105, 110],
      "orange",
      "rgba(255, 165, 0, 0.3)"
    );

    return () => charts.forEach((chart) => chart.destroy());
  }, []);

  return (
    <section id={scss.goldComp}>
      <ScrollAnimation>
        <div className="container">
          <div className={scss.content}>
            <div>
              <h1>График цены на золото</h1>
              <canvas ref={goldPriceRef}></canvas>
            </div>
            <div>
              <h1>График объемов добычи золота</h1>
              <canvas ref={goldVolumeRef}></canvas>
            </div>
            <div>
              <h1>График прибыли компании</h1>
              <canvas ref={profitRef}></canvas>
            </div>
            <div>
              <h1>График инвестиций в экологические проекты</h1>
              <canvas ref={investmentRef}></canvas>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default GoldCompany;

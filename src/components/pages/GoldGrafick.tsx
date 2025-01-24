import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import scss from "./styles.module.scss";
import ScrollAnimation from "../../ui/Animation/ScrollAnimation";
Chart.register(CategoryScale);

const GoldGrafick: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart | null = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstance) chartInstance.destroy();

        chartInstance = new Chart(ctx, {
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
                label: "Цена золота (USD)",
                data: [
                  3900, 3500, 3768, 3234, 3880, 3490, 3830, 4050, 3788, 4300,
                  4149, 4500,
                ],
                borderColor: "gold",
                backgroundColor: "rgba(255, 215, 0, 0.3)",
                borderWidth: 2,
                tension: 0.3,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,

            // ticks: {
            //   stepSize: 500,
            // },
          },
        });
      }
    }

    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, []);

  return (
    <section id={scss.goldGraf}>
      <ScrollAnimation>

      <h1>График цены на золото</h1>
      <canvas ref={chartRef}></canvas>
      </ScrollAnimation>
    </section>
  );
};

export default GoldGrafick;

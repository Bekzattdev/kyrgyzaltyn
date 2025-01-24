import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import scss from "./styles.module.scss";
import ScrollAnimation from "../../ui/Animation/ScrollAnimation";
Chart.register(CategoryScale);

const SomGrafick: React.FC = () => {
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
                label: "Курс сома к USD",
                data: [
                  85.2, 86.1, 85.7, 86.8, 85.4, 84.9, 85.5, 86.2, 85.9, 86.4,
                  87.1, 86.8,
                ],
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0.3)",
                borderWidth: 2,
                tension: 0.3,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance) chartInstance.destroy();
    };
  }, []);

  return (
    <section id={scss.somGraf}>
      <ScrollAnimation>
      <h1>График курса сома к доллару</h1>
      <canvas ref={chartRef}></canvas>
      </ScrollAnimation>
    </section>
  );
};

export default SomGrafick;

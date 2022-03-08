import React from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = ({ title, label, chartData, colors }) => {
  const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const data = {
    labels: label,
    datasets: [
      {
        data: chartData,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.chart}>
        <div className={styles.canvas}>
          <Doughnut data={data} options={options} />
        </div>
        <div className={styles.legend}>
          {label.map((item) => {
            const index = label.indexOf(item);
            return (
              <div key={item} className={styles.legend__list}>
                <span
                  className={styles.legend__color}
                  style={{ backgroundColor: colors[index] }}
                ></span>
                <span className={styles.legend__title}>{item}: </span>
                <span className={styles.legend__count}>
                  {comma(chartData[index])}명
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Chart;

import React, { useEffect, useState } from "react";
import styles from "./graph_list.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "../../chart/chart";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphList = ({ data }) => {
  const [label, setLabel] = useState([]);
  const [newInfection, setNewInfection] = useState([]);
  const [totalInfection, setTotalInfection] = useState([]);
  const [death, setDeath] = useState([]);
  const [recovered, setRecovered] = useState([]);

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#a1887f",
    "#90a4ae",
    "#ffcc80",
    "#80cbc4",
    "#0288d1",
    "#7e57c2",
    "#ef5350",
    "#00e5ff",
    "#827717",
    "#455a64",
    "#c5cae9",
    "#ef9a9a",
    "#aa00ff",
    "#439889",
    "#dce775",
  ];

  const removeComma = (data) => {
    return parseInt(data.replace(/,/g, ""));
  };

  const getData = () => {
    Object.keys(data).map((key) => {
      if (data[key].countryName !== "합계") {
        setLabel((prev) => [...prev, data[key].countryName]);
        setNewInfection((prev) => [...prev, removeComma(data[key].newCase)]);
        setTotalInfection((prev) => [
          ...prev,
          removeComma(data[key].totalCase),
        ]);
        setDeath((prev) => [...prev, removeComma(data[key].death)]);
        setRecovered((prev) => [...prev, removeComma(data[key].recovered)]);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.graph}>
      <div className={styles.box}>
        <Chart
          title="확진자"
          label={label}
          chartData={totalInfection}
          colors={colors}
        />
      </div>
      <div className={styles.box}>
        <Chart
          title="추가 확진자"
          label={label}
          chartData={newInfection}
          colors={colors}
        />
      </div>
      <div className={styles.box}>
        <Chart
          title="완치자"
          label={label}
          chartData={recovered}
          colors={colors}
        />
      </div>
      <div className={styles.box}>
        <Chart title="사망자" label={label} chartData={death} colors={colors} />
      </div>
    </div>
  );
};

export default GraphList;

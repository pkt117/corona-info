import React from "react";
import styles from "./total_status.module.css";

const TotalStatus = ({ title, data, yesterday = false }) => {
  const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={styles.box}>
      <span className={styles.title}>{title}</span>
      <span className={styles.data}>{comma(data)}</span>
      {yesterday ? (
        <span className={styles.yesterday}>&uarr; {comma(yesterday)}</span>
      ) : null}
    </div>
  );
};
export default TotalStatus;

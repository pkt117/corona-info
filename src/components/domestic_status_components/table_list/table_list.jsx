import React from "react";
import styles from "./table_list.module.css";

const TableList = ({ data }) => {
  const {
    countryName: name,
    totalCase: totalInfection,
    death,
    newCase: newInfection,
    recovered,
  } = data;

  return (
    <>
      <div className={styles.element}>{name}</div>
      <div className={`${styles.element} ${styles.yesterday}`}>
        {newInfection}
      </div>
      <div className={styles.element}>{totalInfection}</div>
      <div className={styles.element}>{recovered}</div>
      <div className={styles.element}>{death}</div>
    </>
  );
};

export default TableList;

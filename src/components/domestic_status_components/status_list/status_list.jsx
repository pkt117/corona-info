import React from "react";
import styles from "./status_list.module.css";

const StatusList = ({ data }) => {
  const {
    countryName: name,
    totalCase: totalInfection,
    death,
    newCase: newInfection,
    recovered,
  } = data;

  return (
    <>
      <td className={styles.name}>{name}</td>
      <td className={`${styles.element} ${styles.yesterday}`}>
        {newInfection}
      </td>
      <td className={styles.element}>{totalInfection}</td>
      <td className={styles.element}>{recovered}</td>
      <td className={styles.element}>{death}</td>
    </>
  );
};

export default StatusList;

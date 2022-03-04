import React from "react";
import styles from "./status_list.module.css";

const StatusList = ({ data }) => {
  const { nationNm: name, natDeathCnt: death, natDefCnt: infection } = data;

  const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <td className={styles.name}>{name}</td>
      <td className={`${styles.element} ${styles.infection}`}>
        {comma(infection)}
      </td>
      <td className={styles.element}>{comma(death)}</td>
    </>
  );
};

export default StatusList;

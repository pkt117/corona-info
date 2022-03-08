import React from "react";
import styles from "./table_list.module.css";

const TableList = ({ data }) => {
  const { nationNm: name, natDeathCnt: death, natDefCnt: infection } = data;

  const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <div className={styles.element}>{name}</div>
      <div className={`${styles.element} ${styles.infection}`}>
        {comma(infection)}
      </div>
      <div className={styles.element}>{comma(death)}</div>
    </>
  );
};

export default TableList;

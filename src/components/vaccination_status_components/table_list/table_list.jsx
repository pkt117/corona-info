import React from "react";
import styles from "./table_list.module.css";

const TableList = ({ data }) => {
  const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (data.sido == "전국") data.sido = "합계";

  return (
    <>
      <td className={styles.name}>{data.sido}</td>
      <td className={styles.element}>{comma(data.firstCnt)}</td>
      <td className={styles.element}>{comma(data.totalFirstCnt)}</td>
      <td className={styles.element}>{comma(data.secondCnt)}</td>
      <td className={styles.element}>{comma(data.totalSecondCnt)}</td>
      <td className={styles.element}>{comma(data.thirdCnt)}</td>
      <td className={styles.element}>{comma(data.totalThirdCnt)}</td>
    </>
  );
};

export default TableList;

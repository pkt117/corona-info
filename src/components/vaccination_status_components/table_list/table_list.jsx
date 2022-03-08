import React from "react";
import styles from "./table_list.module.css";

const TableList = ({ data }) => {
  const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  switch (data.sido) {
    case "서울특별시":
    case "부산광역시":
    case "인천광역시":
    case "대구광역시":
    case "광주광역시":
    case "대전광역시":
    case "울산광역시":
    case "세종특별자치시":
    case "제주특별자치도":
    case "경기도":
    case "강원도":
      data.sido = data.sido.slice(0, 2);
      break;
    case "충청남도":
    case "충청북도":
    case "전라남도":
    case "전라북도":
    case "경상남도":
    case "경상북도":
      data.sido = data.sido.charAt(0) + data.sido.charAt(2);
      break;
  }

  return (
    <>
      <td className={styles.element}>{data.sido}</td>
      <td className={`${styles.element} ${styles.yesterday}`}>
        {comma(data.firstCnt)}
      </td>
      <td className={styles.element}>{comma(data.totalFirstCnt)}</td>
      <td className={`${styles.element} ${styles.yesterday}`}>
        {comma(data.secondCnt)}
      </td>
      <td className={styles.element}>{comma(data.totalSecondCnt)}</td>
      <td className={`${styles.element} ${styles.yesterday}`}>
        {comma(data.thirdCnt)}
      </td>
      <td className={styles.element}>{comma(data.totalThirdCnt)}</td>
    </>
  );
};

export default TableList;

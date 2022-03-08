import React from "react";
import styles from "./small_list.module.css";

const SmallList = ({ data }) => {
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
    <div className={styles.box}>
      <span className={styles.title}>{data.sido}</span>
      <div className={styles.content_box}>
        <div className={styles.content}>
          <span className={styles.content__title}>1차 접종</span>
          <span className={styles.content__content}>
            {comma(data.totalFirstCnt)}
          </span>
          <span className={styles.yesterday}>
            &uarr; {comma(data.firstCnt)}
          </span>
        </div>
        <div className={styles.content}>
          <span className={styles.content__title}>2차 접종</span>
          <span className={styles.content__content}>
            {comma(data.totalSecondCnt)}
          </span>
          <span className={styles.yesterday}>
            &uarr; {comma(data.secondCnt)}
          </span>
        </div>
        <div className={styles.content}>
          <span className={styles.content__title}>3차 접종</span>
          <span className={styles.content__content}>
            {comma(data.totalThirdCnt)}
          </span>
          <span className={styles.yesterday}>
            &uarr; {comma(data.thirdCnt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallList;

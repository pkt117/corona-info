import React from "react";
import styles from "./small_list.module.css";

const SmallList = ({ data }) => {
  const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (data.sido == "전국") data.sido = "합계";

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

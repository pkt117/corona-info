import React from "react";
import styles from "./small_list.module.css";

const SmallList = ({ data }) => {
  const { nationNm: name, natDeathCnt: death, natDefCnt: infection } = data;
  const comma = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={styles.box}>
      <span className={styles.title}>{name}</span>
      <div className={styles.content_box}>
        <div className={styles.content}>
          <span className={styles.content__title}>확진자</span>
          <span className={`${styles.content__content} ${styles.infection}`}>
            {comma(infection)}
          </span>
        </div>
        <div className={styles.content}>
          <span className={styles.content__title}>사망자</span>
          <span className={styles.content__content}>{comma(death)}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallList;

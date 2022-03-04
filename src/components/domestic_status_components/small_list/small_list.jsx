import React from "react";
import styles from "./small_list.module.css";

const SmallList = ({ data }) => {
  const {
    countryName: name,
    totalCase: totalInfection,
    death,
    newCase: newInfection,
    recovered,
  } = data;

  return (
    <div className={styles.box}>
      <span className={styles.title}>{name}</span>
      <div className={styles.content_box}>
        <div className={styles.content}>
          <span className={styles.content__title}>확진자</span>
          <span className={styles.content__content}>{totalInfection}</span>
          <span className={styles.yesterday}>&uarr; {newInfection}</span>
        </div>
        <div className={styles.content}>
          <span className={styles.content__title}>완치자</span>
          <span className={styles.content__content}>{recovered}</span>
        </div>
        <div className={styles.content}>
          <span className={styles.content__title}>사망자</span>
          <span className={styles.content__content}>{death}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallList;

import React from "react";
import styles from "./data_source.module.css";

const DataSource = (props) => {
  return (
    <>
      <h1 className={styles.title}>자료 출처</h1>
      <div className={styles.box}>
        <a
          href="https://www.data.go.kr/index.do"
          target="_blank"
          className={styles.link}
        >
          공공 데이터 포털 - 해외 코로나 현황, 국내 백신접종 현황 API
        </a>
        <a
          href="https://github.com/dhlife09/Corona-19-API"
          target="_blank"
          className={styles.link}
        >
          Corona-19-API - 국내 코로나 현황 API
        </a>
        <a
          href="https://github.com/disease-sh/API"
          target="_blank"
          className={styles.link}
        >
          disease-sh - 해외 코로나 종합 현황 API
        </a>
      </div>
    </>
  );
};

export default DataSource;

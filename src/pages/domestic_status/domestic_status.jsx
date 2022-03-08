import React, { useEffect, useState } from "react";
import styles from "./domestic_status.module.css";

import TotalStatus from "../../components/total_status/total_status";
import Loading from "../../components/loading/loading";
import SmallList from "../../components/domestic_status_components/small_list/small_list";
import TableList from "../../components/domestic_status_components/table_list/table_list";
import GraphList from "../../components/domestic_status_components/graph_list/graph_list";

const DomesticStatus = ({ coronaAPI }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listNum, setListNum] = useState(1);

  const getData = async () => {
    setLoading(true);
    const apiData = await coronaAPI.domesticStatus();
    setData(apiData);
    setLoading(false);
  };

  useEffect(() => getData(), []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className={styles.domestic}>
          <h1 className={styles.title}>국내 확진자 수 현황</h1>

          <div className={styles.total}>
            <TotalStatus
              title="확진자"
              data={data.korea.totalCase}
              yesterday={data.korea.newCase}
            />
            <TotalStatus title="완치자" data={data.korea.recovered} />
            <TotalStatus title="사망자" data={data.korea.death} />
          </div>

          <div className={styles.region}>
            <h1 className={styles.title}>시/도별 발생 현황</h1>
            <div className={styles.selection}>
              <button
                className={
                  listNum === 1
                    ? `${styles.button} ${styles.checked}`
                    : styles.button
                }
                onClick={() => setListNum(1)}
              >
                리스트
              </button>
              <button
                className={
                  listNum === 2
                    ? `${styles.button} ${styles.checked}`
                    : styles.button
                }
                onClick={() => setListNum(2)}
              >
                그래프
              </button>
            </div>
            <div className={styles.region__list}>
              {listNum === 1 ? (
                <>
                  <div border="1" className={styles.table}>
                    <div className={styles.table__head}>
                      <div className={styles.table__tr}>
                        <div className={styles.table__td}>지역</div>
                        <div className={styles.table__td}>추가 확진자</div>
                        <div className={styles.table__td}>확진자</div>
                        <div className={styles.table__td}>완치자</div>
                        <div className={styles.table__td}>사망자</div>
                      </div>
                    </div>
                    <div className={styles.table__body}>
                      {Object.keys(data).map(
                        (key) =>
                          data[key].countryName != "합계" && (
                            <div key={key} className={styles.table__tr}>
                              <TableList data={data[key]} key={key} />
                            </div>
                          )
                      )}
                    </div>
                  </div>

                  <div className={styles.small_list}>
                    {Object.keys(data).map(
                      (key) =>
                        data[key].countryName != "합계" && (
                          <SmallList data={data[key]} key={key} />
                        )
                    )}
                  </div>
                </>
              ) : (
                <GraphList data={data} />
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DomesticStatus;

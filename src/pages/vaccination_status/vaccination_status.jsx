import React, { useState, useEffect } from "react";
import styles from "./vaccination_status.module.css";
import Loading from "../../components/loading/loading";
import TotalStatus from "../../components/total_status/total_status";
import TableList from "../../components/vaccination_status_components/table_list/table_list";
import SmallList from "../../components/vaccination_status_components/small_list/small_list";

const VaccinationStatus = ({ coronaAPI }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(null);

  const getData = async () => {
    setLoading(true);
    const { data: apiData, date } = await coronaAPI.vaccinationStatus();
    setData(apiData);
    setDate(date);
    setLoading(false);
  };

  useEffect(() => getData(), []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className={styles.vaccination}>
          <h1 className={styles.title}>국내 코로나 예방접종 현황</h1>
          <h2 className={styles.subTitle}>{date} 기준 </h2>
          <div className={styles.total}>
            <TotalStatus
              title="1차 접종 현황"
              data={data[0].totalFirstCnt}
              yesterday={data[0].firstCnt}
            />
            <TotalStatus
              title="2차 접종 현황"
              data={data[0].totalSecondCnt}
              yesterday={data[0].secondCnt}
            />
            <TotalStatus
              title="3차 접종 현황"
              data={data[0].totalThirdCnt}
              yesterday={data[0].thirdCnt}
            />
          </div>
          <div className={styles.region}>
            <h1 className={styles.title}>시/도별 접종 현황 </h1>
            <h2 className={styles.subTitle}>{date} 기준 </h2>

            <div className={styles.region__list}>
              <table border="1" className={styles.table}>
                <thead className={styles.table__head}>
                  <tr className={styles.table__tr}>
                    <td rowSpan={2} className={styles.table__td}>
                      구분
                    </td>
                    <td colSpan={2} className={styles.table__td}>
                      1차접종
                    </td>
                    <td colSpan={2} className={styles.table__td}>
                      2차접종
                    </td>
                    <td colSpan={2} className={styles.table__td}>
                      3차접종
                    </td>
                  </tr>
                  <tr className={styles.table__tr}>
                    <td className={styles.table__td}>당일 실적</td>
                    <td className={styles.table__td}>당일 누계</td>
                    <td className={styles.table__td}>당일 실적</td>
                    <td className={styles.table__td}>당일 누계</td>
                    <td className={styles.table__td}>당일 실적</td>
                    <td className={styles.table__td}>당일 누계</td>
                  </tr>
                </thead>
                <tbody className={styles.table__body}>
                  {Object.keys(data).map(
                    (key) =>
                      data[key].sido != "전국" && (
                        <tr key={data[key].id} className={styles.table__tr}>
                          <TableList data={data[key]} key={data[key].id} />
                        </tr>
                      )
                  )}
                </tbody>
              </table>

              <div className={styles.small_list}>
                {Object.keys(data).map(
                  (key) =>
                    data[key].sido != "전국" && (
                      <SmallList data={data[key]} key={data[key].id} />
                    )
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default VaccinationStatus;

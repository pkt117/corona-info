import React, { useState, useEffect } from "react";
import Loading from "../../components/loading/loading";
import TotalStatus from "../../components/total_status/total_status";
import SmallList from "../../components/overseas_status_components/small_list/small_list";
import styles from "./overseas_status.module.css";
import TableList from "../../components/overseas_status_components/table_list/table_list";

const OverseasStatus = ({ coronaAPI }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [totalData, setTotalData] = useState(null);
  const [date, setDate] = useState(null);
  const [totalDate, setTotalDate] = useState(null);

  const getData = async () => {
    setLoading(true);
    const {
      data: apiData,
      date,
      total,
      totalDate,
    } = await coronaAPI.overseasStatus();
    setData(apiData);
    setDate(date);
    setTotalData(total);
    setTotalDate(totalDate);
    setLoading(false);
  };

  useEffect(() => getData(), []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className={styles.overseas}>
          <h1 className={styles.title}>해외 확진자 수 현황</h1>
          <h2 className={styles.subTitle}>{totalDate} 기준 </h2>

          <div className={styles.total}>
            <TotalStatus
              title="확진자"
              data={totalData.cases}
              yesterday={totalData.todayCases}
            />
            <TotalStatus
              title="완치자"
              data={totalData.recovered}
              yesterday={totalData.todayRecovered}
            />

            <TotalStatus
              title="사망자"
              data={totalData.deaths}
              yesterday={totalData.todayDeaths}
            />
          </div>
          <div className={styles.country}>
            <h1 className={styles.title}>국가별 코로나 발생 현황</h1>
            <h2 className={styles.subTitle}>{date} 기준 </h2>

            <div className={styles.country__list}>
              <div className={styles.table}>
                <div className={styles.table__head}>
                  <div className={styles.table__tr}>
                    <div className={styles.table__td}>국가</div>
                    <div className={styles.table__td}>확진자</div>
                    <div className={styles.table__td}>사망자</div>
                  </div>
                </div>
                <div className={styles.table__body}>
                  {Object.keys(data).map((key) => (
                    <div key={data[key].seq} className={styles.table__tr}>
                      <TableList data={data[key]} key={data[key].seq} />
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.small_list}>
                {Object.keys(data).map((key) => (
                  <SmallList data={data[key]} key={data[key].seq} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OverseasStatus;

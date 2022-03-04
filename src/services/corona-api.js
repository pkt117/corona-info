import axios from "axios";

export default class CoronaAPI {
  // 코로나 국내 확진자 정보 가져오기
  async domesticStatus() {
    const createAxios = axios.create({
      baseURL: process.env.REACT_APP_CORONA_DOMESTIC_URL,
      params: { serviceKey: process.env.REACT_APP_CORONA_API_KEY },
    });

    const getData = await createAxios.get();
    const data = getData.data;

    // 어제 확진자 수 기준 내림차순 정렬 -> 객체안의 객체
    Object.keys(data).forEach((key) => {
      if (data[key].countryName == undefined) delete data[key];
    });

    const result = Object.fromEntries(
      Object.entries(data).sort(([, a], [, b]) => {
        const d1 = parseInt(a.newCase.replace(/,/g, ""));
        const d2 = parseInt(b.newCase.replace(/,/g, ""));

        return d2 - d1;
      })
    );

    return result;
  }

  // 예방접종 인원 수 정보 가져오기
  async vaccinationStatus() {
    const dt = new Date();

    // 오전 9시~10시 사이에 업데이트
    if (dt.getHours() < 10) dt.setDate(dt.getDate() - 1);

    const { getDt, returnDt } = this.calDate(dt, "vaccination");

    const createAxios = axios.create({
      baseURL: process.env.REACT_APP_CORONA_VACCINATION_URL,
      params: {
        serviceKey: process.env.REACT_APP_CORONA_VACCINATION_KEY,
        "cond[baseDate::GTE]": getDt,
        perPage: 18,
      },
    });

    const data = (await createAxios.get()).data.data;
    return { data, date: returnDt };
  }

  // 해외 확진자 정보 가져오기
  async overseasStatus() {
    const dt = new Date();

    //  who에서 주말에는 업데이트를 안함, 우리나라 기준 일, 월은 업데이트 안됨
    if (dt.getDay() === 1) dt.setDate(dt.getDate() - 3);
    else if (dt.getDay() === 0) dt.setDate(dt.getDate() - 2);
    else dt.setDate(dt.getDate() - 1);

    const { getDt, returnDt } = this.calDate(dt, "overseas");

    const getData = axios.create({
      baseURL: process.env.REACT_APP_CORONA_OVERSEAS_URL,
      params: {
        serviceKey: process.env.REACT_APP_CORONA_OVERSEAS_KEY,
        startCreateDt: getDt,
        endCreateDt: getDt,
      },
    });
    const data = (await getData.get()).data.response.body.items.item;

    // 해외 확진자 종합
    const totalData = await axios.get("https://disease.sh/v3/covid-19/all");

    const totalDt = new Date(totalData.data.updated);
    const returnTotalDt = this.calDate(totalDt, "overseasTotal");

    // 확진자 수 기준으로 내림차순 정렬 -> 배열안의 객체
    const result = await data.sort((a, b) => {
      const d1 = parseInt(a.natDefCnt);
      const d2 = parseInt(b.natDefCnt);
      return d2 - d1;
    });

    return {
      data: result,
      date: returnDt,
      total: totalData.data,
      totalDate: returnTotalDt,
    };
  }

  calDate = (date, info) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    switch (info) {
      case "vaccination":
        return {
          getDt: `${year}-${month}-${day}`,
          returnDt: `${year} - ${month} - ${day}`,
        };

      case "overseas":
        return {
          getDt: year + month + day,
          returnDt: `${year} - ${month} - ${day}`,
        };

      case "overseasTotal":
        return `${year} - ${month} - ${day}`;
    }
  };

  // 크롤링하여 사용하려 했으나, cors 문제에 직면하였고, proxy 설정까지 해보았으나 404 에러..

  // async overseasCrawling() {
  //   try {
  //     return await axios.get("https://www.worldometers.info/coronavirus/");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}

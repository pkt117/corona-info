import axios from "axios";

export default class CoronaApi {
  constructor() {
    this.key = process.env.REACT_APP_CORONA_API_KEY;
  }

  // 코로나 국내 확진자 정보 가져오기
  async domesticStatus() {
    const data = await this.createAxios(
      process.env.REACT_APP_CORONA_DOMESTIC_URL
    );

    return data;
  }

  // 예방접종 인원 수 정보 가져오기
  async vaccinationStatus() {
    const data = await this.createAxios(
      process.env.REACT_APP_CORONA_VACCINE_URL
    );

    return data;
  }

  createAxios(url) {
    const Axios = axios.create({
      baseURL: url,
      params: { serviceKey: this.key },
    });

    const result = Axios.get();
    return result;
  }
}

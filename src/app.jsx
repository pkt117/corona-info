import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import {
  OverseasStatus,
  DomesticStatus,
  VaccinationStatus,
  GuidelineInfo,
} from "./pages";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";

function App({ coronaAPI }) {
  return (
    <div className={styles.headerBox}>
      <Header />
      <section className={styles.app}>
        <Sidebar />
        <div className={styles.route}>
          <Routes>
            <Route
              exact
              path="/"
              element={<DomesticStatus coronaAPI={coronaAPI} />}
            />
            <Route
              path="/overseas_status"
              element={<OverseasStatus coronaAPI={coronaAPI} />}
            />
            <Route
              path="/vaccination_status"
              element={<VaccinationStatus coronaAPI={coronaAPI} />}
            />
            <Route path="/guideline_info" element={<GuidelineInfo />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;

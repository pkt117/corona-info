import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import {
  GlobalStatus,
  DomesticStatus,
  VaccinationStatus,
  GuidelineInfo,
} from "./pages";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <section className={styles.app}>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<DomesticStatus />} />
        <Route path="/global" element={<GlobalStatus />} />
        <Route path="/vaccination_status" element={<VaccinationStatus />} />
        <Route path="/guideline_info" element={<GuidelineInfo />} />
      </Routes>
    </section>
  );
}

export default App;

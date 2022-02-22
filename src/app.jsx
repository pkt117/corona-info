import { Route, Routes } from "react-router-dom";
import "./app.css";
import DomesticStatus from "./pages/domestic_status/domestic_status";
import VaccinationStatus from "./pages/vaccination_status/vaccination_status";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<DomesticStatus />} />
      <Route path="/vaccination_status" element={<VaccinationStatus />} />
    </Routes>
  );
}

export default App;

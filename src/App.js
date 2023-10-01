import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TwoButtonsPage from "./pages/TwoButtonsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientDashboardPage from "./pages/PatientDashboardPage";
import "bootstrap/dist/css/bootstrap.min.css";
import MedicalLoginForm from "./pages/MedicalLogin";
import DoctorDashboard from "./pages/DoctorDashboardPage";
import PatientDataBasePage from "./pages/PatientDataBasePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/patient-dashboard' element={<PatientDashboardPage/>}/>
            <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
            <Route path='/doctor-patient-data-page' element={<PatientDataBasePage/>}/>
          <Route path="/" element={<MedicalLoginForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

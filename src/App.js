import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TwoButtonsPage from "./pages/TwoButtonsPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/*<span>TEST</span>*/}
            <Route path='/two-buttons' element={<TwoButtonsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

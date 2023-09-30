import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import TwoButtonsPage from "./pages/TwoButtonsPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/two-buttons' element={<TwoButtonsPage />} />
        </Routes>
      </Router>
  );
}

export default App;

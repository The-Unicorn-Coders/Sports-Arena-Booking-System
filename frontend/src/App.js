import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import { Switch } from "@mui/material";
import AvailabilityMain from "./Pages/LiveAvailabilityPage/AvailabilityMain";
import Bmain from "./Pages/BookingPage/Bmain";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/booking" element={<AvailabilityMain />} />
          <Route path="/filtering"  element={<Bmain/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

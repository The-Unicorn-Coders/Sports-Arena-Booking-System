import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import axios from 'axios';
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*import GroundForm from "./Components/GroundForm";*/


function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </BrowserRouter>


  
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import axios from 'axios';
import Payment from "./Components/payment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
    
    
      <BrowserRouter>
        <Routes>
          <Route path="/payment" element={<Payment />} />
          
        </Routes>
      </BrowserRouter>
      </div>

    
  );
}

export default App;

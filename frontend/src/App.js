import {BrowserRouter as Router,Route,Switch, BrowserRouter } from "react-router-dom";
//import Bmain from "./Pages/BookingPage/Bmain";
//import HomeScreen from "./Pages/HomeScreen";
//import BookSports from "./Pages/BookSports";
//import ExpolerPart from "./Pages/ExpolerPart";
//import Footer from "./Pages/Footer";
//import Header from "./Pages/Header";
//import Heroslider from "./Pages/Heroslider";
//import HHeader1 from "./Pages/HHeader1";
//import Home from "./Pages/Home";
//import NewlyAddedArena from "./Pages/NewlyAddedArena";
//import Pinnedarena from "./Pages/Pinnedarena";
//import SportButtons from "./Pages/SportButtons";
//import Toprated from "./Pages/Toprated";
import AvailabilityMain from "./Pages/LiveAvailabilityPage/AvailabilityMain";


function App() {
  return (
    <div>
    <BrowserRouter>
      {/*
           <Header/>
           <Heroslider/>
           <Pinnedarena/>
           <ExpolerPart/>
           <Toprated/>
           <NewlyAddedArena/>
           <Footer/>
           <Bmain/>
      */}
      
      <AvailabilityMain/>
    </BrowserRouter>
    </div>
  );
}

export default App;

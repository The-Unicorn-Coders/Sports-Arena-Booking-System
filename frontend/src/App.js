import {BrowserRouter as Router,Route,Switch, BrowserRouter } from "react-router-dom";
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


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Heroslider/>
    <HHeader1/>
    <Pinnedarena/>
   
    <ExpolerPart/>
    <Toprated/>

    <NewlyAddedArena/>
  
{/* 
  <Footer/> */}


    </BrowserRouter>
    </div>
  );
}

export default App;

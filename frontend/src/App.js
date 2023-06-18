import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import BookSports from "./Pages/BookSports";
import ExpolerPart from "./Pages/ExpolerPart";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Heroslider from "./Pages/Heroslider";
import HHeader1 from "./Pages/HHeader1";
import Home from "./Pages/Home";
import NewlyAddedArena from "./Pages/NewlyAddedArena";
import SportButtons from "./Pages/SportButtons";
import Toprated from "./Pages/Toprated";


function App() {
  return (
    <div>
    <Header/>
    <Heroslider/>
    <HHeader1/>
   
    <ExpolerPart/>
    <Toprated/>

    <NewlyAddedArena/>
  

  <Footer/>
  
   

    </div>
  );
}

export default App;

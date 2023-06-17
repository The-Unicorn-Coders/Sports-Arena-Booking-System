import {Routes, Route} from "react-router-dom";
import Bugg from "./Components/Bugg";
import DisplayBug from "./Components/DisplayBug";
import Feedback from "./Pages/Feedback";
import LoginPage from "./Pages/LoginPage";
import Ratings from "./Pages/Ratings";





function App() {
  return (
    <div>
      {/* <Routes>
        
              
                  
                  <Route path="login" element={<LoginPage/>} > </Route>
                  <Route path="Feedback" element={<Feedback/>} > </Route>
                  <Route path="Ratings" element={<Ratings/>} > </Route>
                  <Route path="Buggs" element={<Bugg/>} > </Route>

             
         
      </Routes> */}

      <DisplayBug/>
  
    </div>
  );
}

export default App;

import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Bugg from "./Components/Bugg";
import Feedback from "./Pages/Feedback";
import Ratings from "./Pages/Ratings";




function App() {
  return (
    <div>
      <Router>
          <div>
              <Switch>
                  <Route path="/"> <Bugg/> </Route>
                  {/* <Route path="/Home"> <Ratings/> </Route> */}

              </Switch>
          </div>
      </Router>
  
    </div>
  );
}

export default App;

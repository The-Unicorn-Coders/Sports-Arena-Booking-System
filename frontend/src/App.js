import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Feedback from "./Pages/Feedback";
import Ratings from "./Pages/Ratings";




function App() {
  return (
    <div>
      <Router>
          <div>
              <Switch>
                  <Route path="/"> <Feedback/> </Route>
                  {/* <Route path="/Home"> <Ratings/> </Route> */}

              </Switch>
          </div>
      </Router>
  
    </div>
  );
}

export default App;

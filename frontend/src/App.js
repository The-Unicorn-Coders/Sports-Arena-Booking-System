import {BrowserRouter as Router,Route,Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
          <div>
              <Switch>
                  <Route path="/"> <Home/> </Route>
                  <Route path="/">< Navigation/> </Route>
              </Switch>
          </div>
      </Router>
  
    </div>
  );
}

export default App;

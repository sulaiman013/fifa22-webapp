import React from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";

import playersData from "./Data.json";
import Home from "./Components/Home/Home";
import PlayerProfile from "./Components/PlayerProfile/PlayerProfile";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route exact path = '/home'>
          <Home></Home>
        </Route>
        <Route exact path = '/cristiano'>
          <PlayerProfile data2={playersData} ></PlayerProfile>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
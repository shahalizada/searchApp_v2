import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components...
import Landing from "./Components/Landing";
import Search from "./Components/Search";
import CityName from "./Components/CityName";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";

//StyleSheet
import "./styles.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cityname" component={CityName} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

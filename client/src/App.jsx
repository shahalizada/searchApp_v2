import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components...
import Landing from "./Components/Landing";
import Search from "./Components/Search";
import CityName from "./Components/CityName";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";

//StyleSheet
import "./styles.css";

//redux store;
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/cityname" component={CityName} />
            <Route exact component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;

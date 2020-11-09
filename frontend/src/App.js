import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/home";
import YoDigital from "./Views/CASA";
import Cholula from "./Views/Cholula";
import Colmena from "./Views/Colmena";
import CCE from "./Views/CCE";

export default function App() {
  return (
    <Router>
      <Switch className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/cce" component={CCE} />
        <Route exact path="/casa" component={YoDigital} />
        <Route exact path="/cholula" component={Cholula} />
        <Route exact path="/colmena" component={Colmena} />
      </Switch>
    </Router>
  );
}

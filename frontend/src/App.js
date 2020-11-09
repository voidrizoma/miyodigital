
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/home";
//import YoDigital from "./Views/YoDigital"
//import Cholula from "./Views/Cholula"
//import Colmena from "./Views/Colmena"


export default function App() {
  return (
    <Router>
      <Switch className="container">
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

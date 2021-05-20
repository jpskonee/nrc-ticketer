import React from "react";
import "../src/styles/app.scss";
import Navbar from "./components/Partials/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import LoginReg from "./components/LoginReg/LoginReg";
import AboutUs from "./components/Aboutpage/AboutUs";
import UserProfile from "./components/UserData/UserProfile";



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/booking" component={LoginReg} />
         <Route exact path="/about" component={AboutUs} />
        <Route exact path="/userprofile" component={UserProfile} />
      </Switch>
      </Router>
  );
}

export default App;

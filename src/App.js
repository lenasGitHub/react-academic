import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

import Professors from "./views/Professors";
import Courses from "./views/Courses";


import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/courses" />} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/professors" component={Professors} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

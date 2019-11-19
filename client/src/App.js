import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Home from "./pages/Home";
import Footer from "./components/Footer/index";
import Account from "./pages/Account";
import Guide from "./pages/Guide";
import "./App.css";

class App extends Component {
  state = {
    user: {},
  };
  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <Router>
        <div id="app">
          <NavBar setUser={this.setUser} user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/index" component={Home} />
            <Route exact path="/guide" component={Guide} />
            <Route exact path="/account" component={Account} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

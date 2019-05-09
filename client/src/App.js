import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Home from "./pages/Home";
import Footer from "./components/Footer/index";
import Account from "./pages/Account";
import Guide from "./pages/Guide";

class App extends Component {
  state = {
    user: {},
    page: ""
  };
  setUser = user => {
    this.setState({
      user: user
    });
  };
  setPage = page => {
    this.setState({
      page: page
    });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar setUser={this.setUser} user={this.state.user} setPage="home" page={this.state.page} />
          <Route exact path="/" component={Home} setPage="home" page={this.state.page} />
          <Route exact path="/index" component={Home} setPage={this.setPage} page={this.state.page} />
          <Route exact path="/guide" component={Guide} setPage={this.setPage} page={this.state.page} />
          <Route exact path="/account" component={Account} setPage={this.setPage} page={this.state.page} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Home from "./pages/Home";
import Footer from "./components/Footer/index";
import Leaders from "./pages/Leaders";
import Guide from "./pages/Guide";
// import UserAccount from "./components/UserAccount/UserAccount";

class App extends Component {
  state = {
    user: {}
  };
  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar setUser={this.setUser} user={this.state.user} />
          <Route exact path="/" component={Home} />
          <Route exact path="/index" component={Home} />
          <Route exact path="/leaders" component={Leaders} />
          <Route exact path="/guide" component={Guide} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

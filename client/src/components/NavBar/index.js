import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/takeFlight.svg";
import "../../App.css";
import SignUp from "../SignUp/index";
import LogIn from "../LogIn/index";
import LogOut from "../LogOut/index";
// import AUTHAPI from "../../utils/google-auth";
// import PrivacyPolicy from './components/privacy-policy';

class NavBar extends Component {
  setUser = user => {
    this.setState({
      user: user
    });
  };
  state = {
    isTop: true
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop })
        }
    });
  }
  render() {
    return (
      <nav className={this.state.isTop ? 'unscrolled navbar navbar-expand-lg navbar-light fixed-top': 'scrolled navbar navbar-expand-lg navbar-light fixed-top'}>
        <div className="navbar-brand">
          <img
            src={logo}
            id="takeFlightLogo"
            alt="takeflight"
            height="65"
            width="260"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/index" id="homeNavBtn" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/guide" id="guideNavBtn" className="nav-link">
                Guide
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/account" id="accountNavBtn" className="nav-link">
                {this.props.user.email}
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {this.props.user.email ? 
            <LogOut {...this.props} /> :
            <LogIn {...this.props} /> }

            {/* <LogOut {...this.props} />
            <LogIn {...this.props} /> */}
            <SignUp {...this.props} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

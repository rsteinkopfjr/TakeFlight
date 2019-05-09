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
  setPage = page => {
    this.setState({
      page: page
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link
                to="/index"
                id="homeNavBtn"
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/guide"
                id="guideNavBtn"
                className="nav-link"
              >
                Guide
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account"
                id="accountNavBtn"
                className="nav-link"
              >
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
            <LogOut /> :
            <LogIn {...this.props} /> }
            <SignUp {...this.props} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

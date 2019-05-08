import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/takeFlight.svg";
import "./style.css";
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

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            id="takeFlightLogo"
            alt="takeflight"
            height="65"
            width="260"
          />
        </a>
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
                to="/"
                id="homeNavBtn"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/leaders"
                id="leaderNavBtn"
                className={
                  window.location.pathname === "/leaders"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/guide"
                id="guideNavBtn"
                className={
                  window.location.pathname === "/guide"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                User Guide
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <LogOut />
            <LogIn {...this.props} />
            <SignUp {...this.props} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

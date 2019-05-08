import React, { Component } from "react";
import AUTHAPI from "../../utils/local-auth";

class LogOut extends Component {
  setUser = user => {
    this.setState({
      user: user
    });
  };
  logout = () => {
    AUTHAPI.getLogout().then(out => {
      this.setState({
        user: {}
      });
      window.location = "/logout";
      // this.context.router.history.push(`/logout`);
    });
  };
  render() {
    return (
      <li className="nav-item" id="logoutBtn">
        <button
          type="button"
          className="btn btn-outline-dark"
          id="logout"
          data-toggle="modal"
          data-target="#logOutModal"
        >
          Log Out
        </button>
        <div
          className="modal fade"
          id="logOutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="logOutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="logOutModalLabel">
                  Log Out
                </h5>
              </div>
              <div className="modal-body">
                Please confirm you want to log out.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  onClick={this.logout}
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default LogOut;

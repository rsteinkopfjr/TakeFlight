import React, { Component } from "react";
import LOCALAPI from "../../utils/local-auth";
// import { Redirect } from "react-router-dom";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleInputChange = event => {
    // copy
    let name = event.target.name;
    let value = event.target.value;
    //modify

    //setState
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(event.target);
    LOCALAPI.loginUser({
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        let user = response.data;
        // make sure we have an email
        if (user && user.email) {
          this.props.setUser(user);
          this.setState({
            errorMessage: null
          });
        } else {
          this.setState({
            errorMessage: "Could not log in"
          });
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: "Could not log in"
        });
      });
  };

  // componentDidMount = () => {
  // AUTHAPI.getUserData().then( userResponse => {
  //     if(userResponse.data){
  //         this.props.setUser(userResponse.data);
  //     }
  // })
  // };
  render() {
    return (
      <li className="nav-item" id="loginBtn">
        <button
          type="button"
          className="btn btn-outline-dark"
          id="login"
          data-toggle="modal"
          data-target="#logInModal"
        >
          Log In
        </button>

        <div
          className="modal fade"
          id="logInModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="logInModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="logInModalLabel">
                  Log In
                </h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="user" className="col-form-label">
                      Email:
                    </label>
                    <input
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      name="email"
                      type="text"
                      className="form-control"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user" className="col-form-label">
                      Password:
                    </label>
                    <input
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={this.handleFormSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default LogIn;

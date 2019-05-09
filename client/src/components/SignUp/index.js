import React, { Component } from "react";
import LOCALAPI from "../../utils/local-auth";

class SignUp extends Component {
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
    LOCALAPI.signupUser({
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
  render() {
    return (
      <div className="nav-item" id="signupBtn">
        <button
          type="button"
          className="btn btn-dark"
          id="signup"
          data-toggle="modal"
          data-target="#signUpModal"
        >
          Sign Up
        </button>
        <div
          className="modal fade"
          id="signUpModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="signUpModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signUpModalLabel">
                  Sign Up
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
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

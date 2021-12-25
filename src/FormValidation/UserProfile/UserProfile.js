import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      Email: "",
      passWord: "",
      passWordConfirm: "",
      errFirstName: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      Email: "",
      passWord: "",
      passWordConfirm: "",
      errFirstName: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;
    //console.log(name, value);

    let newValue = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name + " is required!";
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        newErrors[name] = name + " is invalid!";
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "passWordConfirm") {
      if (value === newValue["passWord"]) {
        newErrors[name] = "";
      } else {
        newErrors[name] = name + " is invalid!";
      }
    }

    this.setState({
      values: newValue,
      errors: newErrors,
    });

    // // setState bat dong bo
    // this.setState({
    //   values: { ...this.state.values, [name]: value },
    // });

    // if (value === "") {
    //   this.setState({
    //     errors: { ...this.state.errors, [name]: "Không được bỏ trống" },
    //   });
    // } else {
    //   this.setState({
    //     errors: { ...this.state.errors, [name]: "" },
    //   });
    // }
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            fontSize:
              'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
            width: 600,
          }}
          className="w-50 bg-white p-5 m-5"
        >
          <h1 className="text-center mt-0 mb-5">User Profile</h1>

          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.firstName}
                  type="text"
                  name="firstName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
                <span className="text text-danger">
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.lastName}
                  type="text"
                  name="lastName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
                <span className="text text-danger">
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.userName}
                  type="text"
                  name="userName"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
                <span className="text text-danger">
                  {this.state.errors.userName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.Email}
                  type="email"
                  name="Email"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
                <span className="text text-danger">
                  {this.state.errors.Email}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passWord}
                  name="passWord"
                  type="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passWord</label>
                <span className="text text-danger">
                  {this.state.errors.passWord}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passWordConfirm}
                  name="passWordConfirm"
                  type="password"
                  required
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>passWordConfirm</label>
                <span className="text text-danger">
                  {this.state.errors.passWordConfirm}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                className="btn text-white bg-dark w-100"
                style={{ fontSize: 17 }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

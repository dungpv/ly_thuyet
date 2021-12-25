import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
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
                <input type="text" name="firstName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>firstName</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" name="lastName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>lastName</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input type="text" name="userName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>userName</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input type="text" name="Email" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input name="passWord" type="password" required />
                <span className="highlight" />
                <span className="bar" />
                <label>passWord</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input name="passWordConfirm" type="password" required />
                <span className="highlight" />
                <span className="bar" />
                <label>passWordConfirm</label>
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

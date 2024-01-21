import React, { useState } from "react";
import "../assets/sass/register.scss";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="page-register">
      <div className="row my-5">
        <div className="col-4 p-0">
          <img
            src="https://localbrand.vn/wp-content/uploads/2020/03/local-brand-giay-ananas-sneaker-viet-nam.jpg"
            alt="..."
            className="w-100"
          />
        </div>
        <div className="col-8">
          <form className="form-register">
            <h3 className="text-center">Register</h3>
            <div className="form-content pb-3">
              <div className="form-left">
                <div className="form-group">
                  <p>Email</p>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="your-email@gmail.com"
                    //onChange={frmLogin.handleChange}
                  />
                </div>
                <div className="form-group password-eye">
                  <p>Password</p>
                  <input
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    //onChange={frmLogin.handleChange}
                  />
                  <span class="fa fa-eye eye-icon"></span>
                </div>
                <div className="form-group">
                  <p>Password Confirm</p>
                  <input
                    className="form-control"
                    id="password-confirm"
                    name="password-confirm"
                    placeholder="Your Password Confirm"
                    //onChange={frmLogin.handleChange}
                  />
                </div>
              </div>
              <div className="form-right">
                <div className="form-group">
                  <p>Name</p>
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    //onChange={frmLogin.handleChange}
                  />
                </div>
                <div className="form-group">
                  <p>Phone</p>
                  <input
                    className="form-control"
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Your Number"
                    //onChange={frmLogin.handleChange}
                  />
                </div>
                <div className="form-group gender">
                  Gender
                  <input
                    className="check-input-gender"
                    type="radio"
                    name="radioGender"
                    value="male"
                    id="male"
                    checked
                  />
                  <label className="check-input-label" for="radioGender">
                    Male
                  </label>
                  <input
                    className="check-input-gender"
                    type="radio"
                    name="radioGender"
                    value="female"
                    id="female"
                  />
                  <label className="check-input-label" for="radioGender">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group sub-res">
              <button type="submit" className="btn my-4 w-100">
                Register
              </button>
            </div>

            <div className="form-group text-center login-account">
              <span>If you have an account? </span>
              <NavLink to={"/login"}>Login here</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

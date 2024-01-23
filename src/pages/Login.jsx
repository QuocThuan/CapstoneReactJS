import React, { useEffect, useState } from "react";
import "../assets/sass/login.scss";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { loginApiAction } from "../redux/Reducers/UserReducers";
import LoginFacebook from "./LoginFacebook";

const Login = () => {
  //set show pass login
  const [showPassword, setShowPassword] = useState(false);
  const hanleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      password: yup
        .string()
        .required("Mật khẩu không được bỏ trống")
        .min(1, "Mật khẩu phải tối thiểu 8 kí tự")
        // .matches(
        //   /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[0-9]).{8,}$/,
        //   "Mật khẩu tối thiểu 8 ký tự có ít nhất 1 kí tự đặc biệt, 1 chữ hoa và 1 số"
        // ),
    }),
    onSubmit: async (userLogin) => {
      const action = loginApiAction(userLogin);

      dispatch(action);
      //console.log(userLogin);
    },
  });
  useEffect(() => {}, []);
  return (
    <div className="page-login">
      <div className="row my-5">
        <div className="col-4 p-0">
          <img
            src="https://localbrand.vn/wp-content/uploads/2020/03/local-brand-giay-ananas-sneaker-viet-nam.jpg"
            alt="..."
            className="w-100"
          />
        </div>
        <div className="col-8">
          <form className="form-login" onSubmit={frmLogin.handleSubmit}>
            <h3 className="text-center">Welcome</h3>
            <div className="form-group">
              <p>Email</p>
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="your-email@gmail.com"
                onChange={frmLogin.handleChange}
              />
              <p className="text text-danger">
                {frmLogin.errors.email && frmLogin.errors.email}
              </p>
            </div>
            <div className="form-group password-eye">
              <p>Password</p>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                placeholder="Your Password"
                onChange={frmLogin.handleChange}
              />

              <span type="button" class=" eye-icon" onClick={hanleShowPassword}>
                {showPassword ? (
                  <i class="fa fa-eye-slash"></i>
                ) : (
                  <i class="fa fa-eye"></i>
                )}
              </span>
            </div>
            <p className="text text-danger">
              {frmLogin.errors.password && frmLogin.errors.password}
            </p>
            <div className="form-group">
              <button type="submit" className="btn my-4 w-100">
                Login
              </button>
            </div>
            <div className="form-group login-facebook text-center ">
              <NavLink>
                Or you can countine with
                <span className="facebook-link">
                  <LoginFacebook />
                </span>
              </NavLink>
            </div>
            <div className="form-group text-center register-account">
              <span>If you do not already have an account? </span>
              <NavLink to={"/register"}>Register here</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "../assets/sass/register.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerApiAction } from "../redux/Reducers/UserReducers";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const hanleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const frmRegister = useFormik({
    initialValues: {
      email: "",
      password: "",
      "password-confirm": "",
      name: "",
      phone: "",
      gender: true,
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      password: yup
        .string()
        .required("Mật khẩu không được bỏ trống")
        .min(8, "Mật khẩu phải tối thiểu 8 kí tự")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[0-9]).{8,}$/,
          "Mật khẩu tối thiểu 8 ký tự có ít nhất 1 kí tự đặc biệt, 1 chữ hoa và 1 số"
        ),
      "password-confirm": yup
        .string()
        .required("Xác nhận mật khẩu không được bỏ trống")
        .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
      name: yup
        .string()
        .required("Tên không được bỏ trống")
        .matches(
          /^[a-zA-Zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ\s]+$/u,
          "Tên cần đúng định dạng"
        ),
      phone: yup
        .string()
        .required("Số điện thoại không được bỏ trống")
        .matches(/^0\d{9}$/, "Số điện thoại phải có 10 số và bắt đầu bằng 0"),
    }),
    onSubmit: (userRegister) => {
      const action = registerApiAction(userRegister);
      dispatch(action);
    },
  });
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
          <form className="form-register" onSubmit={frmRegister.handleSubmit}>
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
                    onChange={frmRegister.handleChange}
                  />
                </div>
                <p className="text text-danger">
                  {frmRegister.errors.email && frmRegister.errors.email}
                </p>
                <div className="form-group password-eye">
                  <p>Password</p>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    onChange={frmRegister.handleChange}
                  />
                  <span
                    type="button"
                    class="eye-icon"
                    onClick={hanleShowPassword}
                  >
                    {showPassword ? (
                      <i class="fa fa-eye-slash"></i>
                    ) : (
                      <i class="fa fa-eye"></i>
                    )}
                  </span>
                </div>
                <p className="text text-danger">
                  {frmRegister.errors.password && frmRegister.errors.password}
                </p>
                <div className="form-group">
                  <p>Password Confirm</p>
                  <input
                    type="password"
                    className="form-control"
                    id="password-confirm"
                    name="password-confirm"
                    placeholder="Your Password Confirm"
                    onChange={frmRegister.handleChange}
                  />
                </div>
                <p className="text text-danger">
                  {frmRegister.errors["password-confirm"] &&
                    frmRegister.errors["password-confirm"]}
                </p>
              </div>
              <div className="form-right">
                <div className="form-group">
                  <p>Name</p>
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    onChange={frmRegister.handleChange}
                  />
                </div>
                <p className="text text-danger">
                  {frmRegister.errors.name && frmRegister.errors.name}
                </p>
                <div className="form-group">
                  <p>Phone</p>
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Your Number"
                    onChange={frmRegister.handleChange}
                  />
                </div>
                <p className="text text-danger">
                  {frmRegister.errors.phone && frmRegister.errors.phone}
                </p>

                <div
                  className="form-group gender"
                  name="gender"
                  id="gender"
                  onChange={frmRegister.handleChange}
                >
                  Gender
                  <input
                    className="check-input-gender"
                    type="radio"
                    name="gender"
                    value={true}
                    id="male"
                    defaultChecked
                  />
                  <label className="check-input-label" for="gender">
                    Male
                  </label>
                  <input
                    className="check-input-gender"
                    type="radio"
                    name="gender"
                    value={false}
                    id="female"
                  />
                  <label className="check-input-label" for="gender">
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

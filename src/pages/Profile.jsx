import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  getProfileApiAction,
  updateProfileAction,
  updateProfileApiAction,
} from "../redux/Reducers/UserReducers";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { userProfile } = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();

  const formProfile = useFormik({
    initialValues: {
      name: userProfile.name || "",
      email: userProfile.email || "",
      phone: userProfile.phone || "",
      password: userProfile.password || "",
      gender: userProfile.gender === true || false,
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

    onSubmit: async (values) => {
      const action = updateProfileApiAction(values);
      dispatch(action);
      console.log('user profile',userProfile)
      console.log('new values',values)
    },
  });

  const getProfileApi = async () => {
    const action = getProfileApiAction();
    dispatch(action);
  };
  console.log(userProfile.ordersHistory);

  useEffect(() => {
    // Fetch user profile when component mounts
    getProfileApi()
  }, [dispatch]);

  useEffect(() => {
    formProfile.setValues({
      name: userProfile.name || "",
      email: userProfile.email || "",
      phone: userProfile.phone || "",
      password: userProfile.password || "",
      gender: userProfile.gender === true || false,
    });
  }, [userProfile, formProfile.setValues]);

  return (
    <div className="container">
      <h3 className="mt-3">Profile</h3>
      <div className="row mt-3">
        <div className="col-md-4">
          <img
            src={userProfile.avatar}
            alt="Avatar"
            className="img-fluid rounded-circle mb-3"
            width={200}
          />
        </div>
        <div className="col-md-8">
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formProfile.values.name} 
                  onChange={formProfile.handleChange}
                  onBlur={formProfile.handleBlur}
                />
                <p className="text text-danger">
                  {formProfile.errors.name && formProfile.errors.name}
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formProfile.values.email}
                  onChange={formProfile.handleChange}
                  onBlur={formProfile.handleBlur}
                />
                <p className="text text-danger">
                  {formProfile.errors.email && formProfile.errors.email}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formProfile.values.phone}
                  onChange={formProfile.handleChange}
                  onBlur={formProfile.handleBlur}
                />
                <p className="text text-danger">
                  {formProfile.errors.phone && formProfile.errors.phone}
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={userProfile.password}
                  onChange={formProfile.password}
                />
              </div>
              <div
                className="form-group gender d-flex col-md-6 mb-3"
                name="gender"
                id="gender"
              >
                Gender
                <input
                  className="check-input-gender mx-2"
                  type="radio"
                  name="gender"
                  value={true}
                  id="male"
                  checked={formProfile.values.gender === true}
                  onChange={() => formProfile.setFieldValue("gender", true)}
                />
                <label className="check-input-label" htmlFor="male">
                  Male
                </label>
                <input
                  className="check-input-gender mx-2"
                  type="radio"
                  name="gender"
                  value={false}
                  id="female"
                  checked={formProfile.values.gender === false}
                  onChange={() => formProfile.setFieldValue("gender", false)}
                />
                <label className="check-input-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-secondary">
              Update
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div>
        <h4>Order history</h4>
        {userProfile.ordersHistory?.map((order) => {
          return (
            <div key={order.id} className="mt-5">
              <p className="fw-bold">
                This order has been placed on {order.date}
              </p>
              <table className="table">
                <thead>
                  <tr className="table-secondary">
                    <th scope="col">Order ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderDetail.map((detail) => {
                    return (
                      <tr key={detail.name}>
                        <td>{order.id}</td>
                        <td>
                          <img src={detail.image} alt="" width={80} />
                        </td>
                        <td>{detail.name}</td>
                        <td>{detail.price}</td>
                        <td>{detail.quantity}</td>
                        <td>{detail.price * detail.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;

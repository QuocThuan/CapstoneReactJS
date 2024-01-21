import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});

  const getProfileApi = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/getProfile",
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(res.data.content);
    setUserProfile(res.data.content);
  };
  console.log(userProfile.ordersHistory)

  useEffect(() => {
    //call api to get profile
    getProfileApi();
  }, []);

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
                  value={userProfile.name}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={userProfile.email}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={userProfile.phone}
                />
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
                />
              </div>
              <div className="d-flex col-md-6 mb-3">
                <label className="form-label me-3">Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    defaultValue="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check ms-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    defaultValue="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
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
          return <div key={order.id} className="mt-5">
            <p className="fw-bold">This order has been placed on {order.date}</p>
            <table className="table">
              <thead>
                <tr className="table-secondary">
                  <th scope="col">Order ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quanlity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  order.orderDetail.map((detail) => {
                    return <tr key={detail.name}>
                    <td>{order.id}</td>
                    <td>
                      <img
                        src={detail.image}
                        alt=""
                        width={80}
                      />
                    </td>
                    <td>{detail.name}</td>
                    <td>{detail.price}</td>
                    <td>{detail.quantity}</td>
                    <td>{detail.price * detail.quantity}</td>
                  </tr>
                  } )
                }
              </tbody>
            </table>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Profile;

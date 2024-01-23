import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutApiAction } from "../../redux/Reducers/UserReducers";


const Header = () => {
  const { number } = useSelector((state) => state.CartSlice);

  const { userLogin } = useSelector((state) => state.userReducers);
  console.log(userLogin);

  const dispatch = useDispatch();
  const logoutUser = (userLogin) => {
    const action = logoutApiAction(userLogin);
    dispatch(action);
  };

  return (
    <div className="header bg-secondary">
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
          <NavLink className="navbar-brand" to="/">
            Shoes Shop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="search" aria-current="page">
                  Search
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <NavLink to="search" className="btn btn-dark my-2 my-sm-0" type="submit">
                Search
              </NavLink>

              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown mx-2">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {userLogin.email !== "" ? (
                      <NavLink className="text-light" to={"/"}>
                        {userLogin.email}
                      </NavLink>
                    ) : (
                      <NavLink className="text-light" to={"login"}>
                        <i
                          className="fa-regular fa-user fa-xl"
                          style={{ color: "#fff" }}
                        ></i>
                      </NavLink>
                    )}
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    {userLogin.email === "" ? (
                      <>
                        <NavLink className="dropdown-item" to={"login"}>
                          Login
                        </NavLink>
                        <NavLink className="dropdown-item" to={"register"}>
                          Register
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink className="dropdown-item" to={"profile"}>
                          My Account
                        </NavLink>
                        <NavLink
                          className="dropdown-item"
                          to={"login"}
                          onClick={logoutUser}
                        >
                          Logout
                        </NavLink>
                      </>
                    )}
                  </div>
                </li>

                <li className="nav-item my-2">
                  <NavLink to={userLogin.email ? "cart" : "login"}>
                    <i
                      className="fa-solid fa-cart-shopping fa-xl"
                      style={{ color: "#fff" }}
                    >
                      <span className="fs-4 ms-2">({number})</span>
                    </i>
                  </NavLink>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

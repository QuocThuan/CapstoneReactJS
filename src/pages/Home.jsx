import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import ProductCarousel from "./ProductCarousel";
import {
  getAllProductApiAction,
  getProductFavouriteApiAction,
} from "../redux/Reducers/UserReducers";

const Home = () => {
  const { arrProduct, productFavourite, userLogin } = useSelector(
    (state) => state.userReducers
  );
  const dispatch = useDispatch();
  const getAllProductAPI = async () => {
    const action = getAllProductApiAction();
    dispatch(action);
  };
  const getProductFavouriteAPI = async (userLogin) => {
    const action = getProductFavouriteApiAction(userLogin);
    dispatch(action);
  };

  useEffect(() => {
    //gọi api trong useEffect didmount
    getAllProductAPI();

    // getProductFavouriteAPI(userLogin);
  }, []);
  useEffect(() => {
    getProductFavouriteAPI(userLogin);
  }, [userLogin]);
  return (
    <div>
      <ProductCarousel />
      <div className="container py-5 home-product">
        <h2 className="text-center pb-3">List Product Shoes</h2>
        <div className="row">
          {arrProduct?.map((prod) => {
            const isFavorite = productFavourite?.includes(prod.id);

            // Thiết lập màu cho icon
            const heartColor = isFavorite ? "#d03333" : "black";
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 product-detail"
                key={prod.id}
              >
                {/* xử lý icon heart */}
                {userLogin.email !== "" ? (
                  <i
                    className="fa fa-heart heart-icon"
                    style={{ color: heartColor }}
                  ></i>
                ) : (
                  ""
                )}

                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/${prod.id}`}
                  className="card"
                >
                  <img src={prod.image} alt="..." />
                  <div className="card-body">
                    <div class="item-title">
                      <h5>{prod.name}</h5>
                      <p class="mb-2">
                        {prod.description.slice(0, 46) + "..."}
                      </p>
                    </div>
                    <div class="item-star text-warning mb-3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="item-info d-flex justify-content-evenly">
                      <NavLink
                        className="btn btn-dark btn-buy"
                        to={`/${prod.id}`}
                      >
                        Buy now
                      </NavLink>
                      <NavLink
                        className="btn btn-dark  btn-price"
                        to={`/${prod.id}`}
                      >
                        {prod.price}$
                      </NavLink>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/sass/home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductApiAction } from "../redux/Reducers/UserReducers";
import { NavLink } from "react-router-dom";

const ProductCarousel = () => {
  const { arrProduct } = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();
  const getAllProductAPI = async () => {
    const action = getAllProductApiAction();
    dispatch(action);
  };

  useEffect(() => {
    //gọi api trong useEffect didmount
    getAllProductAPI();
  }, []);
  return (
    <Carousel className="product-carousel">
      {arrProduct.map((prod) => {
        return (
          <Carousel.Item>
            <div className="carousel-content">
              <div className="image-container">
                <img src={prod.image} alt="..." />
              </div>
              <div className="product-info">
                <h3 className="fs-2 fw-bold">{prod.name}</h3>
                <p className="fs-6">{prod.description.slice(0, 46) + "..."}</p>
                <NavLink className="buy-button" to={`/${prod.id}`}>
                  Buy Now
                </NavLink>
              </div>
            </div>
          </Carousel.Item>
        );
      })}

      {/* <Carousel.Item>
        <div className="carousel-content">
          <div className="image-container">
            <img
              src="https://shop.cyberlearn.vn/images/adidas-prophere-customize.png"
              alt="Product Image"
            />
          </div>
          <div className="product-info">
            <h3>Product Name</h3>
            <p>Description of the product goes here.</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content">
          <div className="image-container">
            <img
              src="https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png"
              alt="Product Image"
            />
          </div>
          <div className="product-info">
            <h3>Product Name</h3>
            <p>Description of the product goes here.</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default ProductCarousel;

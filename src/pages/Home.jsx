import React, { useEffect, useState, useDispatch, useSelector } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import ProductCarousel from "./ProductCarousel";

const Home = () => {
  const [arrProduct, setArrProduct] = useState([]);
  console.log("arrProduct", arrProduct);
  const getAllProductAPI = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    setArrProduct(res.data.content);
  };

  useEffect(() => {
    //gọi api trong useEffect didmount
    getAllProductAPI();
  }, []);
  return (
    <div className="container">
      <h3>Home</h3>
      <div className="row">
        {arrProduct.map((prod) => {
          return (
            <div className="col-md-4 mt-2" key={prod.id}>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/${prod.id}`}
                className="card"
              >
                <img src={prod.image} alt="..." />
                <div className="card-body">
                  <h5>{prod.name}</h5>

                  <NavLink className="btn btn-dark" to={`/${prod.id}`}>
                    Buy now
                  </NavLink>
                  <NavLink className="btn btn-primary mx-3">
                    ${prod.price}
                  </NavLink>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

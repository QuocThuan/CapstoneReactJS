import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);
  console.log(arrProduct);

  const key = searchParams.get("keyword"); //get keyword from url

  const formSearch = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: ({keyword}) => {
      console.log(keyword);
      //send key word to url
      setSearchParams({
        keyword: keyword,
      });
    },
  });
  const getProductByKeyword = async () => {
    //call api, render products based on keyword
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${key}`,
      method: "GET",
    });

    setArrProduct(res.data.content);
  };

  useEffect(() => {
    getProductByKeyword();
  }, [key]);
  return (
    <div className="container">
      <h3>Search</h3>
      <form className="frm-search mt-2" onSubmit={formSearch.handleSubmit}>
        <div className="input-group mb-3">
          <button className="input-group-button btn btn-dark">Search</button>
          <div className="form-floating">
            <input
              className="form-control"
              id="keyword"
              name="keyword"
              placeholder="Username"
              onChange={formSearch.handleChange}
            />
            <label htmlFor="floatingInputGroup1">Enter the keyword</label>
          </div>
        </div>
      </form>

      <h3 className="my-2">Search results</h3>
      <div className="container">
        <div className="row">
          {arrProduct.map((prod) => {
            return (
              <div className="col-md-4 mt-2" key={prod.id}>
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/detail/${prod.id}`}
                className="card"
              >
                <img src={prod.image} alt="..." />
                <div className="card-body">
                  <h5>{prod.name}</h5>

                  <NavLink className="btn btn-dark" to={`/detail/${prod.id}`}>
                    Buy now
                  </NavLink>
                  <NavLink className="btn btn-primary mx-3">
                    {prod.price}
                  </NavLink>
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

export default Search;

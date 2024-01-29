import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { orderBy } from "lodash";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const { productFavourite, userLogin } = useSelector(
    (state) => state.userReducers
  );

  const key = searchParams.get("keyword");

  const formSearch = useFormik({
    initialValues: {
      keyword: key || "",
    },
    onSubmit: ({ keyword }) => {
      setSearchParams({
        keyword: keyword,
      });
    },
  });

  const getProductByKeyword = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${key}`,
      method: "GET",
    });

    const orderedProducts = orderBy(res.data.content, ["price"], [sortOrder]);
    setArrProduct(orderedProducts);
  };

  useEffect(() => {
    getProductByKeyword();
  }, [key, sortOrder]);

  const handleSortChange = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

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
              placeholder="Enter the keyword"
              onChange={formSearch.handleChange}
              value={formSearch.values.keyword}
            />
            <label htmlFor="floatingInputGroup1">Enter the keyword</label>
          </div>
        </div>
      </form>

      <h3 className="my-2">Search results</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <label htmlFor="sortOrder" className="mx-2">
              Sort Order:
            </label>
            <select
              id="sortOrder"
              name="sortOrder"
              className="form-select"
              onChange={handleSortChange}
              value={sortOrder}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <div className="row">
          {arrProduct?.map((prod) => {
            const isFavorite = productFavourite?.includes(prod.id);
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 product-detail my-3"
                key={prod.id}
              >
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

export default Search;

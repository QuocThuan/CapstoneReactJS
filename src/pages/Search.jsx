import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { orderBy } from "lodash"; 

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

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
        {arrProduct.map((prod) => {
  return (
    <div className="col-md-4 mt-4" key={prod.id}>
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
            {prod.price}$
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





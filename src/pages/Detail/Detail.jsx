import React, { useEffect, useState } from "react";
import { getByIdPageDetail } from "./../../services/detail";
import { useDispatch } from "react-redux";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { productToCart } from "../../redux/slices/CartSlice";

const Detail = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  let [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const [pathId, setPathId] = useState(id);

  useEffect(() => {
    getByIdPageDetail
      .getById(pathId)
      .then((res) => {
        console.log(res);
        setProduct(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pathId]);

  useEffect(() => {
    if (product.length > 0) {
      const sizeProduct = product[0].size;
      console.log(sizeProduct);
    }
  }, [product]);

  const sizeProduct = product.size;

  const buttonUp = () => {
    setQuantity((quantity += 1));
  };

  const buttonDown = () => {
    if (quantity == 1) {
      setQuantity(1);
    } else {
      setQuantity((quantity -= 1));
    }
  };

  const [productRelate, setProductRelate] = useState([]);

  const handleButtonClick = (newId) => {
    setPathId(newId);
  };

  const handleNavLink = (newId) => {
    return `/${newId}`;
  };

  useEffect(() => {
    if (pathId) {
      getByIdPageDetail
        .getById(pathId)
        .then((res) => {
          // console.log(res);
          setProductRelate(res.data.content.relatedProducts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pathId]);

  // console.log(productRelate);
  return (
    <div>
      <div className="container mx-auto max-w-screen-xl mt-5">
        <div className="d-flex align-items-center justify-content-between">
          <div className="w-50 py-2 bg-light">
            <div className="w-100 d-flex justify-content-center">
              <img src={product.image} className="w-75" alt="" />
            </div>
          </div>
          <div className="w-50 ms-5">
            <h3 className="fs-2 fw-bold mb-2">{product.name}</h3>
            <p className="fs-6 mb-2">{product.description}</p>
            <h3 className="mb-3 text-success fs-4 fw-medium">Available size</h3>
            {sizeProduct
              ? sizeProduct.map((item, index) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name="options"
                        className="d-none"
                        id={`option${index}`}
                        autoComplete="off"
                        checked
                      />
                      <label
                        className="py-2 px-3 bg-secondary fw-bold d-inline-block me-2 mb-2"
                        for={`option${index}`}
                      >
                        {item}
                      </label>
                    </>
                  );
                })
              : ""}

            <p className="text-danger fw-bold fs-3 mt-2">{product.price}$</p>

            <form className="max-w-xs mt-1">
              <div className="relative d-flex align-items-start">
                <button
                  type="button"
                  id="decrement-button"
                  onClick={buttonUp}
                  data-input-counter-decrement="quantity-input"
                  className="bg-primary border-0 py-2 px-3"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="border-0 text-center text-black fs-5"
                  style={{ width: "10%", lineHeight: "35px" }}
                  placeholder={quantity}
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  onClick={buttonDown}
                  data-input-counter-increment="quantity-input"
                  className="bg-primary border-0 py-2 px-3"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>
            </form>

            <button
              onClick={() => dispatch(productToCart({ product, quantity }))}
              className="bg-primary py-2 px-4 mt-3 text-white border-0"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="container max-w-screen-xl my-5">
        <h2 className="fs-2 fw-medium mb-5 text-center">- Relate Product -</h2>
        <div className="mb-4">
          <div className="row">
            {productRelate.map((item, index) => {
              return (
                <div className="col-6 col-lg-4 mt-lg-4">
                  <div onClick={() => handleButtonClick(item.id)} class="card ">
                    <div className="d-flex justify-content-center">
                      <img
                        src={item.image}
                        class="card-img-top w-75  "
                        alt="..."
                      />
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>
                      <p class="card-text text-truncate">{item.description}</p>
                      <NavLink
                        to={handleNavLink(item.id)}
                        onClick={() => handleButtonClick(item.id)}
                        className="d-inline-block text-center rounded shadow-sm bg-primary text-white w-50 py-3"
                      >
                        Buy Now
                      </NavLink>
                      <a
                        to="#"
                        onClick={() => handleButtonClick(item.id)}
                        className="btn bg-light w-50 fw-semibold fs-6 py-3"
                      >
                        {item.price}$
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

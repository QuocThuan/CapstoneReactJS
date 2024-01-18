import React, { useEffect, useState } from 'react';
import { getByIdPageDetail } from "./../../util/detail";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  let [quanlity, setQuanlity] = useState(1);

  useEffect(() => {
    console.log("first");
    getByIdPageDetail
      .getById()
      .then((res) => {
        console.log(res);
        setProduct(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      const sizeProduct = product[0].size;
      console.log(sizeProduct);
    }
  }, [product]);

  const sizeProduct = product.size;

  const buttonUp = () => {
    setQuanlity((quanlity += 1));
  };

  const buttonDown = () => {
    if (quanlity == 1) {
      setQuanlity(1);
    } else {
      setQuanlity((quanlity -= 1));
    }
  };

  return (
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
                      className="py-2 px-3 bg-secondary fw-bold d-inline-block me-2"
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
                placeholder={quanlity}
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

          <button className="bg-primary py-2 px-4 mt-3 text-white border-0">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import React, { useState } from "react";

const Cart = () => {
  let [quanlity, setQuanlity] = useState(1);

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
    <div className="container">
      <h2 className="mt-5">Cart</h2>
      <hr className="mt-4" />
      <table class="table">
        <thead>
          <tr className="text-center">
            <th scope="col">
              <i class="fa-solid fa-check bg-primary p-1 text-white"></i>
            </th>
            <th scope="col">Id</th>
            <th scope="col">Img</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quanlity</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th scope="row">
              <i class="fa-solid fa-check bg-primary p-1 text-white"></i>
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td style={{ width: "15%" }}>
              <form className="w-100 d-flex justify-content-center">
                <div className="relative align-items-start">
                  <button
                    type="button"
                    id="decrement-button"
                    onClick={buttonUp}
                    data-input-counter-decrement="quantity-input"
                    className="bg-primary border-0 py-1 px-2"
                  >
                    <i
                      class="fa-solid fa-plus text-white"
                      style={{ fontSize: "10px" }}
                    ></i>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="border-0 text-center text-black fs-6"
                    style={{ width: "20%" }}
                    placeholder={quanlity}
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    onClick={buttonDown}
                    data-input-counter-increment="quantity-input"
                    className="bg-primary border-0 py-1 px-2"
                  >
                    <i
                      class="fa-solid fa-minus text-white"
                      style={{ fontSize: "10px" }}
                    ></i>
                  </button>
                </div>
              </form>
            </td>
            <td>@mdo</td>
            <td>
              <button className="py-1 px-3 bg-primary border-0 text-white">
                Edit
              </button>
              <button className="ms-3 py-1 px-3 bg-danger border-0 text-white">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button type="button" class="btn bg-warning border-0 me-5">
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Cart;

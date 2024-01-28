import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getByIdPageDetail } from "./../../services/detail";
import { deleteId, upNumber, downNumber } from "../../redux/slices/CartSlice";
import { message } from "antd";

const Cart = () => {
  const { arrProduct } = useSelector((state) => state.CartSlice);
  const { userLogin } = useSelector((state) => state.userReducers);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const submitOrder = {
    orderDetail: arrProduct.slice(1).map((item, index) => {
      return { productId: String(item.product.id), quantity: item.numberBuy };
    }),
    email: userLogin.email,
  };

  const submit = (submitOrder) => {
    getByIdPageDetail
      .postOrder(submitOrder)
      .then((res) => {
        console.log(res);
        messageApi.info("Bạn đã order thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {contextHolder}
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
            {arrProduct.slice(1).map((item, index) => {
              const total = item.product.price * item.numberBuy;
              return (
                <tr className="text-center" style={{ verticalAlign: "middle" }}>
                  <th scope="row">
                    <i class="fa-solid fa-check bg-primary p-1 text-white"></i>
                  </th>
                  <td>{item.product.id}</td>
                  <td style={{ width: "10%" }}>
                    <img src={item.product.image} className="w-100" alt="" />
                  </td>
                  <td>{item.product.name}</td>
                  <td>{item.product.price}</td>
                  <td style={{ width: "15%" }}>
                    <form className="w-100 d-flex justify-content-center">
                      <div className="relative align-items-start">
                        <button
                          type="button"
                          id="decrement-button"
                          onClick={() => dispatch(upNumber(item.product.id))}
                          data-input-counter-decrement="quantity-input"
                          className="bg-primary border-0 py-1 px-2 d-block d-lg-inline-block"
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
                          className="border-0 text-center text-black fs-6 d-block d-lg-inline-block"
                          style={{ width: "20%" }}
                          placeholder={item.numberBuy}
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          onClick={() => dispatch(downNumber(item.product.id))}
                          data-input-counter-increment="quantity-input"
                          className="bg-primary border-0 py-1 px-2 d-block d-lg-inline-block"
                        >
                          <i
                            class="fa-solid fa-minus text-white"
                            style={{ fontSize: "10px" }}
                          ></i>
                        </button>
                      </div>
                    </form>
                  </td>
                  <td>{total}</td>
                  <td>
                    <button className="py-1 px-3 bg-primary border-0 text-white mb-2">
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteId(item.product.id))}
                      className="ms-3 py-1 px-3 bg-danger border-0 text-white mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            onClick={() => submit(submitOrder)}
            class="btn bg-warning border-0 me-5 mb-4"
          >
            Submit Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

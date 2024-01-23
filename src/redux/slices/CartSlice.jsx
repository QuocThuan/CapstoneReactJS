import { createSlice, current } from "@reduxjs/toolkit";

// initalState
const initialState = {
  number: 0,
  arrProduct: [
    {
      product: [],
      numberBuy: 0,
    },
  ],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productToCart: (state, action) => {
      const { product, quantity } = action.payload;

      if (state.arrProduct[0].product !== undefined) {
        const existingProduct = state.arrProduct.find(
          (item) => item.product.id === product.id
        );
        if (existingProduct) {
          existingProduct.numberBuy += quantity;
          state.number = state.number;
        } else {
          state.arrProduct = [
            ...state.arrProduct,
            {
              product: product,
              numberBuy: quantity,
            },
          ];
          state.number++;
        }
      } else {
        state.arrProduct = [
          ...state.arrProduct,
          {
            product: product,
            numberBuy: quantity,
          },
        ];
        state.number++;
      }
    },
    deleteId: (state, action) => {
      const id = action.payload;
      // console.log(action.payload);
      const indexDelete = state.arrProduct.findIndex(
        (item) => item.product.id === id
      );
      console.log(indexDelete);
      if (indexDelete != -1) {
        state.arrProduct.splice(indexDelete, 1);
        state.number--;
      }
    },
    upNumber: (state, action) => {
      const id = action.payload;

      const indexDelete = state.arrProduct.findIndex(
        (item) => item.product.id === id
      );
      console.log(indexDelete);
      if (indexDelete != -1) {
        state.arrProduct[indexDelete].numberBuy++;
      }
    },
    downNumber: (state, action) => {
      const id = action.payload;

      const indexDelete = state.arrProduct.findIndex(
        (item) => item.product.id === id
      );
      console.log(indexDelete);
      if (indexDelete != -1) {
        state.arrProduct[indexDelete].numberBuy--;
      }
    },
  },
});

export const { productToCart, deleteId, upNumber, downNumber } =
  CartSlice.actions;

export default CartSlice.reducer;

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
        console.log(existingProduct);
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

      //   for (let item of state.arrProduct) {
      //     if (item.product.id === product.id) {
      //       item.numberBuy++;
      //     } else {
      //       state.arrProduct = [
      //         ...state.arrProduct,
      //         {
      //           product: product,
      //           numberBuy: quantity,
      //         },
      //       ];
      //     }
      //   }
    },
  },
});

export const { productToCart } = CartSlice.actions;

export default CartSlice.reducer;

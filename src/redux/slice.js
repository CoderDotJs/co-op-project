import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allProducts: [],
    cart: [],
    wishList: [],
}

export const productsReducer = createSlice({
  name: 'softy-shop',
  initialState,
  reducers: {
      setProducts: (state, {payload}) => {
          state.allProducts = [...payload];
      },
      addProduct: (state, { payload }) => {
          const existProduct = state.cart.find(pd => pd.id === payload.id);
          if (existProduct) {
              existProduct.quantity += 1;
              const remainingProducts = state.cart.filter(pd => pd.id != payload.id);
              state.cart = [...remainingProducts, existProduct];
          }
          else {
              state.cart = [...state.cart, payload];
          }
      },
      addWishList: (state, { payload }) => {
          state.wishList = [...state.wishList, payload];
      }
  },
})

export const { setProducts, addProduct, addWishList } = productsReducer.actions

export default productsReducer.reducer
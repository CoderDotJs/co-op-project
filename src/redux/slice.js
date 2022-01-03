import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allProducts: [],
    cart: [],
    wishList: [],
    totalPrice: 0,
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
              state.totalPrice += payload.price;
          }
          else {
              state.cart = [...state.cart, payload];
              state.totalPrice += payload.price;
          }
      },
      removeProduct: (state, { payload }) => {
          state.cart = state.cart.filter(pd => pd.id != payload.id);
          state.totalPrice -= payload.price * payload.quantity;
      },
      incrementQuantity: (state, { payload }) => {
          
      },
      decrementQuantity: (state, { payload }) => {
          
      },
      addWishList: (state, { payload }) => {
          state.wishList = [...state.wishList, payload];
      }
  },
})

export const { setProducts, addProduct, addWishList, removeProduct, incrementQuantity,  decrementQuantity} = productsReducer.actions

export default productsReducer.reducer
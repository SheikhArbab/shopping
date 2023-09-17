import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.products.find(product => product.id === productToAdd.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.unshift({ ...productToAdd, quantity: 1 });
      }
    },
    removeToCart: (state, action) => { // Changed the action name here
      const productToRemove = action.payload;
      const existingProduct = state.products.find(product => product.id === productToRemove.id);

      if (existingProduct) {
        existingProduct.quantity -= 1;
      } else {
        state.products.unshift({ ...productToRemove, quantity: 1 });
      }
    },
clearCart: (state , action)=>{
state.products = action.payload
},
removeProduct: (state, action) => {
  
  state.products = state.products.filter(product => product.id !== action.payload);
},


  },
});

export const { addToCart, removeToCart, clearCart, removeProduct } = cartSlice.actions; 

export default cartSlice.reducer;

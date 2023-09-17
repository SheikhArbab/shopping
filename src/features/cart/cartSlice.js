import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart, // Use 'initialState' instead of 'initialCart'
  reducers: {
    addToCart: (state, action) => {
      // Action should contain information about the product to add to the cart.
      // You can assume action.payload has the necessary product information.
      const productToAdd = action.payload;
      
      // Check if the product is already in the cart
      const existingProduct = state.products.find(product => product.id === productToAdd.id);
      
      if (existingProduct) {
        // If the product is already in the cart, update its quantity.
        existingProduct.quantity += 1;
      } else {
        // If it's not in the cart, add it with a quantity of 1.
        state.products.unshift({ ...productToAdd, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const  initialState = {
  side: false,
};

export const sideSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    side: (state, action) => {
 state.side += action.payload
    },
  },
});

export const { side} = sideSlice.actions;

export default sideSlice.reducer;

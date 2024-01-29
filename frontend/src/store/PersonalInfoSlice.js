import { createSlice } from "@reduxjs/toolkit";

export const personalInfoSlice = createSlice({
  name: "home",
  initialState: {
    userData: {},
    images: {}
  },
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload;
    },
    getImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const {getUserData,getImages} = personalInfoSlice.actions
export default personalInfoSlice.reducer
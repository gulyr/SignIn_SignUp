import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isSignUpMode: false,
  },
  reducers: {
    enableSignUpMode: (state) => {
      state.isSignUpMode = true;
    },
    enableSignInMode: (state) => {
      state.isSignUpMode = false;
    },
  },
});

export const { enableSignUpMode, enableSignInMode } = authSlice.actions;
export default authSlice.reducer;

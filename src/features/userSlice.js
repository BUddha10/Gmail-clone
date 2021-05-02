import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//exporting the action to dispatch
export const { login, logout } = userSlice.actions;

//exporting the state value to use on useSelector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

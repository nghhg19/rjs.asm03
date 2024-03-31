import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("currentuser")) || {},
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGNIN: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        state.currentUser = user;
        localStorage.setItem("currentuser", JSON.stringify(state.currentUser));
      }
    },
    SIGNOUT: (state) => {
      state.currentUser = {};
      localStorage.removeItem("currentuser");
    },
    SIGNUP: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { SIGNIN, SIGNOUT, SIGNUP } = UserSlice.actions;
export default UserSlice.reducer;

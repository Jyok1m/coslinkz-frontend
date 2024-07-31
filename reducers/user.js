import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: null,
    avatar: null,
    confirm: null,
    access: null,
    refresh: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.username = action.payload.username;
      state.value.confirm = action.payload.confirm;
      state.value.access = action.payload.access;
      state.value.refresh = action.payload.refresh;
    },
    logout: (state, action) => {
      state.value.username = null;
      state.value.confirm = null;
      state.value.access = null;
      state.value.refresh = null;
    },
    addProfilePic: (state, action) => {
      state.value.avatar = action.payload;
    },
  },
});

export const { login, logout, addProfilePic } = userSlice.actions;
export default userSlice.reducer;

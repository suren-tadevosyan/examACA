import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  allUsers: [],
};

const userSlices = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload.name;
    },
    setAllUsers: (state, action) => {
      state.allUsers = [...action.payload.data.users];
    },
  },
});

export const { addUser, setAllUsers } = userSlices.actions;

export default userSlices.reducer;

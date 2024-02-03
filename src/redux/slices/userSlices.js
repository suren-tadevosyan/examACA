import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlices = createSlice({
  name: "users",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload.name;
    },
  },
});

export const { addUser } = userSlices.actions;

export default userSlices.reducer;

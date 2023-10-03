import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '~/types';
const initialState = {
  isSignedIn: false,
  currentUser: {} as UserType,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSignIn: (state, action) => {
      state.isSignedIn = true;
      state.currentUser = action.payload;
    },
    refreshAccessToken: (state, action) => {
      state.currentUser.accessToken = action.payload;
    },
  },
});

export default authSlice;
export const { authSignIn, refreshAccessToken } = authSlice.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false, // User is logged out initially
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true; // Set isLoggedIn to true
    },
    logout: (state) => {
      state.isLoggedIn = false; // Set isLoggedIn to false
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
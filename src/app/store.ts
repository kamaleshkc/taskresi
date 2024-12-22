import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postSlice';
import authReducer from '../features/authSlice'
import cartReducer from '../features/cartSlice'
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
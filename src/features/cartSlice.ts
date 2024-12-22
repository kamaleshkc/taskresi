import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NFT {
  id?: string;
  title: string;
  price: number;
  image?: string;
}

interface CartState {
  items: NFT[];
}

const initialState: CartState = {
  items: [], // Initial empty cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<NFT>) => {
      state.items.push(action.payload); // Add NFT to cart
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Remove NFT by id
    },
    clearCart: (state) => {
      state.items = []; // Clear all items from the cart
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
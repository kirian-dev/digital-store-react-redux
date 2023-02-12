import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from './cart.interface';
import { IProduct } from '@/types/product.interface';

const initialState: CartState = {
  items: [],
  total: 0,
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        const newItems = state.items.map((item) => {
          if (item.id === existingItem.id) {
            return { ...item, quantity: (item.quantity || 0) + 1 };
          }
          return item;
        });
        return { ...state, items: newItems, total: state.total + action.payload.price };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem && existingItem.quantity) {
        existingItem.quantity -= 1;
        state.total -= action.payload.price;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (existingItemIndex >= 0) {
        const existingItem = state.items[existingItemIndex];
        state.items.splice(existingItemIndex, 1);
        state.total -= existingItem.price * (existingItem.quantity || 1);
      }
    },
  },
});

export const { actions: cartActions, reducer: cartReducer } = slice;

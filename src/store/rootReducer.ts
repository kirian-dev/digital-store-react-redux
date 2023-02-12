import { combineReducers } from 'redux';
import { cartReducer } from './slices/cart/cartSlice';
import { userReducer } from './slices/user/user.slice';

export const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

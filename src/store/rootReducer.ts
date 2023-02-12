import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import { cartReducer } from './slices/cart/cartSlice';
import { userReducer } from './slices/user/user.slice';

export const reducers = combineReducers({
  toastr: toastrReducer,
  cart: cartReducer,
  user: userReducer,
});

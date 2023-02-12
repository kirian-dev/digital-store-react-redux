import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import { cartReducer } from './slices/cartSlice';

export const reducers = combineReducers({
  toastr: toastrReducer,
  cart: cartReducer,
});

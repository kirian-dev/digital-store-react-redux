import { cartActions } from "./slices/cart/cartSlice";
import * as userActions from "./slices/user/user.actions";

export const allActions = {
	...cartActions,
	...userActions
}

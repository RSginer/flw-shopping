import { Action, Order } from "../../../models";
import { types } from "../actions/types";
import { addToCart } from "../actions";

export interface ICartState {
  orders: Order[];
}

export const cartReducer = (state: ICartState = {
  orders: []
}, action: Action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return addProductToCart(state, action);
    default:
      return state
  }
}

function addProductToCart(state: ICartState, action: Action): ICartState {
  const orders: Order[] = state.orders;
  const productInCart = orders.find((o: Order) => o.product.id === action.payload.id)
  
  if (productInCart) {
    productInCart.quantity++;
  } else {
    orders.push(new Order(action.payload, 1))
  }

  return {...state, orders: [...orders]};
}

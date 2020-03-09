import { Action, Order } from "../../../models";
import { types } from "../actions/types";

import * as ProductTypes from '../../Product/actions/types';

export interface ICartState {
  orders: Order[];
}

export const cartReducer = (state: ICartState = {
  orders: []
}, action: Action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return addProductToCart(state, action);
    case types.REMOVE_FROM_CART:
      return removeProductFromCart(state, action);
    case ProductTypes.types.DECREASE_STOCK_ERROR:
      return removeProductFromCart(state, action);
    case ProductTypes.types.INCREASE_STOCK_ERROR:
      return addProductToCart(state, action);
    default:
      return state
  }
}

function addProductToCart(state: ICartState, action: Action): ICartState {
  const orders: Order[] = state.orders;
  const productInCart = orders.find((o: Order) => o.product.id === action.payload.id)

  if (productInCart) {
    action.payload.stock > 0 && productInCart.quantity++;
  } else {
    action.payload.stock > 0 && orders.push(new Order(action.payload, 1));
  }

  return { ...state, orders: [...orders] };
}

function removeProductFromCart(state: ICartState, action: Action): ICartState {
  let orders: Order[] = state.orders;
  const productInCart = orders.find((o: Order) => o.product.id === action.payload.id)

  if (productInCart && productInCart.quantity > 1) {
    productInCart.quantity--;
  } else {
    orders = orders.filter((o) => o.product.id !== action.payload.id)
  }

  return { ...state, orders: [...orders] };
}
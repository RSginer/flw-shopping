import { Action, Order } from "../../../models";

export interface ICartState {
  orders: Order[];
}

export const cartReducer = (state: ICartState = {
  orders: []
}, action: Action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state
  }
}

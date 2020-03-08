import { Action, Order } from "../../../models";
import { products } from "../../Product/reducer";

const orders: Order[] = [
  {
    product: products[0],
    quantity: 1
  },
  {
    product: products[1],
    quantity: 1
  },
  {
    product: products[2],
    quantity: 1
  },
  {
    product: products[3],
    quantity: 1
  }
];

export interface ICartState {
  orders: Order[];
}

export default (state: ICartState = {
  orders
}, action: Action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state
  }
}

import { Order } from "./Order";

export interface ICart {
  orders: Order[];
}

export class Cart implements ICart {
  orders: Order[];

  constructor(orders: Order[] = []) {
    this.orders = orders;
  } 
}

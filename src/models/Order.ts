import { Product } from "./Product";

export interface IOrder {
  product: Product;
  quantity: number;
}

export class Order implements IOrder {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  } 
}

import React from 'react';
import OrderItem, { IOrderItem } from './components/OrderItem/OrderItem';

import './Cart.scss';

export interface ICart {
  orders: IOrderItem[];
}

function Cart(props: ICart) {
  return (
    <div className="cart">
      <div className="cart-orders-list">
        {props.orders.map((o) => <OrderItem {...o} />)}
      </div>
      <hr />
      <div className="cart-total-price">
        <span className="total-label">Total Amount</span>
        <span className="total-label">10000</span>
      </div>
    </div>
  );
}

export default Cart;
import React from 'react';
import OrderItem from './components/OrderItem/OrderItem';
import { ICart } from '../../models/Cart';

import './CartContainer.scss';


function CartContainer(props: ICart) {
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

export default CartContainer;
import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import { ICart } from '../../../../models/Cart';

import './CartContainer.scss';


function CartContainer(props: ICart) {
  return (
    <div className="cart">
      <div className="cart-orders-list">
        {props.orders.map((o, i) => <OrderItem key={i} {...o} />)}
        {props.orders.map((o, i) => <OrderItem key={i} {...o} />)}

      </div>
      <hr />
      <div className="cart-total-price">
        <span className="total-label">Total Amount</span>
        <span className="total-label-amount">10000</span>
      </div>
      <button className="checkout-button">Make a payment</button>
    </div>
  );
}

export default CartContainer;
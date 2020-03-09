import React from 'react';
import OrderItem from '../components/OrderItem/OrderItem';

import './index.scss';
import { ICartState } from '../reducer';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../rootReducer';


function CartContainer(props: ICartState) {

  const orders = useSelector((s: IAppState) => s.cart.orders)
  return (
    <div className="cart">
      <div className="cart-orders-list">
        {orders.map((o, i) => <OrderItem key={i} {...o} />)}
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
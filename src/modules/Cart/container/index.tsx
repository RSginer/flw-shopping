import React from 'react';
import OrderItem from '../components/OrderItem/OrderItem';

import './index.scss';
import { ICartState } from '../reducer';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../rootReducer';
import EmpryOrders from '../components/EmptyOrders/EmptyOrders';


function CartContainer(props: ICartState) {

  const orders = useSelector((s: IAppState) => s.cart.orders)
  return (
    <div className="cart">
      <div className="cart-orders-list">
        {orders.length > 0 && orders.map((o, i) => <OrderItem key={i} {...o} />)}
        {orders.length === 0 && <EmpryOrders />}
      </div>
      <hr />
      {orders.length > 0 && <div className="cart-total-price">
        <span className="total-label">Total Amount</span>
        <span className="total-label-amount">10000</span>
      </div>}
      <button disabled={orders.length === 0} className="checkout-button">Make a payment</button>
    </div>
  );
}

export default CartContainer;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';

import { IAppState } from '../../../rootReducer';
import { EmptyOrders } from '../components/EmptyOrders/EmptyOrders';
import { OrderItem } from '../components/OrderItem/OrderItem';
import { setRoute } from '../../Common/actions';
import { Order } from '../../../models';


export interface ICartContainer {
  setHeader: boolean;
}

export function CartContainer(props: ICartContainer = { setHeader: true }) {
  const dispatch = useDispatch();
  const orders = useSelector((s: IAppState) => s.cart.orders);

  function getTotalAmount(orders: Order[]): number {
    return orders.map((o: Order) => {
      if (o.product && o.product.price) {
        return o.product.price * o.quantity;
      } else {
        return 0
      }
    }).reduce((p: number, c: number) => p + c);
  }

  useEffect(() => {
    if (props.setHeader) {
      dispatch(setRoute(true, false, false, 'Cart'))
    }
  }, [dispatch, props])

  return (
    <div className="cart">
      <div className="cart-orders-list">
        {orders.length > 0 && orders.map((o, i) => <OrderItem key={i} {...o} />)}
        {orders.length === 0 && <EmptyOrders />}
      </div>
      <hr />
      {orders.length > 0 && <div className="cart-total-price">
        <span className="total-label">Total Amount</span>
        <span className="total-label-amount">{getTotalAmount(orders)}</span>
      </div>}
      <button disabled={orders.length === 0} className="checkout-button">Make a payment</button>
    </div>
  );
}

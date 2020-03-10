import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';

import { IAppState } from '../../../rootReducer';
import { EmptyOrders } from '../components/EmptyOrders/EmptyOrders';
import { OrderItem } from '../components/OrderItem/OrderItem';
import { setRoute } from '../../Shared/actions';
import { Order } from '../../../models';
import { addToCart, removeFromCart } from '../actions';

export interface ICartContainer {
  setHeader: boolean;
}

export function CartContainer(props: ICartContainer = { setHeader: true }) {
  const dispatch = useDispatch();
  const orders = useSelector((s: IAppState) => s.cart.orders);

  function getTotalAmount(ordersList: Order[]): number {
    return ordersList
      .map((o: Order) => {
        if (o.product && o.product.price) {
          return o.product.price * o.quantity;
        } else {
          return 0;
        }
      })
      .reduce((p: number, c: number) => p + c);
  }

  useEffect(() => {
    if (props.setHeader) {
      dispatch(setRoute(true, false, false, '🛒 Cart'));
    }
  }, [dispatch, props]);

  return (
    <div className="cart">
      <div className="cart-orders-list">
        {orders.length > 0 &&
          orders.map((o: Order, i: number) => (
            <OrderItem
              key={i}
              onIncrease={() => {
                if (o.product.stock && o.product.stock > 0) {
                  dispatch(addToCart(o.product));
                }
              }}
              onDecrease={() => dispatch(removeFromCart(o.product))}
              order={o}
            />
          ))}
        {orders.length === 0 && <EmptyOrders />}
      </div>
      <hr />
      {orders.length > 0 && (
        <div className="cart-total-price">
          <span className="total-label">Total Amount</span>
          <span className="total-label-amount">{getTotalAmount(orders)}</span>
        </div>
      )}
      <button
        onClick={() =>
          alert(`Pay $${getTotalAmount(orders)} and we will send your order`)
        }
        disabled={orders.length === 0}
        className="checkout-button"
      >
        Make a payment
      </button>
    </div>
  );
}
